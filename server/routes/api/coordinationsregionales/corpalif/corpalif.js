const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

const Corpalif = require('../../../../models/coordinationregionale/corpalif/corpalif')
router.get('/', (req, res) => {
	Corpalif.find()
		.then((corpalif) => {
			res.json(corpalif)
		})
		.catch((err) => res.status(404).json(err))
})

router.post('/', (req, res) => {
	const corpalif = new Corpalif({
		_id: new mongoose.Types.ObjectId(),
		title: req.body.title,
		text: req.body.text,
		theme: req.body.theme,
		subtitle: req.body.subtitle,
		subtitle2: req.body.subtitle2,
		subtitle3: req.body.subtitle3,
		description: req.body.description,
		InfoAreaTitle: req.body.InfoAreaTitle,
		InfoAreaTitle2: req.body.InfoAreaTitle2,
		InfoAreaTitle3: req.body.InfoAreaTitle3,
		InfoAreaTitle4: req.body.InfoAreaTitle4,
		InfoAreaTitle5: req.body.InfoAreaTitle5,
		InfoAreaDescription: req.body.InfoAreaDescription,
		InfoAreaDescription2: req.body.InfoAreaDescription2,
		InfoAreaDescription3: req.body.InfoAreaDescription3,
		InfoAreaDescription4: req.body.InfoAreaDescription4,
		InfoAreaDescription5: req.body.InfoAreaDescription5,
		paragraphe1: req.body.paragraphe1,
		paragraphe2: req.body.paragraphe2,
		paragraphe3: req.body.paragraphe3
	})
	corpalif
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
	Corpalif.findById(req.params.id)
		.select(
			'title text  theme description  subtitle subtitle2 subtitle3 InfoAreaTitle  InfoAreaTitle2 InfoAreaTitle3 InfoAreaTitle4 InfoAreaTitle5  InfoAreaDescription InfoAreaDescription2  InfoAreaDescription3 InfoAreaDescription4 InfoAreaDescription5   paragraphe1 paragraphe2 paragraphe3'
		)
		.exec()
		.then((corpalif) => res.json(corpalif))
		.catch((err) => res.status(404).json({ nopostfound: 'No post found with that ID' }))
})
router.patch('/:id', (req, res) => {
	const updateOps = {
		title: req.body.title,
		text: req.body.text,
		theme: req.body.theme,
		subtitle: req.body.subtitle,
		subtitle2: req.body.subtitle2,
		subtitle3: req.body.subtitle3,
		description: req.body.description,
		InfoAreaTitle: req.body.InfoAreaTitle,
		InfoAreaTitle2: req.body.InfoAreaTitle2,
		InfoAreaTitle3: req.body.InfoAreaTitle3,
		InfoAreaTitle4: req.body.InfoAreaTitle4,
		InfoAreaTitle5: req.body.InfoAreaTitle5,
		InfoAreaDescription: req.body.InfoAreaDescription,
		InfoAreaDescription2: req.body.InfoAreaDescription2,
		InfoAreaDescription3: req.body.InfoAreaDescription3,
		InfoAreaDescription4: req.body.InfoAreaDescription4,
		InfoAreaDescription5: req.body.InfoAreaDescription5,
		paragraphe1: req.body.paragraphe1,
		paragraphe2: req.body.paragraphe2,
		paragraphe3: req.body.paragraphe3
	}
	for (const [ key, value ] of Object.entries(updateOps)) {
		console.log(key, value)
	}
	Corpalif.findByIdAndUpdate({ _id: req.params.id }, { $set: updateOps }).then((corpalif) => {
		Corpalif.findOne({ _id: req.params.id }).then((corpalif) => res.send(corpalif))
	})
})

router.delete('/:id', (req, res, next) => {
	const id = req.params.id
	Corpalif.remove({ _id: id })
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
