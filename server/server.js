
const express = require("express");
const connectDB = require("./config/db");
const cookieParser = require("cookie-parser");
const apiRouter = require("./routes");
const PORT = process.env.PORT || 4000;
const bodyParser = require("body-parser");
require("dotenv").config();
const cors = require("cors");
const app = express();
connectDB();

app.use(express.json({limit: "5mb"}));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))
app.use(bodyParser.json());
app.use("/api", apiRouter);

app.listen(PORT, () => console.log(`server was started on ${PORT} PORT`));