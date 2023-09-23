const Tour = require('../models/tourModels');
const catchAsync = require('../utils/catchAsync');

exports.getOverview = catchAsync(async (req, res) => {
  // Get Tour data from collection
  const tours = await Tour.find();
  // Build template

  // Render template using tour data from step 1

  res.status(200).render('overview', {
    title: 'All Tours',
    tours,
  });
});

exports.getTour = (req, res) => {
  res.status(200).render('tour', {
    title: 'The Forest Hiker Tour',
  });
};
