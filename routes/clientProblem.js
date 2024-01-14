const router = require('express').Router();
const { auth } = require("../middleware/authentication");
const problemModel = require("../models/problem.schema");

// this route sent to all problem in client
router.get("/problem-get", auth, async(req, res) => {
    try {
        const problems = await problemModel.find({});
        res.status(200).json({
            status: 200,
            statusText: "ok",
            totalPromlem: problems.length,
            data: problems
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            status: 500,
            statusText: "Internal Server Error"
        });
    }
});



module.exports = router;
