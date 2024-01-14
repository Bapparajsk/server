require("dotenv").config();
require("./config/db.config");
const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

app.use("/", require("./routes/userSingin"));
app.use("/api", require("./routes/adminProblem"));
app.use("/api", require("./routes/clientProblem"));
app.use("/admin", require("./routes/admin"));
app.use("/*", require("./routes/404"));

module.exports = app;