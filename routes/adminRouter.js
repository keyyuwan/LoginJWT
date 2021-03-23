const express = require("express");
const auth = require("../controllers/authController");
const router = express.Router();

router.get("/", auth, (req, res) => {

    if(req.user.admin) {
        res.send("Esse dado só pode ser visto pelo admin");
    } else {
        res.status(401).send("Not admin: Access Denied")
    }
});

router.get("/free", auth, (req, res) => {
    res.send("esse dado só pode ser visto por quem está logado")
})

module.exports = router;
