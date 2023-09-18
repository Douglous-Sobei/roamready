const express = require('express');
const reviewController = require('../controllers/reviewController');
const authController = require('../controllers/authCotroller');

const router = express.Router({ mergeParams: true });

// POST /tour/234ad5/reviews
// Post /reviews

router
  .route('/')
  .get(reviewController.getAllReviews)
  .post(
    authController.protect,
    authController.restrictTo('user'),
    reviewController.createReview,
  );

router.route('/:id').delete(reviewController.deleteReview);

module.exports = router;
