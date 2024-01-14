const { sign } = require("jsonwebtoken");

const creatToken = (userName, user_id) => {
    const payload = { userName, user_id };
    return sign(payload, process.env.YOUR_SECRET_KEY, {expiresIn: "30d"})
}

module.exports = { creatToken }