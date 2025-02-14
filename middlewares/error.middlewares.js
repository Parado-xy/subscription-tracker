
const errorHandler = (err, req, res, next) => {
    try{
        let error = {
            message: err.message,
            status: err.status || 500,
            stack: err.stack,
        }

        console.error(err);
        // Mongoose validation error
        if(err.name === "ValidationError"){
            error.message = err.errors;
            error.status = 400;
            // Mongoose bad ObjectId
        }else if(err.name === "CastError"){
            error.message = `Resource not found with id of ${err.value}`;
            error.status = 404;
            // Mongoose duplicate key
        }else if(err.code === 11000){
            error.message = "Duplicate field value entered";
            error.status = 400;
        }

    }catch(err){
        next(err);
    }
}

export default errorHandler;