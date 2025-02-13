
// Import routers. 
import authRouter from "./auth.routes.js";
import subscriptionRouter from "./subscriptions.routes.js";
import userRouter from "./user.routes.js";

const routeDispatcher = (server) => {
    server.use('/api/v1/auth', authRouter);

    server.use('/api/v1/user', userRouter);

    server.use('/api/v1/subscriptions', subscriptionRouter);
}

export default routeDispatcher;