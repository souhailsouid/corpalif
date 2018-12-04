import React from 'react'

import Media from 'react-media'
// core components
import style from 'assets/jss/material-kit-pro-react/views/componentsSections/contentAreas.jsx'
import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'
import withStyles from '@material-ui/core/styles/withStyles'
import Grid from '@material-ui/core/Grid'
import 'views/Header/Sections/style.css'

const Tables = ({ lit }) => (
	<div>
		<Media query="(max-width: 1000px)">
			{(matches) =>
				matches ? (
					<GridContainer>
						<GridItem xs={12} sm={12} md={12}>
							<Grid item md={3} style={{ textAlign: 'center' }}>
								<div style={{ textAlign: 'center' }}>
									<b>
										<h3 style={{ color: '#337467', marginLeft: 10 }}>{lit.name}</h3>
									</b>
								</div>
							</Grid>
							<Grid item md={'auto'} style={{ marginLeft: 20 }}>
								<div style={{ display: 'flex', spaceBetween: 'space-between' }}>
									<i class="material-icons">room</i>{' '}
									<h5 style={{ marginLeft: 10 }}>
										{lit.rue}
										{lit.compl} {lit.postcode}
									</h5>
								</div>
							</Grid>
							<Grid item md={12} style={{ marginLeft: 20 }}>
								<div style={{ display: 'flex' }}>
									<i class="material-icons">language</i>
									<a href={`http://${lit.web}`} target="_blank" style={{ color: 'rgb(60, 72, 88)' }}>
										<h5
											className="link"
											style={{
												marginLeft: 10
											}}
										>
											{' '}
											{lit.web}
										</h5>
									</a>
								</div>
							</Grid>
							<Grid item md={2} style={{ marginLeft: 20 }}>
								<div style={{ display: 'flex' }}>
									<i class="material-icons">email</i>{' '}
									<h5 style={{ marginLeft: 10 }}> {lit.email} </h5>
								</div>
							</Grid>
							<Grid item md={2} style={{ marginLeft: 20 }}>
								<div style={{ display: 'flex' }}>
									<i class="material-icons">call</i> <h5 style={{ marginLeft: 10 }}> {lit.phone} </h5>
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
								justifyContent: 'stretch',
								minWidth: 'auto',
								flewWrap: 'wrap'
							}}
						>
							<Grid item md={3} style={{ textAlign: 'center' }}>
								<b>
									<a href={`http://${lit.web}`} target="_blank">
										<h3 style={{ color: '#337467', marginTop: 5, textAlign: 'center' }}>
											{lit.name}
										</h3>
									</a>
								</b>
							</Grid>
							<Grid item md={4} style={{ marginLeft: 20, textAlign: 'center' }}>
								<div>
									<h5>{lit.rue}</h5>

									<h5>{lit.compl}</h5>
									<h5>{lit.postcode}</h5>
								</div>
							</Grid>

							<Grid
								item
								xs={5}
								style={{
									textAlign: 'center'
								}}
							>
								<div>
									{' '}
									<a href={`http://${lit.web}`} target="_blank" style={{ color: 'rgb(60, 72, 88)' }}>
										<h5
											className="link"
											style={{
												textAlign: 'center'
											}}
										>
											{' '}
											{lit.web}
										</h5>
									</a>
								</div>
							</Grid>

							<Grid item md={3} style={{ marginLeft: 20 }}>
								<div style={{ display: 'flex', flewWrap: 'wrap' }}>
									<h5 style={{ marginLeft: 10, padding: 0, textAlign: 'center' }}> {lit.phone} </h5>
								</div>
							</Grid>
							<Grid item md={4} style={{ marginLeft: 0 }}>
								<div style={{ display: 'flex' }}>
									<h5 style={{ marginLeft: 0 }}> {lit.email} </h5>
								</div>
							</Grid>
						</GridItem>
					</GridContainer>
				)}
		</Media>
	</div>
)
export default withStyles(style)(Tables)
