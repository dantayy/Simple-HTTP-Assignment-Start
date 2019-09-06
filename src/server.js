const http = require('http');
const htmlHandler = require('./htmlResponses.js');
const textHandler = require('./textResponses.js');
const jsonHandler = require('./jsonResponses.js');
const imageHandler = require('./imageResponses.js');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

/* request is a data object provided when a user pings the server, response is an initially empty
object that will be filled by this function for interpretation by the client on their end
afterwards */
const onRequest = (request, response) => {
  console.log(request.url);

  // display a different page based on the url passed through the request obj
  switch (request.url) {
    case '/':
      htmlHandler.getIndex(request, response);
      break;
    case '/page2':
      htmlHandler.getPage2(request, response);
      break;
    case '/hello':
      textHandler.getHello(request, response);
      break;
    case '/time':
      textHandler.getTime(request, response);
      break;
    case '/helloJSON':
      jsonHandler.getHelloJSON(request, response);
      break;
    case '/timeJSON':
      jsonHandler.getTimeJSON(request, response);
      break;
    case '/image':
      imageHandler.getImage(request, response);
      break;
    default:
      htmlHandler.getIndex(request, response);
      break;
  }
};

/* runs http's "createServer" function using the provided function (onRequest) listening on port
3000, meaning when a user pings that port the onRequest function will run */
http.createServer(onRequest).listen(port);

console.log(`Listening on 127.0.0.1:${port}`);
