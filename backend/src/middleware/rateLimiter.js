import ratelimit from "../config/upstash.js";

const rateLimiter = async (req,res,next)=>{

    try {
        const{success} = await ratelimit.limit(req.ip || "127.0.0.1")

    if(!success)
    {
        return res.status(429).json("Too many requests Please try again later!")
    }
    next();
    } catch (error) {
console.log("Rate Limit error ",error );
next(error);
    }
}

export default rateLimiter