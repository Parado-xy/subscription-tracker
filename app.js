// Import express;

import express from 'express';

// Import port from .env
import { PORT } from './env.js';

// Create server
const server = express();

// dispatch routes;
import routeDispatcher from './routes/dispatcher.routes.js'; 
routeDispatcher(server);


// Set Port;
const port = PORT || 4567;

// Listen for connections. 
server.listen(port, ()=> {
    console.log(` Server Listening on port: ${port}`);
})

export default server;