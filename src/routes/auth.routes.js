const {Router} = require('express');
const auth = require('../controllers/auth.controller.js');

const router = Router();

router.post('/register', auth.register);
router.post('/login', auth.login);

module.exports = {
    router
}