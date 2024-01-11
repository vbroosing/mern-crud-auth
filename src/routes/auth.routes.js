const {Router} = require('express');
const {register, login, logout, profile} = require('../controllers/auth.controller.js');
const {authrequire} = require('../middlewares/validateToken.js');

const router = Router();

router.post('/register', register);
router.post('/login', login);
router.post('/logout', logout);
router.get('/profile',authrequire, profile);


module.exports = {
    router
}