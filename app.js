const morgan = require("morgan");
const express = require("express");

const userRouter = require("./route/userRoute");
const app = express();
app.use(morgan("dev"));
// app.use("/", viewRouter);
app.use("/api/v1/users", userRouter);
// app.use("/", vendorRouter);
// app.use("/", reviewRouter);
// app.use("/", bookRouter);
// app.use("/", orderRouter);

module.exports = app;
