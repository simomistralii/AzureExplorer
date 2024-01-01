const http = require('http');
const axios = require('axios');
const { parse } = require('querystring');

const port = 3002; // Choose a port for your server

const server = http.createServer(async (req, res) => {
  if (req.method === 'POST' && req.url === '/get-token') {
    let body = '';

    req.on('data', (chunk) => {
      body += chunk.toString();
    });

    req.on('end', async () => {
      const { clientId, clientSecret, tenantId } = parse(body);
      const tokenEndpoint = `https://login.microsoftonline.com/${tenantId}/oauth2/v2.0/token`;

      const formData = new URLSearchParams();
      formData.append('grant_type', 'client_credentials');
      formData.append('client_id', clientId);
      formData.append('client_secret', clientSecret);
      formData.append('scope', 'https://graph.microsoft.com/.default');

      try {
        const response = await axios.post(tokenEndpoint, formData, {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        });

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ accessToken: response.data.access_token }));
      } catch (error) {
        console.error('Error obtaining access token:', error.message);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Error obtaining access token' }));
      }
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
