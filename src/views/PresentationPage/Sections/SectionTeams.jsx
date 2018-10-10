import React from 'react'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
// profiles
import sarah from 'assets/img/faces/sarah.jpg'
import christian from 'assets/img/faces/christian.jpg'
import kendall from 'assets/img/faces/kendall.jpg'
// core components
import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'
import Card from 'components/Card/Card.jsx'
import CardAvatar from 'components/Card/CardAvatar.jsx'
import CardBody from 'components/Card/CardBody.jsx'
import CardFooter from 'components/Card/CardFooter.jsx'
import Button from 'components/CustomButtons/Button.jsx'
import Muted from 'components/Typography/Muted.jsx'
import teamsStyle from 'assets/jss/material-kit-pro-react/views/sectionsSections/teamsStyle.jsx'

function SectionTeams({ ...props }) {
	const { classes, ...rest } = props
	return (
		<div className="cd-section" {...rest}>
			{/* Team 1 START */}
			<div className={classes.team}>
				<div className={classes.container}>
					<GridContainer>
						<GridItem
							xs={12}
							sm={8}
							md={8}
							className={`${classes.mlAuto} ${classes.mrAuto} ${classes.textCenter}`}
						>
							<h2 className={classes.title}>Notre équipe</h2>
						</GridItem>
					</GridContainer>
					<GridContainer>
						<GridItem xs={12} sm={3} md={3}>
							<Card profile plain>
								<CardAvatar profile plain>
									<a href="#pablo" onClick={(e) => e.preventDefault()}>
										<img src={sarah} alt="..." className={classes.img} />
									</a>
								</CardAvatar>
								<CardBody>
									<h4 className={classes.cardTitle}>Sarah LACROIX</h4>
									<Muted>
										<h6 className={classes.cardCategory}>CEO / Co-Founder</h6>
									</Muted>
									<p className={classes.description}>
										And I love you like Kanye loves Kanye. We need to restart the human foundation.
									</p>
								</CardBody>
								<CardFooter profile className={classes.justifyContent}>
									<Button
										href="#pablo"
										justIcon
										simple
										color="linkedin"
										className={classes.btn}
										onClick={(e) => e.preventDefault()}
									>
										<i className="fab fa-linkedin" />
									</Button>
								</CardFooter>
							</Card>
						</GridItem>
						<GridItem xs={12} sm={3} md={3}>
							<Card profile plain>
								<CardAvatar profile plain>
									<a href="#pablo" onClick={(e) => e.preventDefault()}>
										<img src={kendall} alt="..." className={classes.img} />
									</a>
								</CardAvatar>
								<CardBody>
									<h4 className={classes.cardTitle}>Tania Julia</h4>
									<Muted>
										<h6 className={classes.cardCategory}>DESIGNER</h6>
									</Muted>
									<p className={classes.description}>
										Don't be scared of the truth because we need to restart the human foundation.
										And I love you like Kanye loves Kanye.
									</p>
								</CardBody>
								<CardFooter profile className={classes.justifyContent}>
									<Button
										href="#pablo"
										justIcon
										simple
										color="linkedin"
										className={classes.btn}
										onClick={(e) => e.preventDefault()}
									>
										<i className="fab fa-linkedin" />
									</Button>
								</CardFooter>
							</Card>
						</GridItem>
						<GridItem xs={12} sm={3} md={3}>
							<Card profile plain>
								<CardAvatar profile plain>
									<a href="#pablo" onClick={(e) => e.preventDefault()}>
										<img src={christian} alt="..." className={classes.img} />
									</a>
								</CardAvatar>
								<CardBody>
									<h4 className={classes.cardTitle}>Christian Mike</h4>
									<Muted>
										<h6 className={classes.cardCategory}>Web Developer</h6>
									</Muted>
									<p className={classes.description}>
										I love you like Kanye loves Kanye. Don't be scared of the truth because we need
										to restart the human foundation.
									</p>
								</CardBody>
								<CardFooter profile className={classes.justifyContent}>
									<Button
										href="#pablo"
										justIcon
										simple
										color="linkedin"
										className={classes.btn}
										onClick={(e) => e.preventDefault()}
									>
										<i className="fab fa-linkedin" />
									</Button>
								</CardFooter>
							</Card>
						</GridItem>
						<GridItem xs={12} sm={3} md={3}>
							<Card profile plain>
								<CardAvatar profile plain>
									<a href="#pablo" onClick={(e) => e.preventDefault()}>
										<img src={sarah} alt="..." />
									</a>
								</CardAvatar>
								<CardBody>
									<h4 className={classes.cardTitle}>Sarah LACROIX</h4>
									<Muted>
										<h6 className={classes.cardCategory}>Web Developer</h6>
									</Muted>
									<p className={classes.description}>
										And I love you like Kanye loves Kanye. We really need to restart the human
										foundation.
									</p>
								</CardBody>
								<CardFooter profile plain className={classes.justifyContent}>
									<Button
										justIcon
										simple
										color="linkedin"
										href="#pablo"
										className={classes.btn}
										onClick={(e) => e.preventDefault()}
									>
										<i className="fab fa-linkedin" />
									</Button>
								</CardFooter>
							</Card>
						</GridItem>
					</GridContainer>
				</div>
			</div>
			{/* Team 1 END */}
		</div>
	)
}

export default withStyles(teamsStyle)(SectionTeams)
