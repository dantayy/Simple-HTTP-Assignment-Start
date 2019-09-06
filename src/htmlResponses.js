const fs = require('fs'); // file system module

// reads file synchronously (usually prefer asynchronus so multiple things can process at once)
const index = fs.readFileSync(`${__dirname}/../client/client.html`);
/* we're doing synchronus here bc on startup of a server you want to make sure everything thats
needed later on in the code is loaded */
const page2 = fs.readFileSync(`${__dirname}/../client/client2.html`);

// function that utilizes the request and response objects made in a call to the server
const getIndex = (request, response) => {
  // informs the reciever of the response of the status code and content type
  response.writeHead(200, { 'Content-Type': 'text/html' });
  /* writes out the passed var to the response object, to be parsed as the content type info
    above describes (html) */
  response.write(index);
  // denotes that we're done writing to the response object
  response.end();
};

// function that utilizes the request and response objects made in a call to the server
const getPage2 = (request, response) => {
  // informs the reciever of the response of the status code and content type
  response.writeHead(200, { 'Content-Type': 'text/html' });
  /* writes out the passed var to the response object, to be parsed as the content type info
    above describes (html) */
  response.write(page2);
  // denotes that we're done writing to the response object
  response.end();
};

// mark the private-by-default items above as OK to export with this "module"
// can make the exported function name different if desired, but would be bad practice
module.exports.getIndex = getIndex;
module.exports.getPage2 = getPage2;
