const express = require('express');
const router = express.Router();


const userController = require('../controllers/userController');
const bookController = require('../controllers/bookController')
const userAuth = require('../middlewares/userAuth')
const reviewController = require('../controllers/reviewController')
// user routes
router.post('/register', userController.createUser);
router.post('/login', userController.loginAuthor);
// Blog routes
router.post('/books', userAuth, bookController.createBook);
router.get('/books', userAuth, bookController.getBooks);
router.get('/book/:bookId', userAuth, bookController.bookById);
router.put('/books/:bookId', userAuth, bookController.updatebooks);
router.delete('/books/:bookId', userAuth, bookController.deleteById);
//review
router.post('/books/:bookId/review', reviewController.review);
router.put('/books/:bookId/review/:reviewId', reviewController.updateReview);
router.delete('/books/:bookId/review/:reviewId', reviewController.deleteReview);

module.exports = router;