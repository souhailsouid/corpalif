const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const passport = require('passport')

// Load Validation

// Load Annuaire Model

const Usp = require('../../../../models/maps/Essonne/usp')
// Load User Model

// @route   GET api/annuaire/test
// @desc    Tests annuaire route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: 'Annuaire Works' }))

// @route   GET api/annuaire/essonne/usp
// @desc    Get current Annuaire
// @access  Public
router.get('/usp', (req, res) => {
	Usp.find()
		.then((usp) => {
			res.json(usp)
		})
		.catch((err) => res.status(404).json(err))
})
// @route   GET api/annuaire/essonne/usp
// @desc    Get current Annuaire
// @access  Public

router.post('/usp', passport.authenticate('jwt', { session: false }), (req, res) => {
	const newPost = new Usp({
		name: req.body.name,

		long: req.body.long,
		lat: req.body.lat
	})

	newPost.save().then((post) => res.json(post))
})
// @route   GET api/annuaire/essonne/usp/:id
// @desc    Get essonne/usp by id
// @access  Public
router.get('/usp/:id', (req, res) => {
	Usp.findById(req.params.id)
		.then((usp) => res.json(usp))
		.catch((err) => res.status(404).json({ nomapfound: 'No map found with that ID' }))
})

// @route   UPDATE api/annuaire/essonne/usp/:id
// @desc    update post
// @access  Private
router.put('/usp/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
	Usp.findByIdAndUpdate({ _id: req.params.id }, req.body).then((usp) => {
		Usp.findOne({ _id: req.params.id }).then((usp) => res.send(usp))
	})
})

// @route   DELETE api/annuaire/essonne/usp/:id
// @desc    Delete post
// @access  Private
router.delete('/usp/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
	Usp.findOne({ user: req.user.id }).then((usp) => {
		Usp.findById(req.params.id)
			.then((usp) => {
				// Delete
				usp.remove().then(() => res.json({ success: true }))
			})
			.catch((err) => res.status(404).json({ mapnotfound: 'No map found' }))
	})
})
module.exports = router
