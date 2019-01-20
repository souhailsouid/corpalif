import React from 'react'

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
// core components
import blogsStyle from 'assets/jss/material-kit-pro-react/views/sectionsSections/blogsStyle.jsx'

// Redux
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { getCurrentfile } from 'actions/menu/formulaire/fileActions'
import { connect } from 'react-redux'
import { compose } from 'redux'
import FileUpload from './filepdf'
class SectionfileAdmin extends React.Component {
	componentDidMount() {
		this.props.getCurrentfile()
	}

	render() {
		const { file } = this.props.file
		const DataElements = file.map((file) => <FileUpload file={file} />)

		return <div>{DataElements}</div>
	}
}

SectionfileAdmin.propTypes = {
	getCurrentfile: PropTypes.func.isRequired,
	file: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
	file: state.file
})

export default compose(withStyles(blogsStyle))(
	connect(mapStateToProps, { getCurrentfile })(withRouter(SectionfileAdmin))
)
