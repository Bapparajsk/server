const router = require("express").Router();
const userModel = require("../models/user.schema");
const  { creatToken } = require("../middleware/authToken");
const bcrypt = require("bcryptjs");

// api/user/singup this api create a new user
router.post("/user/sing-up", async (req, res) => {
    try {
        const { userName, email, password } = req.body;
        const newUser = new userModel({
            userName: userName,
            email: email,
            password: password
        });
        await newUser.save();
        const token = creatToken(userName, newUser._id);
        return res.status(201).json({
            status: 201,
            statusText: "ok",
            jwt_token: token,
            user_id: newUser._id
        });
    } catch (e) {
        console.log(e);
        return res.status(500).json({
            status: 500,
            statusText: "Internal Server Error",
        });
    }
});

// api/user/singin this api login user
router.post('/user/sing-in', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userModel.findOne({email});
        if(!user) {
            return res.status(401).json({
                status: 401,
                statusText: "Unauthorized",
            });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) {
            return res.status(401).json({
                status: 401,
                statusText: "Unauthorized",
            });
        }

        const token = creatToken(user.userName, user._id);
        return res.status(200).json({
            status: 200,
            statusText: "OK",
            jwt_token: token,
            user_id: newUser._id
        });

    } catch (e) {
        console.log(e);
        return res.status(500).json({
            status: 500,
            statusText: "Internal Server Error",
        });
    }
});

module.exports = router;