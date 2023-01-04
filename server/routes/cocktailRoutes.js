const express = require('express');
const router = express.Router();
const spiritController = require('../controllers/spiritController');
const { OAuth2Client } = require('google-auth-library');
const cocktailpage = '../../client/cocktailpage.html'

// router.post('/', spiritController.createSpirit, (req, res) => {
//   res.status(200).json(res.locals.spirits);
// });
router.post('/', (req, res) => {
  console.log('params: ', req.body);
  // console.log(req.headers);
  console.log('redirecting');
  res.redirect('http://localhost:5173/');
});
router.post('/google-oauth', (req, res) => {
  const client = new OAuth2Client("16755906116-j36mdsgp9qc5s6m7ir67a70fm36nsqho.apps.googleusercontent.com");
  async function verify() {
    const ticket = await client.verifyIdToken({
      idToken: req.body.credential,
    });
    const payload = ticket.getPayload();
    const userid = payload['sub'];
    console.log("USER ID: ", userid);
    res.redirect('http://localhost:5173');
  }
  verify().catch(console.error);
});
router.get('/', spiritController.getSpirits, (req, res) => {
  res.status(200).json(res.locals.spirits);
});

module.exports = router;
