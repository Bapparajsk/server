const jwt = require("jsonwebtoken");

const adminAuth =  (req, res, next) => {
    try{
        const { token } = req.headers;
        const isValid = jwt.verify(token, process.env.YOUR_SECRET_KEY);
        if (!isValid) {
            return res.status(500).json({
                status: 500,
                statusText: "Internal Server Error",
            });
        }
        next();
    } catch(error) {
        console.log(error);
        res.status(403).send('Invalid Token');
    }
};

const auth =  (req, res, next) => {
    try{
        const { token } = req.headers;
        const isValid = jwt.verify(token, process.env.YOUR_SECRET_KEY);
        if (!isValid) {
            return res.status(500).json({
                status: 500,
                statusText: "Internal Server Error",
            });
        }
        next();
    } catch(error) {
        console.log(error);
        res.status(403).send('Invalid Token');
    }
};

module.exports = { adminAuth, auth };