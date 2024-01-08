var express = require('express');
var router = express.Router();
const DATA = require('../model/data')

/* GET home page. */
router.get('/', async function (req, res, next) {
  res.render('index')
});

router.post('/', async function (req, res, next) {
  try {
    let rsd = req.body
    if (!rsd.fullname || !rsd.email ||  !rsd.message) {
      throw new Error('Please Enter All Field')
    }
    let resumedata = await DATA.create(req.body)
    // res.status(200).json({
    //   message: "Data Sent Successfully",
    //   data: resumedata
    // })
  } catch (error) {
    res.status(404).json({
      message: error.message
    })
  }
  res.render('index')
});

module.exports = router;
