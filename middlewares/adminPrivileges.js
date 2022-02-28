const { User } = require('../models/index');


module.exports = (req, res, next) => {

    let id = req.body.id;

    User.findOne({
        where : { id : id }
    }).then(foundUser => {

        if(foundUser.rol == 1){
            next();
        }else {
            res.send(`This user is not an admin`)
        }
    }).catch(error => {
        res.send(error)
    })

};