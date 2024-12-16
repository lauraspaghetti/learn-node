const express = require('express');
const auth = require('../middleware/auth');
const stuffCtrl = require('../controllers/stuff');
const multer = require('../middleware/multer-config')

const router = express.Router();
  
router.post('/', auth, multer, stuffCtrl.createThing);
router.put('/:id', auth, multer, stuffCtrl.modifyThing);
router.delete('/:id', auth, stuffCtrl.deleteThing);
router.get('/:id', auth, stuffCtrl.getOneThing);
router.get('/', auth, stuffCtrl.getAllStuff);

module.exports = router;