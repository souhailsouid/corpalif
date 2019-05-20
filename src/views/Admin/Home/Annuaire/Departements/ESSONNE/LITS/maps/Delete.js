import React from 'react'
import PropTypes from 'prop-types'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
import Slide from '@material-ui/core/Slide'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
// @material-ui/icons

import Close from '@material-ui/icons/Close'
import DialogActions from '@material-ui/core/DialogActions'

// core components
import presentationStyle from 'assets/jss/material-kit-pro-react/views/presentationStyle.jsx'
import Button from 'components/CustomButtons/Button.jsx'

// Redux
import { withRouter } from 'react-router-dom'
import { deleteStructure_idLITS } from 'actions/maps/mapsEssonneActions'
import { connect } from 'react-redux'
import { compose } from 'redux'
function Transition(props) {
	return <Slide direction="down" {...props} />
}

class Modal extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			liveDemo: true
		}
	}

	handleClickOpen(modal) {
		var x = []
		x[modal] = true
		this.setState(x)
	}
	handleClose(modal) {
		var x = []
		x[modal] = false
		this.setState(x)
	}

	onDeleteClick() {
		this.props.deleteStructure_idLITS(this.props.match.params.id)
		window.location.replace('/admin/ESSONNE/lits')
	}

	render() {
		const { classes } = this.props
		return (
			<div>
				<div>
					<Button
						simple
						className={classes.modalCloseButton}
						key="close"
						aria-label="Close"
						onClick={() => this.handleClose('liveDemo')}
					>
						{' '}
						<Close className={classes.modalClose} />
					</Button>

					<Dialog
						classes={{
							root: classes.modalRoot,
							paper: classes.modal
						}}
						open={this.state.liveDemo}
						TransitionComponent={Transition}
						keepMounted
						onClose={() => this.handleClose(window.location.replace('/admin/ESSONNE/lits'))}
						aria-labelledby="classic-modal-slide-title"
						aria-describedby="classic-modal-slide-description"
					>
						<DialogTitle id="classic-modal-slide-title" disableTypography className={classes.modalHeader}>
							<Button
								simple
								className={classes.modalCloseButton}
								key="close"
								aria-label="Close"
								onClick={() => this.handleClose('liveDemo')}
							>
								{' '}
								<Close className={classes.modalClose} />
							</Button>
							<h4 className={classes.modalTitle}>Suppression de la structure concernée</h4>
						</DialogTitle>
						<DialogContent id="classic-modal-slide-description" className={classes.modalBody}>
							<p>Are you sure to delete this !</p>
						</DialogContent>
						<DialogActions className={classes.modalFooter}>
							<Button
								onClick={() =>
									this.handleClose('liveDemo', window.location.replace('/admin/ESSONNE/lits'))}
								color="secondary"
							>
								Annuler
							</Button>
							<Button onClick={this.onDeleteClick.bind(this)} color="green">
								Supprimer
							</Button>
						</DialogActions>
					</Dialog>
				</div>
			</div>
		)
	}
}

Modal.propTypes = {
	maplit: PropTypes.object.isRequired,
	deleteStructure_idLITS: PropTypes.func.isRequired,
	classes: PropTypes.object.isRequired,
	auth: PropTypes.object.isRequired
}
const mapStateTopProps = (state) => ({
	maplit: state.maplit,
	auth: state.auth
})
export default compose(withStyles(presentationStyle))(
	connect(mapStateTopProps, { deleteStructure_idLITS })(withRouter(Modal))
)
