const express = require('express');
const router = express.Router();
const path = require('path');

let testSettings;

/* GET home page. */
router.get('/', async (req, res) => {
  res.sendFile(path.join(__dirname, '../public/html/pretest.html'));
});

router.post('/', async (req, res) => {
  testSettings = await JSON.parse(req.body.testSettings);
  show();
  console.log(testSettings);
  res.send('/testroom');
});

async function show() {
  module.exports.testSettings = await testSettings;
}

module.exports = router;