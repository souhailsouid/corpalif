const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const passport = require('passport')

// Load Validation

// Load Annuaire Model

const Lits = require('../../../../models/maps/paris/lits')
// Load User Model

// @route   GET api/annuaire/test
// @desc    Tests annuaire route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: 'Annuaire Works' }))

// @route   GET api/annuaire/essonne/lits
// @desc    Get current Annuaire
// @access  Public
router.get('/lits', (req, res) => {
	Lits.find()
		.then((lits) => {
			res.json(lits)
		})
		.catch((err) => res.status(404).json(err))
})
// @route   GET api/annuaire/essonne/lits
// @desc    Get current Annuaire
// @access  Public

router.post('/lits', passport.authenticate('jwt', { session: false }), (req, res) => {
	const newPost = new Lits({
		name: req.body.name,
		long: req.body.long,
		lat: req.body.lat
	})

	newPost.save().then((post) => res.json(post))
})
// @route   GET api/annuaire/essonne/lits/:id
// @desc    Get essonne/lits by id
// @access  Public
router.get('/lits/:id', (req, res) => {
	Lits.findById(req.params.id)
		.then((lits) => res.json(lits))
		.catch((err) => res.status(404).json({ nomapfound: 'No map found with that ID' }))
})

// @route   UPDATE api/annuaire/essonne/lits/:id
// @desc    update post
// @access  Private
router.put('/lits/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
	Lits.findByIdAndUpdate({ _id: req.params.id }, req.body).then((lits) => {
		Lits.findOne({ _id: req.params.id }).then((lits) => res.send(lits))
	})
})

// @route   DELETE api/annuaire/essonne/lits/:id
// @desc    Delete post
// @access  Private
router.delete('/lits/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
	Lits.findOne({ user: req.user.id }).then((lits) => {
		Lits.findById(req.params.id)
			.then((lits) => {
				// Delete
				lits.remove().then(() => res.json({ success: true }))
			})
			.catch((err) => res.status(404).json({ mapnotfound: 'No map found' }))
	})
})
module.exports = router
