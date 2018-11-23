import React from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
// import Example from 'components/Header/sub'
import GridContainer from 'components/Grid/GridContainer.jsx'
// import SectionCards from 'views/PresentationPage/Sections/SectionCards.jsx'
import Spinner from 'views/common/Spinner'
import Tables from './table'
import GridItem from 'components/Grid/GridItem.jsx'

import presentationStyle from 'assets/jss/material-kit-pro-react/views/presentationStyle.jsx'
import HeaderSearchBar from 'views/Header/HeaderSearchBar'
import SectionFooter from 'views/Footer/SectionFooter'
import InfoArea from 'components/InfoArea/InfoStructureArea.jsx'

import PinDrop from '@material-ui/icons/PinDrop'
import Phone from '@material-ui/icons/Phone'
import Email from '@material-ui/icons/Email'

// Redux
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { getCurrentStructure } from 'actions/annuaireActions'
import { connect } from 'react-redux'
import { compose } from 'redux'

class PresentationAssociationEssonne extends React.Component {
	componentDidMount() {
		window.scrollTo(0, 0)
		document.body.scrollTop = 0
		this.props.getCurrentStructure()
	}
	render() {
		const { association, loading, associations } = this.props.association
		console.log(association)
		const { classes } = this.props
		let dashboardContent

		if (association === null || loading) {
			dashboardContent = <Spinner />
		} else {
			// Check if logged in user has profile data

			if (Object.keys(association).length > 0) {
				console.log(Object.keys(association[0]))
				dashboardContent = (
					<div>
						{association.keys(1)}
						<br />
						name:
						{/* {association[i].name} */}
						<br />
						{/* {association[i].adresse} */}
						<h5>Vos informations</h5>
					</div>
				)

				// {
				// 	for (var i = 0; i < association.length; i++) {
				// 		return [ association[1].name, association.adresse, association.phone, association.email ]
				// 	}
				// }
			}
		}
		const recipeElements = association.map((association) => <Tables association={association} />)
		const allAssociationNamesEssonne = association.map((association) => {
			return <div>{association._id}</div>
		})
		console.log(allAssociationNamesEssonne)

		return (
			<div>
				<HeaderSearchBar />

				<div className={classNames(classes.main, classes.mainRaised)}>
					<GridContainer justify="center">
						{/* {dashboardContent} */}
						{/* {allAssociationNamesEssonne} */}
						{/* <Tables /> */}

						<GridItem xs={12} sm={10} md={10}>
							<h1>Les associations et benevole en Essonne </h1>
							<div style={{ marginTop: 10, display: 'flex-end', justifyContent: 'space-evenly' }}>
								<div style={{ display: 'flex', justifyContent: 'space-evenly' }} />
								<GridContainer justify="center">
									<GridItem xs={12} sm={10} md={12}>
										<div style={{ display: 'flex' }}>
											<InfoArea className={classes.infoArea} title="Name" icon={PinDrop} />,
											<InfoArea className={classes.infoArea} title="Adresse" icon={PinDrop} />,
											<InfoArea className={classes.infoArea} title="Téléphone" icon={Phone} />,
											<InfoArea className={classes.infoArea} title="Email" icon={Email} />
										</div>
									</GridItem>
								</GridContainer>
								<GridItem xs={12} sm={10} md={12}>
									{recipeElements}
								</GridItem>
							</div>
						</GridItem>

						{/* <SectionStructure /> */}
					</GridContainer>
					<SectionFooter />
				</div>
				<div />
			</div>
		)
	}
}

PresentationAssociationEssonne.propTypes = {
	getCurrentStructure: PropTypes.func.isRequired,
	association: PropTypes.object.isRequired,
	classes: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
	association: state.association,
	associations: state.associations
})

export default compose(withStyles(presentationStyle))(
	connect(mapStateToProps, { getCurrentStructure })(withRouter(PresentationAssociationEssonne))
)
