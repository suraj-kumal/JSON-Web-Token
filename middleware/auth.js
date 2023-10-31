const {Unauthenticated} = require("../errors")
const jwt = require('jsonwebtoken');
const authenticationMiddleware = async(req,res,next) =>{
    const authHeader = req.headers.authorization;
    if(!authHeader || !authHeader.startsWith('Bearer ')){
        throw new Unauthenticated('No Token Provided');
    }
    const token = authHeader.split(' ')[1];
    try {
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        const { id , username } = decoded;
        req.user = { id , username };
    } catch (error) {
        throw new Unauthenticated('NOT authorized to access this route')
    }
    next();
}
module.exports = authenticationMiddleware;