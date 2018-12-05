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
import { delete_Offredemploi } from 'actions/menu/offresdemploi/offreActions'
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
		this.props.delete_Offredemploi(this.props.match.params.id)
		window.location.replace('/admin/menu/offres-emplois/')
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
						onClose={() => this.handleClose(window.location.replace('/admin/menu/offres-emplois/'))}
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
							<h4 className={classes.modalTitle}>Suppression du post concerné</h4>
						</DialogTitle>
						<DialogContent id="classic-modal-slide-description" className={classes.modalBody}>
							<p>Are you sure to delete this!</p>
						</DialogContent>
						<DialogActions className={classes.modalFooter}>
							<Button
								onClick={() =>
									this.handleClose(
										'liveDemo',
										window.location.replace('/admin/menu/offres-emplois/')
									)}
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
	offreemploi: PropTypes.object.isRequired,
	delete_Offredemploi: PropTypes.func.isRequired,
	classes: PropTypes.object.isRequired,
	auth: PropTypes.object.isRequired
}
const mapStateTopProps = (state) => ({
	offreemploi: state.offreemploi,
	auth: state.auth
})
export default compose(withStyles(presentationStyle))(
	connect(mapStateTopProps, { delete_Offredemploi })(withRouter(Modal))
)