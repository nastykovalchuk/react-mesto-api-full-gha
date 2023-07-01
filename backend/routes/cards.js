const router = require('express').Router();
const {
  getCards, createCard, deleteCard, likeCard, dislikeCard,
} = require('../controllers/cards');
const { validateCreateCard, validateReqWithCardId } = require('../middlewares/validation');

router.get('/', getCards);
router.post('/', validateCreateCard, createCard);

router.delete('/:cardId', validateReqWithCardId, deleteCard);
router.put('/:cardId/likes', validateReqWithCardId, likeCard);
router.delete('/:cardId/likes', validateReqWithCardId, dislikeCard);

module.exports = router;
