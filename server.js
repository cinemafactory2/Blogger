const express = require("express");
const helmet = require("helmet");
const app = express();
require("dotenv").config();
const bp = require("body-parser");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 5000;
const db = require("./DBase/url").url;
const path = require("path");
const cookieSession = require("cookie-session");

mongoose.set("useFindAndModify", false);
mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB Connected !"))
    .catch(err => console.log(err));

app.use(helmet());
app.use(express.static(path.join(__dirname, "client/build")));
app.use(
    cookieSession({
        signed: false,
        secure: false
    })
);
app.use(bp.json());
app.use("/auth", require("./Controllers/Auth"));
app.use("/blog", require("./Controllers/Blog"));
app.use("/newsletter", require("./Controllers/Newsletter"));

app.use((err, req, res, next) => {
    console.log(err);
    next();
});

app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "client/build/index.html"), err => {
        res.status(500).send(err);
    });
});

app.listen(PORT, "0.0.0.0", () => console.log(`Server at ${PORT}`));
module.exports = app;
