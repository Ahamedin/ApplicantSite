import Bottleneck from "bottleneck";


const limiter = new Bottleneck({
    maxConcurrent: 1, 
    reservoir: 100, 
    reservoirRefreshAmount: 100, 
    reservoirRefreshInterval: 15 * 60 * 1000,
});

const rateLimiter = async (req,res,next) => {
    try {
        await limiter.schedule(() => Promise.resolve());
        next();
    } catch (error) {
        return res.status(429).json({
            success:false,
            message: "Too many requests.Please try again later.",
        });
    }
};

export default rateLimiter;