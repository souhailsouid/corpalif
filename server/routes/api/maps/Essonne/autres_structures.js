const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const passport = require('passport')

// Load Validation

// Load Annuaire Model

const AutresStructures = require('../../../../models/maps/Essonne/autres_structures')
// Load User Model

// @route   GET api/annuaire/test
// @desc    Tests annuaire route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: 'Annuaire Works' }))

// @route   GET api/annuaire/essonne/autresStructures
// @desc    Get current Annuaire
// @access  Public
router.get('/autresStructures', (req, res) => {
	AutresStructures.find()
		.then((autresStructures) => {
			res.json(autresStructures)
		})
		.catch((err) => res.status(404).json(err))
})
// @route   GET api/annuaire/essonne/autresStructures
// @desc    Get current Annuaire
// @access  Public

router.post('/autresStructures', passport.authenticate('jwt', { session: false }), (req, res) => {
	const newPost = new AutresStructures({
		name: req.body.name,

		long: req.body.long,
		lat: req.body.lat
	})

	newPost.save().then((post) => res.json(post))
})
// @route   GET api/annuaire/essonne/autresStructures/:id
// @desc    Get essonne/autresStructures by id
// @access  Public
router.get('/autresStructures/:id', (req, res) => {
	AutresStructures.findById(req.params.id)
		.then((autresStructures) => res.json(autresStructures))
		.catch((err) => res.status(404).json({ nomapfound: 'No map found with that ID' }))
})

// @route   UPDATE api/annuaire/essonne/autresStructures/:id
// @desc    update post
// @access  Private
router.put('/autresStructures/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
	AutresStructures.findByIdAndUpdate({ _id: req.params.id }, req.body).then((autresStructures) => {
		AutresStructures.findOne({ _id: req.params.id }).then((autresStructures) => res.send(autresStructures))
	})
})

// @route   DELETE api/annuaire/essonne/autresStructures/:id
// @desc    Delete post
// @access  Private
router.delete('/autresStructures/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
	AutresStructures.findOne({ user: req.user.id }).then((autresStructures) => {
		AutresStructures.findById(req.params.id)
			.then((autresStructures) => {
				// Delete
				autresStructures.remove().then(() => res.json({ success: true }))
			})
			.catch((err) => res.status(404).json({ mapnotfound: 'No map found' }))
	})
})
module.exports = router
