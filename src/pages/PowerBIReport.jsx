import React, { useEffect, useState } from 'react';
import { useUser } from '../contexts/UserContext';
import { PowerBIEmbed } from 'powerbi-client-react';
import { models } from 'powerbi-client';

const PowerBIReportEmbed = () => {
  const { user } = useUser();
  const [embedToken, setEmbedToken] = useState(null);
  const [embedUrl, setEmbedUrl] = useState(null);


  const accessToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IjVCM25SeHRRN2ppOGVORGMzRnkwNUtmOTdaRSIsImtpZCI6IjVCM25SeHRRN2ppOGVORGMzRnkwNUtmOTdaRSJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvYjMzOTdiZGQtODk5OS00NzM3LTg0ZjgtNjQzMWM3MGFjZjU2LyIsImlhdCI6MTcwNDA1NDA5MCwibmJmIjoxNzA0MDU0MDkwLCJleHAiOjE3MDQwNTgxNTUsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVFFBeS84VkFBQUFaMzlxWFAxSXpYWnpOKzJMb2NlSkU0Smh0cmlYWFJPREZHQ09GeGNMckd3VDB3WVkxM1ZmY0JXRXBaOWJtNTNOIiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6Ijg3MWMwMTBmLTVlNjEtNGZiMS04M2FjLTk4NjEwYTdlOTExMCIsImFwcGlkYWNyIjoiMCIsImlwYWRkciI6IjQxLjE0MC4xMDIuMzAiLCJuYW1lIjoic2ltbyIsIm9pZCI6ImIzZjg0M2Q0LWJlMzYtNGQ2NS1hODJmLTI1ODlkMDUzMWQzZiIsInB1aWQiOiIxMDAzMjAwMzMwODU5NkQ4IiwicmgiOiIwLkFSQUEzWHM1czVtSk4wZUUtR1F4eHdyUFZna0FBQUFBQUFBQXdBQUFBQUFBQUFDWEFMby4iLCJzY3AiOiJ1c2VyX2ltcGVyc29uYXRpb24iLCJzaWduaW5fc3RhdGUiOlsia21zaSJdLCJzdWIiOiJvUi1fSmlIem96RUNjeU1TODZrVDVNblB3ZHgxTXNKaHpFc3VtTTJodFVvIiwidGlkIjoiYjMzOTdiZGQtODk5OS00NzM3LTg0ZjgtNjQzMWM3MGFjZjU2IiwidW5pcXVlX25hbWUiOiJzaW1vQG1qb3VuZXlvdXNzZWZnbWFpbC5vbm1pY3Jvc29mdC5jb20iLCJ1cG4iOiJzaW1vQG1qb3VuZXlvdXNzZWZnbWFpbC5vbm1pY3Jvc29mdC5jb20iLCJ1dGkiOiJBZkJYbU0yVzBrcUtYRlRLOTllYUFRIiwidmVyIjoiMS4wIiwid2lkcyI6WyJiNzlmYmY0ZC0zZWY5LTQ2ODktODE0My03NmIxOTRlODU1MDkiXX0.Ltbw-dlAkBuRbszljXUxcblsHkMmy1tuQpCmlcHqe8KAwF6wxsBcprRrSOSPzLqdKTVJOn2oeQssyZvqAEgqzOpLkbN1u8OJ972GrfuEvGN_wS_rZMe7tRrP22EeAOlFSPC0ebCtUxGsypF7TWP4sT_jnf_ICi7z3M6SV8o5pqRahC38DGgQnZKUcE3O0Tjl129dIaLge08D1J--85Q3_D-1UbW_gBpK-il0R8tWvK2NdCU7snwgfYACtc52RmtK4o6dxku2oeTP-KDJpPhGBU393__bHgUpI8wquzzJ3S5k3oJjdJDhXGG66HZQNQrOeT_MXXahlwk0gA5OEU9PsA'

 
  return (
    <>
      <PowerBIEmbed
          embedConfig={{
            type: 'report',   // Supported types: report, dashboard, tile, visual and qna
            id: 'ea122c56-5c9f-4930-b3fa-73156297594a',
            embedUrl: "https://app.powerbi.com/reportEmbed?reportId=ea122c56-5c9f-4930-b3fa-73156297594a&groupId=5ff25021-e6c8-47f6-afbf-8e1eb9eec9d7&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVNPVVRILUFGUklDQS1OT1JUSC1BLVBSSU1BUlktcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQiLCJlbWJlZEZlYXR1cmVzIjp7InVzYWdlTWV0cmljc1ZOZXh0Ijp0cnVlLCJkaXNhYmxlQW5ndWxhckpTQm9vdHN0cmFwUmVwb3J0RW1iZWQiOnRydWV9fQ%3d%3d",
            //accessToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IjVCM25SeHRRN2ppOGVORGMzRnkwNUtmOTdaRSIsImtpZCI6IjVCM25SeHRRN2ppOGVORGMzRnkwNUtmOTdaRSJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvYjMzOTdiZGQtODk5OS00NzM3LTg0ZjgtNjQzMWM3MGFjZjU2LyIsImlhdCI6MTcwNDA1NDA5MCwibmJmIjoxNzA0MDU0MDkwLCJleHAiOjE3MDQwNTgxNTUsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVFFBeS84VkFBQUFaMzlxWFAxSXpYWnpOKzJMb2NlSkU0Smh0cmlYWFJPREZHQ09GeGNMckd3VDB3WVkxM1ZmY0JXRXBaOWJtNTNOIiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6Ijg3MWMwMTBmLTVlNjEtNGZiMS04M2FjLTk4NjEwYTdlOTExMCIsImFwcGlkYWNyIjoiMCIsImlwYWRkciI6IjQxLjE0MC4xMDIuMzAiLCJuYW1lIjoic2ltbyIsIm9pZCI6ImIzZjg0M2Q0LWJlMzYtNGQ2NS1hODJmLTI1ODlkMDUzMWQzZiIsInB1aWQiOiIxMDAzMjAwMzMwODU5NkQ4IiwicmgiOiIwLkFSQUEzWHM1czVtSk4wZUUtR1F4eHdyUFZna0FBQUFBQUFBQXdBQUFBQUFBQUFDWEFMby4iLCJzY3AiOiJ1c2VyX2ltcGVyc29uYXRpb24iLCJzaWduaW5fc3RhdGUiOlsia21zaSJdLCJzdWIiOiJvUi1fSmlIem96RUNjeU1TODZrVDVNblB3ZHgxTXNKaHpFc3VtTTJodFVvIiwidGlkIjoiYjMzOTdiZGQtODk5OS00NzM3LTg0ZjgtNjQzMWM3MGFjZjU2IiwidW5pcXVlX25hbWUiOiJzaW1vQG1qb3VuZXlvdXNzZWZnbWFpbC5vbm1pY3Jvc29mdC5jb20iLCJ1cG4iOiJzaW1vQG1qb3VuZXlvdXNzZWZnbWFpbC5vbm1pY3Jvc29mdC5jb20iLCJ1dGkiOiJBZkJYbU0yVzBrcUtYRlRLOTllYUFRIiwidmVyIjoiMS4wIiwid2lkcyI6WyJiNzlmYmY0ZC0zZWY5LTQ2ODktODE0My03NmIxOTRlODU1MDkiXX0.Ltbw-dlAkBuRbszljXUxcblsHkMmy1tuQpCmlcHqe8KAwF6wxsBcprRrSOSPzLqdKTVJOn2oeQssyZvqAEgqzOpLkbN1u8OJ972GrfuEvGN_wS_rZMe7tRrP22EeAOlFSPC0ebCtUxGsypF7TWP4sT_jnf_ICi7z3M6SV8o5pqRahC38DGgQnZKUcE3O0Tjl129dIaLge08D1J--85Q3_D-1UbW_gBpK-il0R8tWvK2NdCU7snwgfYACtc52RmtK4o6dxku2oeTP-KDJpPhGBU393__bHgUpI8wquzzJ3S5k3oJjdJDhXGG66HZQNQrOeT_MXXahlwk0gA5OEU9PsA',
            accessToken: accessToken,
            tokenType: models.TokenType.Aad,
            settings: {
              panes: {
                filters: {
                  expanded: false,
                  visible: true
                }
              },
            }
          }}

          eventHandlers={
            new Map([
              ['loaded', function () { console.log('Report loaded'); }],
              ['rendered', function () { console.log('Report rendered'); }],
              ['error', function (event) { console.log(event.detail); }]
            ])
          }

          cssClassName={"Embed-container"}

          getEmbeddedComponent={(embeddedReport) => {
            window.report = embeddedReport;
          }}
        />
    </>
  );
};

export default PowerBIReportEmbed;