const express = require("express");
const router = express.Router();
const Admin = require("../Models/Admin");

router.get("/logout", (req, res) => {
    req.session.user = null;
    return res.status(200).json({ scs: true });
});

router.get("/checkStat", (req, res) => {
    if (req.session.user) {
        return res.status(200).json({ scs: true, user: req.session.user });
    } else return res.status(404).json({ scs: false, user: null });
});

router.post("/enterAdmin", async (req, res) => {
    const { email, password } = req.body.data;
    if (email == process.env.email && password == process.env.pass) {
        const adm = await Admin.findOne({ email });
        req.session.user = adm;
        req.session.save();
        return res.status(200).json({ scs: true, msg: "Logged-In" });
    } else {
        return res.status(401).json({ scs: false, msg: "Bad Credentials" });
    }
});

module.exports = router;
