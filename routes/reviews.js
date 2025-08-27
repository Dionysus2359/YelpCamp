const express = require('express');
const router = express.Router({ mergeParams: true });
const { validateReview, isSignedIn, isReviewAuthor } = require('../middleware.js');
const reviews = require('../controllers/reviews.js');

router.post('/', isSignedIn, validateReview, reviews.createReview)

router.delete('/:reviewId', isSignedIn, isReviewAuthor, reviews.deleteReview)

module.exports = router;