const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

const Legislation = require('../../../../models/soinspalliatifs/legislation/legislation')
router.get('/', (req, res) => {
	Legislation.find()
		.then((legislation) => {
			res.json(legislation)
		})
		.catch((err) => res.status(404).json(err))
})

router.post('/', (req, res) => {
	const legislation = new Legislation({
		_id: new mongoose.Types.ObjectId(),
		title: req.body.title,
		description: req.body.description,
		subtitle: req.body.subtitle,
		subtitlebis: req.body.subtitlebis,
		subtitledescription: req.body.subtitledescription,
		subtitledescriptionbis: req.body.subtitledescriptionbis,
		subtitle2: req.body.subtitle2,
		subtitle2bis: req.body.subtitle2bis,
		subtitledescription2: req.body.subtitledescription2,
		subtitle3: req.body.subtitle3,
		subtitle3bis: req.body.subtitle3bis,
		subtitledescription3: req.body.subtitledescription3,
		subtitle3descriptionbis: req.body.subtitle3descriptionbis,
		linksTitle: req.body.linksTitle,
		linksTitle2: req.body.linksTitle2,
		linksTitle3: req.body.linksTitle3,
		linksTitle4: req.body.linksTitle4,
		linksTitle5: req.body.linksTitle5,
		linksURL: req.body.linksURL,
		linksURL2: req.body.linksURL2,
		linksURL3: req.body.linksURL3,
		linksURL4: req.body.linksURL4,
		linksURL5: req.body.linksURL5
	})
	legislation
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
	Legislation.findById(req.params.id)
		.select(
			'title description subtitle subtitlebis subtitledescription subtitledescriptionbis subtitle2 subtitle2bis subtitledescription2 subtitle3 subtitle3bis subtitledescription3  linksTitle linksTitle2 linksTitle3 linksTitle4 linksTitle5 linksURL linksURL2 linksURL3 linksURL4 linksURL5'
		)
		.exec()
		.then((legislation) => res.json(legislation))
		.catch((err) => res.status(404).json({ nopostfound: 'No post found with that ID' }))
})
router.patch('/:id', (req, res) => {
	const updateOps = {
		title: req.body.title,
		description: req.body.description,
		subtitle: req.body.subtitle,
		subtitlebis: req.body.subtitlebis,
		subtitledescription: req.body.subtitledescription,
		subtitledescriptionbis: req.body.subtitledescriptionbis,
		subtitle2: req.body.subtitle2,
		subtitle2bis: req.body.subtitle2bis,
		subtitledescription2: req.body.subtitledescription2,
		subtitle3: req.body.subtitle3,
		subtitle3bis: req.body.subtitle3bis,
		subtitledescription3: req.body.subtitledescription3,

		linksTitle: req.body.linksTitle,
		linksTitle2: req.body.linksTitle2,
		linksTitle3: req.body.linksTitle3,
		linksTitle4: req.body.linksTitle4,
		linksTitle5: req.body.linksTitle5,
		linksURL: req.body.linksURL,
		linksURL2: req.body.linksURL2,
		linksURL3: req.body.linksURL3,
		linksURL4: req.body.linksURL4,
		linksURL5: req.body.linksURL5
	}
	for (const [ key, value ] of Object.entries(updateOps)) {
		console.log(key, value)
	}
	Legislation.findByIdAndUpdate({ _id: req.params.id }, { $set: updateOps }).then((legislation) => {
		Legislation.findOne({ _id: req.params.id }).then((legislation) => res.send(legislation))
	})
})

router.delete('/:id', (req, res, next) => {
	const id = req.params.id
	Legislation.remove({ _id: id })
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
