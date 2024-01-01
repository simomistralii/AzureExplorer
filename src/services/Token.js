const axios = require('axios');

const getToken = async () => {
  const url = `https://login.microsoftonline.com/b3397bdd-8999-4737-84f8-6431c70acf56/oauth2/v2.0/token`;
  const clientId = 'c3dd77ea-73f0-4e52-b5a2-8cf76a636518';
  const clientSecret = '1b46b164-65a5-4440-b0c5-06f60eb0556d';
  const scope = 'https://graph.microsoft.com/.default';

  try {
    const response = await axios.post(url, {
      grant_type: 'client_credentials',
      client_id: clientId,
      client_secret: clientSecret,
      scope: scope,
    });

    const accessToken = response.data.access_token;
    console.log('Access Token:', accessToken);
  } catch (error) {
    console.error('Error getting access token:', error.message);
  }
};

getToken();
