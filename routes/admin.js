const router = require("express").Router();
const { isKeyValid, isSecretValid } = require("../middleware/adminValidator");
const jwt = require("jsonwebtoken");

router.post("/sing-in", async (req, res) => {
    try {
        
        const { key, secret } = req.body;

        if(isKeyValid(key) && isSecretValid(secret)) {
            const token = jwt.sign({email: "this is my account", pass: "dont try hack"}, process.env.ADMIN_SECRET_KEY, {
                expiresIn: "12h"
            });

            return res.status(200).json({
                status: 200,
                statusText: "ok",
                token
            });
        }

        return res.status(401).json({
            status: 401,
            statusText: "Unauthorized",
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            status: 500,
            statusText: "Internal Server Error"
        });
    }
});

module.exports = router