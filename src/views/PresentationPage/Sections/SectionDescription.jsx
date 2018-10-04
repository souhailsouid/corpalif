import React from 'react'

// core components
import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'
import InfoArea from 'components/InfoArea/InfoArea.jsx'

// @material-ui icons
import Apps from '@material-ui/icons/Apps'
import ViewDay from '@material-ui/icons/ViewDay'
import ViewCarousel from '@material-ui/icons/ViewCarousel'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
import ARS from '../../../assets/img/ARS.jpg'
import descriptionStyle from 'assets/jss/material-kit-pro-react/views/presentationSections/descriptionStyle.jsx'
import Grid from '@material-ui/core/Grid'
class SectionDescription extends React.Component {
	render() {
		const { classes } = this.props
		return (
			<div className={classes.section}>
				<div className={classes.container}>
					<GridContainer justify="center">
						<GridItem md={8} sm={8}>
							<h4 className={classes.description}>
								CORPALIF Bienvenue Qui sommes-nous ? La CORPALIF, coordination régionale de soins
								palliatifs d’Ile-de-France, constituée en association Loi 1901, est l’organisation
								représentant les soins palliatifs en Ile-de-France. Elle fédère l’ensemble des acteurs
								de soins palliatifs de la région, quelle que soit leur structure ou association
								d’origine : équipes mobiles (EMSP) unités fixes (USP) réseaux lits identifiés (LISP)
								hospitalisation à domicile (HAD) bénévoles d’accompagnement. Elle se donne pour mission
								de : assurer le lien entre les structures de soins palliatifs et celles partenaires dans
								le médico-social et le social dynamiser les initiatives régionales d’organisation et de
								diffusion de la démarche palliative auprès des professionnels de santé, institutionnels
								et libéraux, et du grand public être force de proposition sur des sujets clés de la
								thématique des soins palliatifs. Elle adhère à la Charte de la SFAP. Elle est missionnée
								par l’Observatoire National de la Fin de Vie sur la région et est l’interlocuteur
								privilégié pour les soins palliatifs auprès de l’ Agence Régionale de Santé
								Ile-de-France . Que faisons-nous ? Nous contribuons à la visibilité des équipes et au
								lien entre les acteurs de soins palliatifs, au développement du maillage régional, à
								l’organisation et à la diffusion d’une réflexion régionale concertée sur les pratiques
								(enquêtes, états des lieux, propositions innovantes…). Nos partenaires dans cette
								démarche : la RESPALIF : Fédération des Réseaux de Soins Palliatifs d’Ile-de-France la
								SFAP : Société Française d’Accompagnement et de soins Palliatifs la FNEHAD Ile-de-France
								: Fédération Nationale des Etablissements d’Hospitalisation A Domicile les associations
								de bénévoles (ASP, JALMALV, Les Petits Frères des Pauvres…). La CORPALIF participe à
								différents groupes de travail régionaux (urgences, LISP, formations, gériatrie,
								pédiatrie…). Elle s’inscrit dans les manifestations régionales. Elle assure la
								circulation d’informations entre les acteurs de soins palliatifs. Que proposons-nous ?
								Nous suscitons des échanges et des rencontres entre les intervenants en soins palliatifs
								en organisant au cours d’une demi-journée : 4 bibliographies annuelles médicales et
								pluridisciplinaires : questions éthiques, pharmacologie, pratiques professionnelles… 4
								après-midis annuelles de présentation/réflexion autour d’une problématique régionale. La
								CORPALIF assure une information sur les soins palliatifs en Ile-de-France pour les
								professionnels et le public (site Internet). Elle communique régulièrement sur les
								postes à pourvoir dans les structures de soins palliatifs de la région. La coordination
								régionale est relayée par des antennes départementales où les acteurs locaux peuvent se
								retrouver et partager une réflexion sur les projets en cours, sur des thèmes cliniques
								ou organisationnels. Si vous êtes professionnel de santé, nous vous invitons à nous
								rejoindre et nous soutenir en adhérant à la CORPALIF.
							</h4>
						</GridItem>
					</GridContainer>
					<h3 style={{ textAlign: 'center' }}>
						<b>Nos partenaires </b>
					</h3>
					<Grid container direction="row" justify="center" alignItems="center">
						<GridItem lg={5} md={5} sm={5}>
							<Grid container direction="row" justify="center" alignItems="center">
								<img src="http://image.noelshack.com/fichiers/2018/40/2/1538482746-webp-net-resizeimage.jpg" />
							</Grid>
							<h4 className={classes.description} style={{ color: '#212121' }}>
								<b>Agence Régionale de Soins Palliatifs</b>
							</h4>
							<p className={classes.description}>
								L’Agence régionale de santé a pour mission de mettre en place la politique de santé dans
								la région. Elle est compétente sur le champ de la santé dans sa globalité, de la
								prévention aux soins, à l’accompagnement médico-social.
							</p>
						</GridItem>

						<GridItem lg={5} md={5} sm={5}>
							<Grid container direction="row" justify="center" alignItems="center">
								<img src="http://image.noelshack.com/fichiers/2018/40/2/1538484230-webp-net-resizeimage-3.png" />
							</Grid>
							<h4 className={classes.description} style={{ color: '#212121' }}>
								<b>Société Française d'Accompagnement et de Soins Palliatifs</b>
							</h4>
							<p className={classes.description}>
								Sa mission est de représenter, de stimuler et de faciliter l'action des personnes
								morales ou physiques impliquées dans le mouvement des soins palliatifs et de
								l'accompagnement des personnes en fin de vie.
							</p>
						</GridItem>
					</Grid>
				</div>
			</div>
		)
	}
}

export default withStyles(descriptionStyle)(SectionDescription)
