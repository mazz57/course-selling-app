const jwt = require('jsonwebtoken');
const { JWT_ADMIN_SECRET } = require('../config');

function adminMiddleware(req,res,next){
    const token = req.headers.token;
    const decode = jwt.verify(token, JWT_ADMIN_SECRET);
    if(decode){
        req.Userid = decode.id;
        next();
    } else {
            res.status(401).json({
            message: "Unauthorized"
        });
    }
}