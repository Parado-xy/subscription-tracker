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

// Import DB function.
import connectToDatabase from './databases/mongodb.js';

// Listen for connections. 
server.listen(port, async ()=> {
    console.log(` Server Listening on port: ${port}`);

    // Connect to the database.
    await connectToDatabase();
})

export default server;