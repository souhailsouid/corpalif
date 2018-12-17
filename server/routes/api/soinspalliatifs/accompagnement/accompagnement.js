const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

const Accompagnement = require('../../../../models/soinspalliatifs/accompagnement/accompagnement')
router.get('/', (req, res) => {
	Accompagnement.find()
		.then((accompagnement) => {
			res.json(accompagnement)
		})
		.catch((err) => res.status(404).json(err))
})

router.post('/', (req, res) => {
	const accompagnement = new Accompagnement({
		_id: new mongoose.Types.ObjectId(),
		title: req.body.title,
		title2: req.body.title2,
		description: req.body.description,
		description2: req.body.description2,
		subtitle: req.body.subtitle,
		subtitle2: req.body.subtitle2,
		subtitleDescription: req.body.subtitleDescription,
		subtitle2Description: req.body.subtitle2Description,
		linksTitle: req.body.linksTitle,
		linksTitle2: req.body.linksTitle2,
		linksURL: req.body.linksURL,
		linksURL2: req.body.linksURL2
	})
	accompagnement
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
	Accompagnement.findById(req.params.id)
		.select(
			' title title2 description description2 subtitle subtitle2 subtitleDescription subtitle2Description  linksTitle linksTitle2 linksURL linksURL2'
		)
		.exec()
		.then((accompagnement) => res.json(accompagnement))
		.catch((err) => res.status(404).json({ nopostfound: 'No post found with that ID' }))
})
router.patch('/:id', (req, res) => {
	const updateOps = {
		title: req.body.title,
		title2: req.body.title2,
		description: req.body.description,
		description2: req.body.description2,
		subtitle: req.body.subtitle,
		subtitle2: req.body.subtitle2,
		subtitleDescription: req.body.subtitleDescription,
		subtitle2Description: req.body.subtitle2Description,
		linksTitle: req.body.linksTitle,
		linksTitle2: req.body.linksTitle2,
		linksURL: req.body.linksURL,
		linksURL2: req.body.linksURL2
	}
	for (const [ key, value ] of Object.entries(updateOps)) {
		console.log(key, value)
	}
	Accompagnement.findByIdAndUpdate({ _id: req.params.id }, { $set: updateOps }).then((accompagnement) => {
		Accompagnement.findOne({ _id: req.params.id }).then((accompagnement) => res.send(accompagnement))
	})
})

router.delete('/:id', (req, res, next) => {
	const id = req.params.id
	Accompagnement.remove({ _id: id })
		.exec()
		.then((result) => {
			res.status(200).json({
				message: 'Product deleted',
				request: {
					type: 'POST',
					url: 'http://localhost:5000/api/evenement'
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
