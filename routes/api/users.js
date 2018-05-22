const router = require("express").Router();
const db = require("../../models");
const jwt = require('jsonwebtoken');
const isAuthenticated = require("../../config/auth");
const userController = require("../../controllers/userController");

router.post('/login', (req, res) => {
    db.User.findOne({
        where: { username: req.body.username }
    }).then(user => {
        console.log(user);
        const isMatch = user.validPassword(req.body.password);
        console.log(isMatch);
        if (isMatch) {
            let token = jwt.sign({ id: user.id, username: user.username, type: user.type, school: user.associatedSchoolId }, 'all sorts of code up in here', { expiresIn: 129600 }); // Sigining the token
            res.json({ success: true, message: "Token Issued!", token: token, user: user });
        } else {
            res.status(401).json({ success: false, message: "Authentication failed. Wrong password." });
        }
    }).catch(err => res.status(404).json({ success: false, message: "User not found", error: err }));
});

// SIGNUP ROUTE
router.post('/signup', (req, res) => {
    db.User.create(req.body)
        .then(data => res.json(data))
        .catch(err => res.status(400).json(err));
});

// Any route with isAuthenticated is protected and you need a valid token
// to access
router.get('/:id', userController.getColleges);

module.exports = router;