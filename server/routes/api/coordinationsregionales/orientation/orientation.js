const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

const Orientation = require('../../../../models/coordinationregionale/orientation/orientation')
router.get('/', (req, res) => {
	Orientation.find()
		.then((orientation) => {
			res.json(orientation)
		})
		.catch((err) => res.status(404).json(err))
})

router.post('/', (req, res) => {
	const orientation = new Orientation({
		_id: new mongoose.Types.ObjectId(),
		title: req.body.title,
		theme: req.body.theme,
		subtitle: req.body.subtitle,
		subtitle2: req.body.subtitle2,
		subtitleDescription: req.body.subtitleDescription,
		subtitleDescription2: req.body.subtitleDescription2,
		subtitleDescription3: req.body.subtitleDescription3,
		description: req.body.description,

		liensTitle: req.body.liensTitle,
		liensTitle2: req.body.liensTitle2,
		liensUrl: req.body.liensUrl,
		liensUrl2: req.body.liensUrl2
	})
	orientation
		.save()
		.then((result) => {
			console.log(result)
		})
		.catch((err) => {
			console.log(err)
			res.status(500).json({
				error: err
			})
		})
})
router.get('/:id', (req, res) => {
	Orientation.findById(req.params.id)
		.select(
			'title theme subtitle subtitle2 subtitleDescription subtitleDescription2 subtitleDescription3 description liensTitle liensTitle2 liensUrl liensUrl2'
		)
		.exec()
		.then((orientation) => res.json(orientation))
		.catch((err) => res.status(404).json({ nopostfound: 'No post found with that ID' }))
})
router.patch('/:id', (req, res) => {
	const updateOps = {
		title: req.body.title,
		theme: req.body.theme,
		subtitle: req.body.subtitle,
		subtitle2: req.body.subtitle2,
		subtitleDescription: req.body.subtitleDescription,
		subtitleDescription2: req.body.subtitleDescription2,
		subtitleDescription3: req.body.subtitleDescription3,
		description: req.body.description,

		liensTitle: req.body.liensTitle,
		liensTitle2: req.body.liensTitle2,
		liensUrl: req.body.liensUrl,
		liensUrl2: req.body.liensUrl2
	}
	for (const [ key, value ] of Object.entries(updateOps)) {
		console.log(key, value)
	}
	Orientation.findByIdAndUpdate({ _id: req.params.id }, { $set: updateOps }).then((orientation) => {
		Orientation.findOne({ _id: req.params.id }).then((orientation) => res.send(orientation))
	})
})

router.delete('/:id', (req, res, next) => {
	const id = req.params.id
	Orientation.remove({ _id: id })
		.exec()
		.then((result) => {
			res.status(200).json({
				message: 'Product deleted',
				request: {
					type: 'POST'
				}
			})
		})
		.catch((err) => {
			console.log(err)
			res.status(500).json({
				error: err
			})
		})
})

module.exports = router
