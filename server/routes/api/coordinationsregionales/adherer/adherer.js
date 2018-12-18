const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const multer = require('multer')

const storage = multer.diskStorage({
	destination: function(req, file, cb) {
		cb(null, './uploads/adherer')
	},
	filename: function(req, files, cb) {
		cb(null, new Date().toISOString() + files.originalname)
	}
})

const upload = multer({
	storage: storage
})
const Adherer = require('../../../../models/coordinationregionale/adherer/adherer')
router.get('/', (req, res) => {
	Adherer.find()
		.then((adherer) => {
			res.json(adherer)
		})
		.catch((err) => res.status(404).json(err))
})

router.post(
	'/',
	upload.fields([
		{
			name: 'imgCardCollectif',
			maxCount: 1
		},
		{
			name: 'imgCardIndividuel',
			maxCount: 1
		},
		{
			name: 'file',
			maxCount: 1
		}
	]),
	(req, res) => {
		console.log(req.files)
		const adherer = new Adherer({
			_id: new mongoose.Types.ObjectId(),

			title: req.body.title,
			theme: req.body.theme,
			subtitle: req.body.subtitle,
			subtitle2: req.body.subtitle2,
			subtitle3: req.body.subtitle3,
			InfoAreaTitle: req.body.InfoAreaTitle,

			InfoAreaTitle2: req.body.InfoAreaTitle2,
			InfoAreaTitle3: req.body.InfoAreaTitle3,
			InfoAreaTitle4: req.body.InfoAreaTitle4,

			InfoAreaDescription: req.body.InfoAreaDescription,
			InfoAreaDescription2: req.body.InfoAreaDescription2,
			InfoAreaDescription3: req.body.InfoAreaDescription3,
			InfoAreaDescription4: req.body.InfoAreaDescription4,
			imgCardCollectif: req.files['imgCardCollectif'][0].path,
			cardCategoryCollectifTitle: req.body.cardCategoryCollectifTitle,
			cardCategoryCollectifSubTitle: req.body.cardCategoryCollectifSubTitle,
			cardCategoryCollectifDescription: req.body.cardCategoryCollectifDescription,

			imgCardIndividuel: req.files['imgCardIndividuel'][0].path,
			cardCategoryIndividuelTitle: req.body.cardCategoryIndividuelTitle,
			cardCategoryIndividuelSubTitle: req.body.cardCategoryIndividuelSubTitle,
			cardCategoryIndividuelDescription: req.body.cardCategoryIndividuelDescription,

			file: req.files['file'][0].path
		})
		adherer
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
	}
)
router.get('/:id', (req, res) => {
	Adherer.findById(req.params.id)
		.select(
			'title theme subtitle subtitle2 subtitle3 InfoAreaTitle InfoAreaTitle2 InfoAreaTitle3 InfoAreaTitle4 InfoAreaDescription InfoAreaDescription2 InfoAreaDescription3 InfoAreaDescription4 imgCardCollectif cardCategoryCollectifTitle cardCategoryCollectifSubTitle cardCategoryCollectifDescription imgCardIndividuel cardCategoryIndividuelTitle cardCategoryIndividuelSubTitle cardCategoryIndividuelDescription file'
		)
		.exec()
		.then((adherer) => res.json(adherer))
		.catch((err) => res.status(404).json({ nopostfound: 'No post found with that ID' }))
})
router.patch(
	'/:id',
	upload.fields([
		{
			name: 'imgCardCollectif',
			maxCount: 1
		},
		{
			name: 'imgCardIndividuel',
			maxCount: 1
		},
		{
			name: 'file',
			maxCount: 1
		}
	]),
	(req, res) => {
		const updateOps = {
			title: req.body.title,
			theme: req.body.theme,
			subtitle: req.body.subtitle,
			subtitle2: req.body.subtitle2,
			subtitle3: req.body.subtitle3,
			InfoAreaTitle: req.body.InfoAreaTitle,

			InfoAreaTitle2: req.body.InfoAreaTitle2,
			InfoAreaTitle3: req.body.InfoAreaTitle3,
			InfoAreaTitle4: req.body.InfoAreaTitle4,

			InfoAreaDescription: req.body.InfoAreaDescription,
			InfoAreaDescription2: req.body.InfoAreaDescription2,
			InfoAreaDescription3: req.body.InfoAreaDescription3,
			InfoAreaDescription4: req.body.InfoAreaDescription4,
			imgCardCollectif: req.files['imgCardCollectif'][0].path,
			cardCategoryCollectifTitle: req.body.cardCategoryCollectifTitle,
			cardCategoryCollectifSubTitle: req.body.cardCategoryCollectifSubTitle,
			cardCategoryCollectifDescription: req.body.cardCategoryCollectifDescription,

			imgCardIndividuel: req.files['imgCardIndividuel'][0].path,
			cardCategoryIndividuelTitle: req.body.cardCategoryIndividuelTitle,
			cardCategoryIndividuelSubTitle: req.body.cardCategoryIndividuelSubTitle,
			cardCategoryIndividuelDescription: req.body.cardCategoryIndividuelDescription,

			file: req.files['file'][0].path
		}
		for (const [ key, value ] of Object.entries(updateOps)) {
			console.log(key, value)
		}
		Adherer.findByIdAndUpdate({ _id: req.params.id }, { $set: updateOps }).then((adherer) => {
			Adherer.findOne({ _id: req.params.id }).then((adherer) => res.send(adherer))
		})
	}
)

router.delete('/:id', (req, res, next) => {
	const id = req.params.id
	Adherer.remove({ _id: id })
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
