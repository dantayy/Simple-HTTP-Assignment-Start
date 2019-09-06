const fs = require('fs'); // file system module

// reads file synchronously (usually prefer asynchronus so multiple things can process at once)
const image = fs.readFileSync(`${__dirname}/../client/spongegar.png`);

// function that utilizes the request and response objects made in a call to the server
const getImage = (request, response) => {
  // informs the reciever of the response of the status code and content type
  response.writeHead(200, { 'Content-Type': 'image/png' });
  /* writes out the passed var to the response object, to be parsed as the content type info
    above describes (png) */
  response.write(image);
  // denotes that we're done writing to the response object
  response.end();
};

// mark the private-by-default items above as OK to export with this "module"
// can make the exported function name different if desired, but would be bad practice
module.exports.image = image;
module.exports.getImage = getImage;
