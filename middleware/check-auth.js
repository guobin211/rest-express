const jwt =require('jsonwebtoken');
/**
 * auth token检测
 * @param req
 * @param res
 * @param next
 */
module.exports = (req, res, next) => {
    try {
        const decode = jwt.verify(req.body.token, process.env.JWT_KEY);
        req.userData = decode;
    } catch (err) {
        return res.status(401).json({
            message: 'Auth failed'
        })
    }
    next();
};
