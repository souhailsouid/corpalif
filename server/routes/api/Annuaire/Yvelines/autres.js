const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const passport = require('passport')

// Load Validation

const validateAnnuaireInput = require('../../../../validation/annuaire')

// Load Annuaire Model

const Autres = require('../../../../models/Annuaire/Yvelines/autres')
// Load User Model

// @route   GET api/annuaire/test
// @desc    Tests annuaire route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: 'Annuaire Works' }))

// @route   GET api/annuaire/autres
// @desc    Get current Annuaire
// @access  Public
router.get('/autres', (req, res) => {
	Autres.find()
		.then((autres) => {
			res.json(autres)
		})
		.catch((err) => res.status(404).json(err))
})
// @route   GET api/annuaire/autres
// @desc    Get current Annuaire
// @access  Public

router.post('/autres', passport.authenticate('jwt', { session: false }), (req, res) => {
	const newPost = new Autres({
		name: req.body.name,
		rue: req.body.rue,
		postcode: req.body.postcode,
		compl: req.body.compl,
		phone: req.body.phone,
		web: req.body.web,
		email: req.body.email
	})

	newPost.save().then((post) => res.json(post))
})
// @route   GET api/annuaire/autres/:id
// @desc    Get autres by id
// @access  Public
router.get('/autres/:id', (req, res) => {
	Autres.findById(req.params.id)
		.then((autres) => res.json(autres))
		.catch((err) => res.status(404).json({ noautresfound: 'No autres found with that ID' }))
})

// @route   UPDATE api/annuaire/autres/:id
// @desc    update post
// @access  Private
router.put('/autres/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
	const { errors, isValid } = validateAnnuaireInput(req.body)
	// Check Validation
	if (!isValid) {
		// Return any errors with 400 status
		return res.status(400).json(errors)
	}

	Autres.findByIdAndUpdate({ _id: req.params.id }, req.body).then((autres) => {
		Autres.findOne({ _id: req.params.id }).then((autres) => res.send(autres))
	})
})

// @route   DELETE api/annuaire/autres/:id
// @desc    Delete post
// @access  Private
router.delete('/autres/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
	Autres.findOne({ user: req.user.id }).then((autres) => {
		Autres.findById(req.params.id)
			.then((autres) => {
				// Delete
				autres.remove().then(() => res.json({ success: true }))
			})
			.catch((err) => res.status(404).json({ autresnotfound: 'No autres found' }))
	})
})
module.exports = router
