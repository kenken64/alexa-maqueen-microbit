/* eslint-disable  func-names */
/* eslint-disable  no-console */

const Alexa = require('ask-sdk');
var https = require('https');


function httpPost(command) {
  console.log("http post..." + command);
  return new Promise(((resolve, reject) => {
    console.log("http post...");
    const postData = JSON.stringify({
      secret: 'dp6mlxaiae'
    });
    console.log("http post..." + postData);
    
    var options = {
        host: '5cd50816.ngrok.io',
        port: 443,
        path: command,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Content-Length': postData.length
        }
    };
    
    var callback = function(response) {

      var str = '';

      response.on('data', function (chunk) {
         str += chunk;
      });

      response.on('end', function () {
         console.log("error!");
      });
   };

    const request = https.request(options, callback);
    
    request.write(postData);
    request.end();
  }));
}


const LaunchRequestHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'LaunchRequest';
  },
  handle(handlerInput) {
    const speechText = 'Welcome to the Maqueen Robot Skills Kit, waiting for your command!';

    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(speechText)
      .withSimpleCard('Hello World', speechText)
      .getResponse();
  },
};

const HelloWorldIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'HelloWorldIntent';
  },
  handle(handlerInput) {
    const speechText = 'Hello World!';

    return handlerInput.responseBuilder
      .speak(speechText)
      .withSimpleCard('Hello World', speechText)
      .getResponse();
  },
};

const RobotRainbowIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'RobotRainbowIntent';
  },
  handle(handlerInput) {
    const speechText = 'Maqueen lightning up your day!';
    httpPost('/command/robotrgb');
    return handlerInput.responseBuilder
      .speak(speechText)
      .withSimpleCard('Fireworks', speechText)
      .getResponse();
  },
};

const RobotForwardIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'RobotForwardIntent';
  },
  handle(handlerInput) {
    const speechText = 'Maqueen moving forward!';
    console.log(" moving up");
    httpPost('/command/robotup');
    console.log(" moving upxdddd");
    return handlerInput.responseBuilder
      .speak(speechText)
      .withSimpleCard('Move Forward', speechText)
      .getResponse();
  },
};

const RobotBackwardIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'RobotBackwardIntent';
  },
  handle(handlerInput) {
    const speechText = 'Maqueen moving backward!';
    httpPost('/command/robotdown');
    return handlerInput.responseBuilder
      .speak(speechText)
      .withSimpleCard('Maqueen moving backward', speechText)
      .getResponse();
  },
};

const RobotTurnLeftIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'RobotTurnLeftIntent';
  },
  handle(handlerInput) {
    const speechText = 'Maqueen turning left!';
     httpPost('/command/robotleft');
    return handlerInput.responseBuilder
      .speak(speechText)
      .withSimpleCard('Maqueen turning Left', speechText)
      .getResponse();
  },
};

const RobotTurnRightIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'RobotTurnRightIntent';
  },
  handle(handlerInput) {
    const speechText = 'Maqueen turning right!';
     httpPost('/command/robotright');
    return handlerInput.responseBuilder
      .speak(speechText)
      .withSimpleCard('Maqueen turning Right', speechText)
      .getResponse();
  },
};

const HelpIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'AMAZON.HelpIntent';
  },
  handle(handlerInput) {
    const speechText = 'You can say hello to me!';

    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(speechText)
      .withSimpleCard('Hello World', speechText)
      .getResponse();
  },
};

const CancelAndStopIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && (handlerInput.requestEnvelope.request.intent.name === 'AMAZON.CancelIntent'
        || handlerInput.requestEnvelope.request.intent.name === 'AMAZON.StopIntent');
  },
  handle(handlerInput) {
    const speechText = 'Goodbye!';

    return handlerInput.responseBuilder
      .speak(speechText)
      .withSimpleCard('Hello World', speechText)
      .getResponse();
  },
};

const SessionEndedRequestHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'SessionEndedRequest';
  },
  handle(handlerInput) {
    console.log(`Session ended with reason: ${handlerInput.requestEnvelope.request.reason}`);

    return handlerInput.responseBuilder.getResponse();
  },
};

const ErrorHandler = {
  canHandle() {
    return true;
  },
  handle(handlerInput, error) {
    console.log(`Error handled: ${error.message}`);

    return handlerInput.responseBuilder
      .speak('Sorry, I can\'t understand the command. Please say again.')
      .reprompt('Sorry, I can\'t understand the command. Please say again.')
      .getResponse();
  },
};

const skillBuilder = Alexa.SkillBuilders.custom();

exports.handler = skillBuilder
  .addRequestHandlers(
    LaunchRequestHandler,
    HelloWorldIntentHandler,
    RobotTurnLeftIntentHandler,
    RobotTurnRightIntentHandler,
    RobotForwardIntentHandler,
    RobotBackwardIntentHandler,
    RobotRainbowIntentHandler,
    HelpIntentHandler,
    CancelAndStopIntentHandler,
    SessionEndedRequestHandler
  )
  .addErrorHandlers(ErrorHandler)
  .lambda();