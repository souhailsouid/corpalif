import React from 'react'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'

// core components
import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'

import productStyle from 'assets/jss/material-kit-pro-react/views/landingPageSections/productStyle.jsx'

class Section extends React.Component {
	render() {
		const { classes } = this.props
		return (
			<div className={classes.section}>
				<GridContainer justify="center">
					<GridItem xs={12} sm={8} md={8}>
						<h2 className={classes.title}>LEGISLATION RELATIVE AUX SOINS PALLIATIFS ET À LA FIN DE VIE</h2>
						<h4 className={classes.description}>
							Le développement et l’accès aux soins palliatifs est liée à une activité législative qui
							s’est intensifiée dans les années 90. Pour répartir l’offre de soins et assurer l’égalité
							d’accès aux soins palliatifs, les plans nationaux de développement vont venir préciser un
							certain nombre d’éléments pour l’organisation des soins palliatifs et mettre en œuvre les
							dispositions législatives.
						</h4>
					</GridItem>
				</GridContainer>
				<div>
					<GridContainer justify="center">
						<GridItem xs={12} sm={12} md={12}>
							<a
								href="https://www.legifrance.gouv.fr/affichTexte.do;jsessionid=1F1A7B2EB26F0499A5343D98A7777B3D.tplgfr24s_3?cidTexte=JORFTEXT000031970253&categorieLien=id 
"
								target="_blank"
								style={{ color: '#999' }}
							>
								<h3 className={classes.title} style={{ textAlign: 'center' }}>
									<div className="linkGreen">LOI CLAEYS-LEONETTI DU 2 FEVRIER 2016</div>

									<h5 className={classes.title} style={{ textAlign: 'center', marginTop: 0 }}>
										créant de nouveaux droits pour les personnes en fin de vie
									</h5>
								</h3>
							</a>
							<h4 className={classes.description}>
								« Toute personne a le droit d'avoir une fin de vie digne et accompagnée du meilleur
								apaisement possible de la souffrance. Les professionnels de santé mettent en œuvre tous
								les moyens à leur disposition pour que ce droit soit respecté. »
							</h4>
							<h4 className={classes.description}>
								La loi Claeys-Leonetti apporte des précisions quand aux conditions d’arrêt des
								traitements au titre du refus de l’obstination déraisonnable instaurée dans la loi du 22
								avril 2005 et instaure un droit à la sédation profonde et continue maintenue jusqu’au
								décès pour les personnes dont le pronostic vital est engagé à court terme.
							</h4>
						</GridItem>
					</GridContainer>
					<GridContainer justify="center">
						<GridItem xs={12} sm={12} md={12}>
							<a
								href="https://www.legifrance.gouv.fr/affichTexte.do?cidTexte=JORFTEXT000000446240&categorieLien=id 
"
								target="_blank"
								style={{ color: '#999' }}
							>
								<h3 className={classes.title} style={{ textAlign: 'center' }}>
									<div className="linkGreen"> LOI LEONETTI DU 22 AVRIL 2005</div>
									<h5 className={classes.title} style={{ textAlign: 'center', marginTop: 0 }}>
										relative aux droits des malades et à la fin de vie
									</h5>
								</h3>
							</a>

							<h4 className={classes.description}>
								Réaffirmant le droit d’accès aux soins palliatifs instauré par la loi du 9 juin 1999, la
								Loi Léonetti introduit la notion de refus de l’acharnement thérapeutique et vise au
								renforcement des droits du patient en fin de vie dans le refus de traitement. Cette loi
								incite à l’établissement d’une relation de soin et à la collégialité dans les décisions.
							</h4>
						</GridItem>
					</GridContainer>
					<GridContainer justify="center">
						<GridItem xs={12} sm={12} md={12}>
							<a
								href="https://www.legifrance.gouv.fr/affichTexte.do?cidTexte=JORFTEXT000000446240&categorieLien=id 
"
								target="_blank"
								style={{ color: '#999' }}
							>
								<h3 className={classes.title} style={{ textAlign: 'center' }}>
									<div className="linkGreen"> LOI DU 9 JUIN 1999</div>
									<h5 className={classes.title} style={{ textAlign: 'center', marginTop: 0 }}>
										visant à garantir le droit à l’accès aux soins palliatifs
									</h5>
								</h3>
							</a>

							<h4 className={classes.description}>
								La loi du 9 juin 1999 impulse le développement des soins palliatifs en France en
								affirmant le droit d’accès de tous à des soins palliatifs. Elle précise ainsi leur
								organisation, notamment par l’inscription dans les schémas régionaux d’organisation des
								soins.
							</h4>
						</GridItem>
					</GridContainer>

					<GridContainer justify="center" style={{ marginTop: 40 }}>
						<GridItem xs={12} sm={12} md={12}>
							<h5
								className={classes.description}
								style={{ justifyContent: 'left', textAlign: 'left' }}
								justify="left"
							>
								<b style={{ color: '#000000', textAlign: 'left', display: 'flex' }}>
									<i class="material-icons">link</i>

									<b style={{ marginLeft: 10 }}> Liens utiles</b>
								</b>
								<br />
								<br />
								<b style={{ color: '#337467' }}> LOI CLAEYS-LEONETTI DU 2 FEVRIER 2016</b>
								<br />
								<a
									href="https://www.legifrance.gouv.fr/affichTexte.do;jsessionid=1F1A7B2EB26F0499A5343D98A7777B3D.tplgfr24s_3?cidTexte=JORFTEXT000031970253&categorieLien=id 
"
									target="_blank"
									style={{ color: '#999' }}
								>
									<h5 className="link">
										<b>
											{' '}
											https://www.legifrance.gouv.fr/affichTexte.do;jsessionid=1F1A7B2EB26F0499A5343D98A7777B3D.tplgfr24s_3?cidTexte=JORFTEXT000031970253&categorieLien=id
										</b>
									</h5>
								</a>
								<b style={{ color: '#337467' }}> LOI LEONETTI DU 22 AVRIL 2005</b>
								<br />
								<a
									href="https://www.legifrance.gouv.fr/affichTexte.do?cidTexte=JORFTEXT000000446240&categorieLien=id 
"
									target="_blank"
									style={{ color: '#999' }}
								>
									<h5 className="link">
										<b>
											{' '}
											https://www.legifrance.gouv.fr/affichTexte.do?cidTexte=JORFTEXT000000446240&categorieLien=id
										</b>
									</h5>
								</a>
								<b style={{ color: '#337467' }}> LOI DU 9 JUIN 1999</b>
								<br />
								<a
									href="(https://www.legifrance.gouv.fr/affichTexte.do?cidTexte=JORFTEXT000000212121 
"
									target="_blank"
									style={{ color: '#999' }}
								>
									<h5 className="link">
										<b>
											{' '}
											(https://www.legifrance.gouv.fr/affichTexte.do?cidTexte=JORFTEXT000000212121
										</b>
									</h5>
								</a>
								<b style={{ color: '#337467' }}>Les documents et les textes officiels</b>
								<a
									href=" http://www.sfap.org/rubrique/les-documents-et-les-textes-officiels 
"
									target="_blank"
									style={{ color: '#999' }}
								>
									<h5 className="link">
										<b> http://www.sfap.org/rubrique/les-documents-et-les-textes-officiels </b>
									</h5>
								</a>
								<b style={{ color: '#337467' }}>Le cadre législatif de la fin de vie</b>
								<br />
								<a
									href="http://www.spfv.fr/actualites/cadre-legislatif-fin-vie  
"
									target="_blank"
									style={{ color: '#999' }}
								>
									<h5 className="link">
										<b>http://www.spfv.fr/actualites/cadre-legislatif-fin-vie</b>
									</h5>
								</a>
							</h5>
						</GridItem>
					</GridContainer>
				</div>
			</div>
		)
	}
}

export default withStyles(productStyle)(Section)
