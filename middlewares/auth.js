const jwt = require ('jsonwebtoken');
const authConfig = require ('../config/auth');

module.exports = (req, res, next) => {

    // Check the token
    if(!req.headers.authorization) {
        res.status(401).json({ msg: 'Unauthorized access'});
    } else {
    // Check authenticity 
        let token = req.headers.authorization.split(" ")[1];

        jwt.verify(token, authConfig.secret, (err, decoded) => {
            
            if(err) {
                res.status(500).json({msg: 'There has been a problem decoding the token', err})
            } else {
                req.user = decoded;
                next();
            }
        })



    }
};
