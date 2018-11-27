import React from 'react'

import Media from 'react-media'
// core components
import style from 'assets/jss/material-kit-pro-react/views/componentsSections/contentAreas.jsx'
import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'
import withStyles from '@material-ui/core/styles/withStyles'

import Grid from '@material-ui/core/Grid'

const Tables = ({ soin }) => (
	<div>
		<Media query="(max-width: 1000px)">
			{(matches) =>
				matches ? (
					<GridContainer>
						<GridItem xs={12} sm={12} md={12}>
							<Grid item md={3} style={{ textAlign: 'center' }}>
								<div style={{ textAlign: 'center' }}>
									<b>
										<h3 style={{ color: '#337467' }}>{soin.name}</h3>
									</b>
								</div>
							</Grid>
							<Grid item md={'auto'} style={{ marginLeft: 20 }}>
								<div style={{ display: 'flex' }}>
									<i class="material-icons">room</i>{' '}
									<h5 style={{ marginLeft: 10 }}>{soin.adresse}</h5>
								</div>
							</Grid>
							<Grid item md={2} style={{ marginLeft: 20 }}>
								<div style={{ display: 'flex' }}>
									<i class="material-icons">email</i>{' '}
									<h5 style={{ marginLeft: 10 }}> {soin.email} </h5>
								</div>
							</Grid>
							<Grid item md={2} style={{ marginLeft: 20 }}>
								<div style={{ display: 'flex' }}>
									<i class="material-icons">call</i>{' '}
									<h5 style={{ marginLeft: 10 }}> {soin.phone} </h5>
								</div>
							</Grid>
						</GridItem>
					</GridContainer>
				) : (
					<GridContainer>
						<GridItem
							xs={12}
							sm={12}
							md={12}
							style={{
								display: 'flex',
								justifyContent: 'space-between',
								minWidth: 'auto',
								flewWrap: 'wrap'
							}}
						>
							<Grid item md={3} style={{ textAlign: 'center' }}>
								<b>
									<h3 style={{ color: '#337467' }}>{soin.name}</h3>
								</b>
							</Grid>
							<Grid item md={3} style={{ marginLeft: 20 }}>
								<div style={{ display: 'flex' }}>
									<h5 style={{ marginLeft: 10 }}>{soin.adresse}</h5>
								</div>
							</Grid>
							<Grid item md={3} style={{ marginLeft: 20 }}>
								<div style={{ display: 'flex' }}>
									<h5 style={{ marginLeft: 10 }}> {soin.email} </h5>
								</div>
							</Grid>
							<Grid item md={3} style={{ marginLeft: 20 }}>
								<div style={{ display: 'flex' }}>
									<h5 style={{ marginLeft: 10 }}> {soin.phone} </h5>
								</div>
							</Grid>
						</GridItem>
					</GridContainer>
				)}
		</Media>
	</div>
)
export default withStyles(style)(Tables)