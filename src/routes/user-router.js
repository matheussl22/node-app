const router = require('express').Router();
const { createUser, getUser } = require('../controllers/UserController');

router.post('/', createUser);

router.get('/:id', getUser);

module.exports.userRouter = router;