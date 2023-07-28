#!/usr/bin/node

const request = require('request');

const apiurl = process.argv[2];

request(apiurl, function (error, response, body) {
  if (!error && response.statusCode === 200) {
    try {
      const todos = JSON.parse(body);

      const completed = {};

       todos.forEach((todo) => {
	 if (todo.completed) {
	    if (completed[todo.userId] === undefined) {
	      completed[todo.userId] = 1;
	     } else {
               completed[task.userId]++;
             }
          }
        });

	 const output = ' {${object.entries(completed).map(([key, value]) => ' '$(key)': $(value)').join(',\n ')} }' ;

	 console.log(object.keys(completed) .length > 2 ? output ; completed);
	} catch (parseError) {
	 console.error('Error parsing JSON:', parseError);
	}
      }  else {
	   console.error('Error:', error);
       }
     });
