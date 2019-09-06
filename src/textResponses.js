const hello = 'Hello World';

const getTimeString = () => {
  const d = new Date();
  const dateString = `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
  return dateString;
};

// function that utilizes the request and response objects made in a call to the server
const getTime = (request, response) => {
  // informs the reciever of the response of the status code and content type
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  /* writes out the passed var to the response object, to be parsed as the content type info
    above describes (plain) */
  response.write(getTimeString());
  // denotes that we're done writing to the response object
  response.end();
};

// function that utilizes the request and response objects made in a call to the server
const getHello = (request, response) => {
  // informs the reciever of the response of the status code and content type
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  /* writes out the passed var to the response object, to be parsed as the content type info
    above describes (plain) */
  response.write(hello);
  // denotes that we're done writing to the response object
  response.end();
};

// mark the private-by-default items above as OK to export with this "module"
// can make the exported function name different if desired, but would be bad practice
module.exports.hello = hello;
module.exports.getTimeString = getTimeString;
module.exports.getHello = getHello;
module.exports.getTime = getTime;
