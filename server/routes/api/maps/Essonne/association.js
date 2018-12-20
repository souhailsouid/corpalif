const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const passport = require('passport')

// Load Validation

// Load Annuaire Model

const Association = require('../../../../models/maps/Essonne/association')
// Load User Model

// @route   GET api/annuaire/test
// @desc    Tests annuaire route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: 'Annuaire Works' }))

// @route   GET api/annuaire/essonne/association
// @desc    Get current Annuaire
// @access  Public
router.get('/association', (req, res) => {
	Association.find()
		.then((association) => {
			res.json(association)
		})
		.catch((err) => res.status(404).json(err))
})
// @route   GET api/annuaire/essonne/association
// @desc    Get current Annuaire
// @access  Public

router.post('/association', passport.authenticate('jwt', { session: false }), (req, res) => {
	const newPost = new Association({
		name: req.body.name,

		long: req.body.long,
		lat: req.body.lat
	})

	newPost.save().then((post) => res.json(post))
})
// @route   GET api/annuaire/essonne/association/:id
// @desc    Get essonne/association by id
// @access  Public
router.get('/association/:id', (req, res) => {
	Association.findById(req.params.id)
		.then((association) => res.json(association))
		.catch((err) => res.status(404).json({ nomapfound: 'No map found with that ID' }))
})

// @route   UPDATE api/annuaire/essonne/association/:id
// @desc    update post
// @access  Private
router.put('/association/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
	Association.findByIdAndUpdate({ _id: req.params.id }, req.body).then((association) => {
		Association.findOne({ _id: req.params.id }).then((association) => res.send(association))
	})
})

// @route   DELETE api/annuaire/essonne/association/:id
// @desc    Delete post
// @access  Private
router.delete('/association/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
	Association.findOne({ user: req.user.id }).then((association) => {
		Association.findById(req.params.id)
			.then((association) => {
				// Delete
				association.remove().then(() => res.json({ success: true }))
			})
			.catch((err) => res.status(404).json({ mapnotfound: 'No map found' }))
	})
})
module.exports = router