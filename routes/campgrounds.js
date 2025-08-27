const express = require('express');
const router = express.Router();
const campgrounds = require('../controllers/campgrounds');
const { isSignedIn, isAuthor, validateCampground } = require('../middleware.js');
const multer = require('multer');
const { storage } = require('../cloudinary');
const upload = multer({ storage });

router.get('/new', isSignedIn, campgrounds.renderNewForm)

router.route('/')
    .get(campgrounds.index)
    .post(isSignedIn, upload.array('image'), validateCampground, campgrounds.createCampground)

router.route('/:id')
    .get(campgrounds.showCampground)
    .put(isSignedIn, isAuthor, upload.array('image'), validateCampground, campgrounds.updateCampground)
    .delete(isSignedIn, isAuthor, campgrounds.destroyCampground)

router.get('/:id/edit', isSignedIn, isAuthor, campgrounds.renderEditForm)

module.exports = router;