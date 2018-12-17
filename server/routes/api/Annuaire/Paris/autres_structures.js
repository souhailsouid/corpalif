const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const passport = require('passport')

// Load Validation

const validateAnnuaireInput = require('../../../../validation/annuaire')

// Load Annuaire Model

const AutresStructures = require('../../../../models/Annuaire/Paris/autres_structures')
// Load User Model

// @route   GET api/annuaire/test
// @desc    Tests annuaire route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: 'Annuaire Works' }))

// @route   GET api/annuaire/autres_structures
// @desc    Get current Annuaire
// @access  Public
router.get('/autres_structures', (req, res) => {
	AutresStructures.find()
		.then((autres_structures) => {
			res.json(autres_structures)
		})
		.catch((err) => res.status(404).json(err))
})
// @route   GET api/annuaire/autres_structures
// @desc    Get current Annuaire
// @access  Public

router.post('/autres_structures', passport.authenticate('jwt', { session: false }), (req, res) => {
	const newPost = new AutresStructures({
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
// @route   GET api/annuaire/autres_structures/:id
// @desc    Get autres_structures by id
// @access  Public
router.get('/autres_structures/:id', (req, res) => {
	AutresStructures.findById(req.params.id)
		.then((autres_structures) => res.json(autres_structures))
		.catch((err) => res.status(404).json({ noautres_structuresfound: 'No autres_structures found with that ID' }))
})

// @route   UPDATE api/annuaire/autres_structures/:id
// @desc    update post
// @access  Private
router.put('/autres_structures/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
	const { errors, isValid } = validateAnnuaireInput(req.body)
	// Check Validation
	if (!isValid) {
		// Return any errors with 400 status
		return res.status(400).json(errors)
	}

	AutresStructures.findByIdAndUpdate({ _id: req.params.id }, req.body).then((autres_structures) => {
		AutresStructures.findOne({ _id: req.params.id }).then((autres_structures) => res.send(autres_structures))
	})
})

// @route   DELETE api/annuaire/autres_structures/:id
// @desc    Delete post
// @access  Private
router.delete('/autres_structures/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
	AutresStructures.findOne({ user: req.user.id }).then((autres_structures) => {
		AutresStructures.findById(req.params.id)
			.then((autres_structures) => {
				// Delete
				autres_structures.remove().then(() => res.json({ success: true }))
			})
			.catch((err) => res.status(404).json({ autres_structuresnotfound: 'No autres_structures found' }))
	})
})
module.exports = router
