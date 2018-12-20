const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const passport = require('passport')

// Load Validation

// Load Annuaire Model

const Reseaux = require('../../../../models/maps/ValDoise/reseaux')
// Load User Model

// @route   GET api/annuaire/test
// @desc    Tests annuaire route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: 'Annuaire Works' }))

// @route   GET api/annuaire/essonne/reseaux
// @desc    Get current Annuaire
// @access  Public
router.get('/reseaux', (req, res) => {
	Reseaux.find()
		.then((reseaux) => {
			res.json(reseaux)
		})
		.catch((err) => res.status(404).json(err))
})
// @route   GET api/annuaire/essonne/reseaux
// @desc    Get current Annuaire
// @access  Public

router.post('/reseaux', passport.authenticate('jwt', { session: false }), (req, res) => {
	const newPost = new Reseaux({
		name: req.body.name,

		long: req.body.long,
		lat: req.body.lat
	})

	newPost.save().then((post) => res.json(post))
})
// @route   GET api/annuaire/essonne/reseaux/:id
// @desc    Get essonne/reseaux by id
// @access  Public
router.get('/reseaux/:id', (req, res) => {
	Reseaux.findById(req.params.id)
		.then((reseaux) => res.json(reseaux))
		.catch((err) => res.status(404).json({ nomapfound: 'No map found with that ID' }))
})

// @route   UPDATE api/annuaire/essonne/reseaux/:id
// @desc    update post
// @access  Private
router.put('/reseaux/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
	Reseaux.findByIdAndUpdate({ _id: req.params.id }, req.body).then((reseaux) => {
		Reseaux.findOne({ _id: req.params.id }).then((reseaux) => res.send(reseaux))
	})
})

// @route   DELETE api/annuaire/essonne/reseaux/:id
// @desc    Delete post
// @access  Private
router.delete('/reseaux/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
	Reseaux.findOne({ user: req.user.id }).then((reseaux) => {
		Reseaux.findById(req.params.id)
			.then((reseaux) => {
				// Delete
				reseaux.remove().then(() => res.json({ success: true }))
			})
			.catch((err) => res.status(404).json({ mapnotfound: 'No map found' }))
	})
})
module.exports = router
