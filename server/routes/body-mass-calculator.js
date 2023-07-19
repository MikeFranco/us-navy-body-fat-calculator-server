const express = require('express');
const router = express.Router();

router.get('/calculator', (req, res) => {
  const {
    gender,
    height,
    weight,
    waist,
    neck,
    hip,
  } = req.query;

  // Convert the received parameters to numbers if needed
  const numericHeight = parseFloat(height);
  
  const numericWeight = parseFloat(weight);
  const numericWaist = parseFloat(waist);
  const numericNeck = parseFloat(neck);
  const numericHip = parseFloat(hip);
  console.log('%c⧭', 'color: #00b300', {
    numericHeight,
    numericWeight,
    numericWaist,
    numericNeck,
    numericHip
  });

  if (gender === 'female') {
    const divided = 495;
    const divisor =
      1.29579 -
      0.35004 * Math.log10(numericWaist + numericHip - numericNeck) +
      0.22100 * Math.log10(numericHeight);
    const femaleBodyFatPercentage = divided / divisor - 450;
    res.status(200).json({ percentage: femaleBodyFatPercentage, gender: 'female' });
  } else {
    const divided = 495;
    const divisor =
    1.0324 - 
    0.19077 * Math.log10(numericWaist - numericNeck) + 
    0.15456 * Math.log10(numericHeight);
    const maleBodyFatPercentage = divided / divisor - 450;
    res.status(200).json({ percentage: maleBodyFatPercentage, gender: 'male' });
  }
});

module.exports = router;