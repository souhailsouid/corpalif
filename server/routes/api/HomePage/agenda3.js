const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const passport = require('passport')
const Agenda3 = require('../../../models/HomePage/agenda/agenda3')
const multer = require('multer')

const storage = multer.diskStorage({
	destination: function(req, file, cb) {
		cb(null, './uploads')
	},
	filename: function(req, files, cb) {
		cb(null, new Date().toISOString() + files.originalname)
	}
})

const upload = multer({
	storage: storage
})

router.get('/', (req, res) => {
	Agenda3.find()
		.then((agenda) => {
			res.json(agenda)
		})
		.catch((err) => res.status(404).json(err))
})

router.get('/:id', (req, res) => {
	Agenda3.findById(req.params.id)
		.select(' theme lieu ')
		.exec()
		.then((agenda) => res.json(agenda))
		.catch((err) => res.status(404).json({ noagendafound: 'No agenda found with that ID' }))
})
router.post('/notification/', upload.fields([]), (req, res, next) => {
	console.log(req.files)
	const post = new Agenda3({
		_id: new mongoose.Types.ObjectId(),
		theme: req.body.theme,
		lieu: req.body.lieu
	})
	post
		.save()
		.then((result) => {
			console.log(result)
			res.status(201).json({
				message: 'Created product successfully',
				createdfile: {
					_id: result._id,
					request: {
						type: 'GET',
						url: 'http://localhost:3000/api/agenda3	/' + result._id
					}
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
router.patch('/:id', upload.fields([]), (req, res) => {
	const updateOps = {
		theme: req.body.theme,
		lieu: req.body.lieu
	}
	for (const [ key, value ] of Object.entries(updateOps)) {
		console.log(key, value)
	}
	Agenda3.findByIdAndUpdate({ _id: req.params.id }, { $set: updateOps }).then((agenda) => {
		Agenda3.findOne({ _id: req.params.id }).then((agenda) => res.send(agenda))
	})
})

module.exports = router
