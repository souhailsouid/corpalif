const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

const Demarche = require('../../../../models/soinspalliatifs/demarche/demarche')
router.get('/', (req, res) => {
	Demarche.find()
		.then((demarche) => {
			res.json(demarche)
		})
		.catch((err) => res.status(404).json(err))
})

router.post('/', (req, res) => {
	const demarche = new Demarche({
		_id: new mongoose.Types.ObjectId(),
		title: req.body.title,

		description: req.body.description,
		description2: req.body.description2,
		subtitle: req.body.subtitle,
		linksTitle: req.body.linksTitle,
		linksTitle2: req.body.linksTitle2,
		linksURL: req.body.linksURL,
		linksURL2: req.body.linksURL2,
		InfoAreaTitle: req.body.InfoAreaTitle,
		InfoAreaTitle2: req.body.InfoAreaTitle2,
		InfoAreaTitle3: req.body.InfoAreaTitle3,
		InfoAreaTitle4: req.body.InfoAreaTitle4,
		InfoAreaTitle5: req.body.InfoAreaTitle5,
		InfoAreaTitle6: req.body.InfoAreaTitle6,
		InfoAreaDescription: req.body.InfoAreaDescription,
		InfoAreaDescription2: req.body.InfoAreaDescription2,
		InfoAreaDescription3: req.body.InfoAreaDescription3,
		InfoAreaDescription4: req.body.InfoAreaDescription4,
		InfoAreaDescription5: req.body.InfoAreaDescription5,
		InfoAreaDescription6: req.body.InfoAreaDescription6
	})
	demarche
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
	Demarche.findById(req.params.id)
		.select(
			'title description description2 InfoAreaTitle subtitle InfoAreaTitle2 InfoAreaTitle3 InfoAreaTitle4 InfoAreaTitle5 InfoAreaTitle6 InfoAreaDescription InfoAreaDescription2  InfoAreaDescription3 InfoAreaDescription4 InfoAreaDescription5 InfoAreaDescription6 linksTitle linksTitle2 linksURL linksURL2'
		)
		.exec()
		.then((demarche) => res.json(demarche))
		.catch((err) => res.status(404).json({ nopostfound: 'No post found with that ID' }))
})
router.patch('/:id', (req, res) => {
	const updateOps = {
		title: req.body.title,
		description: req.body.description,
		description2: req.body.description2,
		subtitle: req.body.subtitle,
		linksTitle: req.body.linksTitle,
		linksTitle2: req.body.linksTitle2,
		linksURL: req.body.linksURL,
		linksURL2: req.body.linksURL2,
		InfoAreaTitle: req.body.InfoAreaTitle,
		InfoAreaTitle2: req.body.InfoAreaTitle2,
		InfoAreaTitle3: req.body.InfoAreaTitle3,
		InfoAreaTitle4: req.body.InfoAreaTitle4,
		InfoAreaTitle5: req.body.InfoAreaTitle5,
		InfoAreaTitle6: req.body.InfoAreaTitle6,
		InfoAreaDescription: req.body.InfoAreaDescription,
		InfoAreaDescription2: req.body.InfoAreaDescription2,
		InfoAreaDescription3: req.body.InfoAreaDescription3,
		InfoAreaDescription4: req.body.InfoAreaDescription4,
		InfoAreaDescription5: req.body.InfoAreaDescription5,
		InfoAreaDescription6: req.body.InfoAreaDescription6
	}
	for (const [ key, value ] of Object.entries(updateOps)) {
		console.log(key, value)
	}
	Demarche.findByIdAndUpdate({ _id: req.params.id }, { $set: updateOps }).then((demarche) => {
		Demarche.findOne({ _id: req.params.id }).then((demarche) => res.send(demarche))
	})
})

router.delete('/:id', (req, res, next) => {
	const id = req.params.id
	Demarche.remove({ _id: id })
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
