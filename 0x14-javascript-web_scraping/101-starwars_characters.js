#!/usr/bin/node

const request = require('request');

const movieId = process.argv[2];

const apiurl = 'https://swapi.dev/api/films/${movieId}/';

// the 'request' module to perform an HTTP GET request to the star wars API URL.
request(apiUrl, function (error, response, body) {
   // check if the was no error during the HTTP request
   if (!error && response.statusCode === 200) {
     // parse the JSON response bod
     const movieData = JSON.parse(body);
     // create an array of promises that fetch the data for each individual character.
     const characterpromises = movieData.characters.map((characterUrl) => {
       return new promise((resolve, reject) => {
         // use another 'request' to fetch the data for the individual character.
         request (characterUrl, function (charError, charResponse, charBody) {
           // check if there was no error during the HTTP request
           if (!charError && charResponse.statusCode === 200) {
             // parse the JSON response body
             const characterData = JSON.parse(charBody);
             // resolve the promise with the name of the character.
             resolve(characterData.name);
           } else {
             // reject the promise with the error message if there was an error during the HTTP request
             reject(new Error('Error fetching character data: ${charError}'));
           }
         });
        });
       });

       promise.all(characterPromises)
         .then((characterNames) => {
           console.log(characterNames.join('\n'));
         })
         .catch((error) => {
           console.error(error.message); 
         });
      } else {
        console.error('Error fetching movie data:', error);
      }
});
