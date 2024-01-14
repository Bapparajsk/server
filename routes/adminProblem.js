const router = require("express").Router();
const { adminAuth } = require("../middleware/authentication");
const problemModel = require("../models/problem.schema");

// add new problem from admin 
router.post("/add-problem", adminAuth, async (req, res) => {
    try {
        const { problemName, problemDetails, testCases } = req.body;
        const newProblem = new problemModel({ problemName, problemDetails, testCases });
        await newProblem.save();
        return res.status(201).json({
            status: 201,
            statusText: "ok",
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            status: 500,
            statusText: "Internal Server Error"
        });
    }
});

// this route update exists probenm
router.patch("/update-problem", adminAuth, async(req, res) => {
    try {
        const { problem_id, problemName, problemDetails, testCases } = req.body;

        const problem = await problemModel.findById({_id: problem_id});
        
        if(problemName) {
            problem.problemName = problemName;
        }
        if(problemDetails) {
            problem.problemDetails = problemDetails;
        }
        if(testCases) {
            problem.testCases = testCases;
        }

        const p = await problem.save();

        return res.status(200).json({
            status: 200,
            statusText: "Update Successful",
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            status: 500,
            statusText: "Update UnSuccessful"
        });
    }
});

// this route delete exists probenm
router.delete("/delete-problem", adminAuth, async (req, res) => {
    try {
        const { _id } = req.body;
        await problemModel.findByIdAndDelete({_id});

        return res.status(200).json({
            status: 200,
            statusText: "Dalete Successful",
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            status: 500,
            statusText: "Dalete UnSuccessful"
        });
    }
});

module.exports = router;