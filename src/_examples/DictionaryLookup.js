/* This simple app uses the '/dictionary/lookup' resource to return alternative
translations for a word and a small number of idiomatic phrases. */

/* This template relies on the request module, a simplified and user friendly
way to make HTTP requests. */
const request = require('request');
const { v4: uuidv4 } = require('uuid');
const { TRANSLATION_SERVICE } = require('./constants');

var key_var = TRANSLATION_SERVICE.KEY;
if (!key_var) {
    throw new Error('Please set/export the following environment variable: ' + key_var);
}
var subscriptionKey = key_var;
var endpoint_var = TRANSLATION_SERVICE.ENDPOINT;
if (!endpoint_var) {
    throw new Error('Please set/export the following environment variable: ' + endpoint_var);
}
var endpoint = endpoint_var;

/* If you encounter any issues with the base_url or path, make sure that you are
using the latest endpoint: https://docs.microsoft.com/en-us/azure/cognitive-services/translator/reference/v3-0-dictionary-lookup */
function dictionaryLookup(){
    let options = {
        method: 'POST',
        baseUrl: endpoint,
        url: 'dictionary/lookup',
        qs: {
          'api-version': '3.0',
          'from': 'en',
          'to': 'zh'
        },
        headers: {
          'Ocp-Apim-Subscription-Key': subscriptionKey,
          'Content-type': 'application/json',
          'Ocp-Apim-Subscription-Region': TRANSLATION_SERVICE.LOCATION,
          'X-ClientTraceId': uuidv4().toString()
        },
        body: [{
              'text': 'growled'
        }],
        json: true,
    };

    request(options, function(err, res, body){
        console.log(Math.max(...body[0].translations.map(translation => translation.confidence)))
        console.log(JSON.stringify(body, null, 2));
    });
};

// Call the function to return alternate translations.
dictionaryLookup();
