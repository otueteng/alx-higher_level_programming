#!/usr/bin/node

const fs = require('request');
// Import the 'request' module.

request.get (process.argv[2])
// use the 'request' module to perform an HTTP GET request to the URL.

  .on ('response', function (response) {
    // set up an event listener for the 'response' event omitted by the HTTP request.

     console.log('code: $(response.statusCode)');
     // Log the HTTP status code of the response to the console.
  });
