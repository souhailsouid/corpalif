import React from 'react'

// core components
import Media from 'react-media'
import Grid from '@material-ui/core/Grid'
import GridContainer from 'components/Grid/GridContainer.jsx'
import style from 'assets/jss/material-kit-pro-react/views/componentsSections/contentAreas.jsx'
import GridItem from 'components/Grid/GridItem.jsx'
import withStyles from '@material-ui/core/styles/withStyles'

const TablesHead = () => (
	<div>
		<Media query="(max-width: 1000px)">
			{(matches) =>
				matches ? (
					<GridContainer />
				) : (
					<GridContainer
						style={{
							width: 'auto',

							alignItems: 'center',
							display: 'flex'
						}}
					>
						<GridItem
							xs={6}
							sm={6}
							md={12}
							style={{
								display: 'flex',

								justifyContent: 'space-between',
								minWidth: 'auto',
								flewWrap: 'wrap'
							}}
						>
							<Grid item md={10} style={{ textAlign: 'center' }} />
							<Grid item md={7} style={{ textAlign: 'center', marginLeft: '270px' }}>
								<i class="material-icons" style={{ fontSize: 40 }}>
									room
								</i>
							</Grid>
							{/* <Grid item md={2} style={{ textAlign: 'center', paddingRight: 20 }}>
								<i class="material-icons" style={{ fontSize: 40 }}>
									language
								</i>{' '}
							</Grid> */}

							<Grid item md={12} style={{ textAlign: 'center', paddingRight: 50 }}>
								<i class="material-icons" style={{ fontSize: 40 }}>
									call
								</i>{' '}
							</Grid>
							{/* <Grid item md={2} style={{ textAlign: 'center', marginLeft: 20, paddingRight: 100 }}>
								<i class="material-icons" style={{ fontSize: 40 }}>
									email
								</i>{' '}
							</Grid> */}
						</GridItem>
					</GridContainer>
				)}
		</Media>
	</div>
)
export default withStyles(style)(TablesHead)
