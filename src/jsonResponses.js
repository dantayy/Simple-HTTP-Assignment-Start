const text = require('./textResponses.js');

const getHelloJSON = (request, response) => {
  // JSON object to send back in the response obj
  const helloJSON = {
    message: text.hello,
  };
    // have to stringify it before sending it back
  const stringMessage = JSON.stringify(helloJSON);

  // informs the reciever of the response of the status code and content type
  response.writeHead(200, { 'Content-Type': 'application/json' });
  /* writes out the passed var to the response object, to be parsed as the content type info
    above describes (json) */
  response.write(stringMessage);
  // denotes that we're done writing to the response object
  response.end();
};

const getTimeJSON = (request, response) => {
  // JSON object to send back in the response obj
  const timeJSON = {
    time: text.getTimeString(),
  };
    // have to stringify it before sending it back
  const stringMessage = JSON.stringify(timeJSON);

  // informs the reciever of the response of the status code and content type
  response.writeHead(200, { 'Content-Type': 'application/json' });
  /* writes out the passed var to the response object, to be parsed as the content type info
    above describes (json) */
  response.write(stringMessage);
  // denotes that we're done writing to the response object
  response.end();
};

// mark the private-by-default items above as OK to export with this "module"
// can make the exported function name different if desired, but would be bad practice
module.exports.getHelloJSON = getHelloJSON;
module.exports.getTimeJSON = getTimeJSON;
