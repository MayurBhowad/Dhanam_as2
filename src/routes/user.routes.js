const router = require('express').Router();
const bcrypt = require('bcryptjs');

const User = require('../models/user.model');
const sendMail = require('../utils/nodeMail.util');

router.get('/', (req, res) => {
    res.json({ success: true, route: '/api/user' })
})

router.post('/register', async (req, res) => {
    let hashedPassword = await bcrypt.hash(req.body.password, 10);

    let newUser = new User({ ...req.body, password: hashedPassword })
    newUser.save()
        .then(user => {
            sendMail(req.body.email).then(response => {
                res.json({ success: true, message: `mail sended to ${response.accepted[0]}!` })
            }).catch(err => {
                console.log(err);
                res.status(500).json({ success: false, message: 'Something went wrog!' })
            })
            // res.json({ success: true, user: user })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ success: false, message: 'Something went wrong!' })
        })
})

module.exports = router;