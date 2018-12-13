const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const passport = require('passport')

// Load Validation

const validateAnnuaireInput = require('../../../../validation/annuaire')

// Load Annuaire Model

const Lits = require('../../../../models/Annuaire/Essonne/lits')
// Load User Model

// @route   GET api/annuaire/test
// @desc    Tests annuaire route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: 'Annuaire Works' }))

// @route   GET api/annuaire/essonne/lits
// @desc    Get current Annuaire
// @access  Public
router.get('/essonne/lits', (req, res) => {
	Lits.find()
		.then((lits) => {
			res.json(lits)
		})
		.catch((err) => res.status(404).json(err))
})
// @route   GET api/annuaire/essonne/lits
// @desc    Get current Annuaire
// @access  Public

router.post('/essonne/lits', passport.authenticate('jwt', { session: false }), (req, res) => {
	const newPost = new Lits({
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
// @route   GET api/annuaire/essonne/lits/:id
// @desc    Get essonne/lits by id
// @access  Public
router.get('/essonne/lits/:id', (req, res) => {
	Lits.findById(req.params.id)
		.then((lits) => res.json(lits))
		.catch((err) => res.status(404).json({ nolitsfound: 'No lits found with that ID' }))
})

// @route   UPDATE api/annuaire/essonne/lits/:id
// @desc    update post
// @access  Private
router.put('/essonne/lits/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
	const { errors, isValid } = validateAnnuaireInput(req.body)
	// Check Validation
	if (!isValid) {
		// Return any errors with 400 status
		return res.status(400).json(errors)
	}

	Lits.findByIdAndUpdate({ _id: req.params.id }, req.body).then((lits) => {
		Lits.findOne({ _id: req.params.id }).then((lits) => res.send(lits))
	})
})

// @route   DELETE api/annuaire/essonne/usp/:id
// @desc    Delete post
// @access  Private
router.delete('/essonne/lits/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
	Lits.findOne({ user: req.user.id }).then((lits) => {
		Lits.findById(req.params.id)
			.then((lits) => {
				// Delete
				lits.remove().then(() => res.json({ success: true }))
			})
			.catch((err) => res.status(404).json({ litsnotfound: 'No lits found' }))
	})
})
module.exports = router
