import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { post } from 'axios'
export const FileUpload = (props) => {
	const { handleSubmit } = props
	const onFormSubmit = (file, title) => {
		let formData = new FormData()

		formData.append('file', file)
		const config = {
			headers: { 'content-type': 'multipart/form-data' }
		}
		const url = 'http://localhost:5000/api/recommandation/'
		post(url, formData, config)
			.then(function(response) {
				console.log(response)
			})
			.catch(function(error) {
				console.log(error)
			})
	}
	return (
		<form onSubmit={handleSubmit(onFormSubmit)}>
			>
			<div>
				<label>Profile Picture</label>
				<Field name="file" component="input" type="file" />
			</div>
			<button type="submit">Submit</button>
		</form>
	)
}

export default reduxForm({
	form: 'fileupload'
})(FileUpload)
