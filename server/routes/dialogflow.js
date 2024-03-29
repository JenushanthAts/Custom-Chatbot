const express = require('express');
const router = express.Router();
//const structjson = require('./structjson.js');
const dialogflow = require('dialogflow');
 

const dialogflowConfig = require("../config/config");
const projectId = dialogflowConfig.projectId;
const configuration = {
  credentials: {
    private_key: dialogflowConfig.privateKey,
    client_email: dialogflowConfig.clientEmail
  }
};

const sessionId = "987654";
const languageCode = "en-US";
const sessionClient = new dialogflow.SessionsClient(configuration);

const sessionPath = sessionClient.sessionPath(projectId, sessionId);
var jsonParser = express.json();
var urlEncoded = express.urlencoded({ extended: true });
// Text Query Route

router.post('/textQuery',jsonParser,urlEncoded, async (req, res) => {
    //We need to send some information that comes from the client to Dialogflow API 
    // The text query request.
    const request = {
        session: sessionPath,
        queryInput: {
            text: {
                // The query to send to the dialogflow agent
                text: req.body.text,
                // The language used by the client (en-US)
                languageCode: languageCode,
            },
        },
    };

    // Send request and log result
    const responses = await sessionClient.detectIntent(request);
    console.log('Detected intent');
    const result = responses[0].queryResult;
    console.log(`  Query: ${result.queryText}`);
    console.log(`  Response: ${result.fulfillmentText}`);

    res.send(result)
})



//Event Query Route

router.post('/eventQuery',jsonParser,urlEncoded, async (req, res) => {
    //We need to send some information that comes from the client to Dialogflow API 
    // The text query request.
    const request = {
        session: sessionPath,
        queryInput: {
            event: {
                // The query to send to the dialogflow agent
                name: req.body.event,
                // The language used by the client (en-US)
                languageCode: languageCode,
            },
        },
    };

    // Send request and log result
    const responses = await sessionClient.detectIntent(request);
    console.log('Detected intent');
    const result = responses[0].queryResult;
    console.log(`  Query: ${result.queryText}`);
    console.log(`  Response: ${result.fulfillmentText}`);

    res.send(result)
})







module.exports = router;
