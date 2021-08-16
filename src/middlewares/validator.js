'use strict';
module.exports = (error, req, res, next) => {
    if (req.query.name !== undefined) {
       
        res.send(req.query.name)
    } else {
         throw error;
    }

    next();
}