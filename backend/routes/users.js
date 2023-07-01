const router = require('express').Router();
const {
  getUsers, getUser, patchProfile, patchAvatar, getCurrentUser,
} = require('../controllers/users');
const { validateGetUser, validatePatchProfile, validatePatchAvatar } = require('../middlewares/validation');

router.get('/', getUsers);
router.get('/me', getCurrentUser);
router.get('/:userId', validateGetUser, getUser);
router.patch('/me', validatePatchProfile, patchProfile);
router.patch('/me/avatar', validatePatchAvatar, patchAvatar);

module.exports = router;
