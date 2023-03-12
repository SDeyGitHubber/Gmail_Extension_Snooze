import * as dotenv from 'dotenv';

dotenv.config();
const apiKey = process.env.APIKey;
const clientId = process.env.clientID;

// Load the Gmail API
var gapi = window.gapi;

// Initialize the Gmail API
gapi.load("client:auth2", function() {
  gapi.client.init({
    apiKey: apiKey,
    clientId: clientId,
    discoveryDocs: [
      "https://www.googleapis.com/discovery/v1/apis/gmail/v1/rest"
    ],
    scope: "https://www.googleapis.com/auth/gmail.modify"
  });

  // Authorize the Gmail API
  gapi.auth2.getAuthInstance().signIn();
});
