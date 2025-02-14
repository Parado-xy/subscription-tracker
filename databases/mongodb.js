import mongoose from "mongoose";

import { DB_URI, NODE_ENV, } from "../env.js";

if(!DB_URI){
    throw new Error(`
        Please define the MONGODB__URI environment vatiable inside .env.<development/production>.local
        `);
}

const connectToDatabase = async () => {
    try{
        await mongoose.connect(DB_URI);

        // Log succesful connection
        console.log(`Database connection successful to: ${NODE_ENV} environment.`)
    }catch (err){
        console.error(err)
        // eslint-disable-next-line no-undef
        process.exit(1)
    }
}

export default connectToDatabase