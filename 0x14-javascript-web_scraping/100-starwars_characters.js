#!/usr/bin/node

const req = require('request');

const movieId = process.argv[2];
const apiurl = 'https://swapi.dev/api/films/$(movieId)/';

request(apiUrl, function (error, response, body) {
   if (!error && response.statusCode === 200) {
     const movieData = JSON.parse(body);

     console.log('characters of "${movieData.title}":');

     movieData.characters.forEach((characterUrl) => {
       request(characterUrl, function (charError, charResponse, charBody) {
	 if (!charError && charResponse.statusCode === 200) {
	   const characterData = JSON.parse(charBody);

	   console.log(characterData.name);
	 } else {
	   console.error('Error fetching character data:', charError);
	 }
	});
       });
    } else {
      console.error('Error fetching movie data:', error);
    }
});
