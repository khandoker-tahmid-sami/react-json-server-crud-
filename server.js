const jsonServer = require('json-server');  // Import JSON Server
const server = jsonServer.create();         // Create an instance of JSON Server
const router = jsonServer.router('db.json'); // Connect the router to your db.json file
const middlewares = jsonServer.defaults();  // Set up default middlewares for JSON Server

server.use(middlewares);  // Use the default middlewares
server.use(router);       // Use the router to handle API requests

// Start the server on port 8000
server.listen(8000, () => {
  console.log('JSON Server is running on port 8000');
});
