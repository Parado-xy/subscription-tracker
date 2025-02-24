// Import express;
import express from 'express';
// Import Middlewares
import cookieParser from "cookie-parser";
import bodyParser from 'body-parser';

// Import port from .env
import { PORT } from './env.js';

// Create server
const server = express();

// Use Middlewares
server.use(express.json());
server.use(bodyParser.json())
server.use(express.urlencoded({extended: false}));
server.use(cookieParser())

// dispatch routes;
import routeDispatcher from './routes/dispatcher.routes.js'; 
routeDispatcher(server);

// Error Handling Middleware
import errorHandler from "./middlewares/error.middlewares.js";
server.use(errorHandler)

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