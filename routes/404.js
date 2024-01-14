const router = require("express").Router();

router.all("", (req, res) => {
    return res.status(404).json({
        status: 404,
        statusText: "bad request"
    });
});

module.exports = router