import React from 'react'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'

// core components
import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'
import productStyle from 'assets/jss/material-kit-pro-react/views/landingPageSections/productStyle.jsx'

const Section = ({ mention, classes }) => (
	<div className={classes.section}>
		<GridContainer justify="center">
			<GridItem xs={12} sm={8} md={8}>
				<h1 className={classes.title}>
					{/* {mention.title} */}
					Mentions légales{' '}
				</h1>
				<h4 className={classes.description}>
					<br />
					Merci de lire avec attention les différentes modalités d’utilisation du présent site avant d’y
					parcourir ses pages. En vous connectant sur ce site, vous acceptez sans réserves les présentes
					modalités. Aussi, conformément à l’article n°6 de la Loi n°2004-575 du 21 Juin 2004 pour la
					confiance dans l’économie numérique, les responsables du présent site internet{' '}
					<a style={{ color: 'rgb(51, 116, 103)' }} href="http://www.corpalif.com">
						www.corpalif.com
					</a>{' '}
					sont :
					<br /> <br />
					<b>Editeur du Site </b> <br />
					<br />
					CORPALIF Numéro de SIRET : 83876343100015 <br />Responsable editorial : Francis Vanhille <br />22
					rue des Lilas<br />
					Téléphone : 0674231064 <br />Email : corpalif@gmail.com <br />Site Web :{' '}
					<a style={{ color: 'rgb(51, 116, 103)' }} href="http://www.corpalif.com">
						www.corpalif.com
					</a>
					<br />
					<br />
					<b>Hébergement </b>
					<br />
					<br />
					Hébergeur : A2Hosting PO Box 2998 Ann Arbor, MI 48106 USA <br />Site Web :{' '}
					<a style={{ color: 'rgb(51, 116, 103)' }} href="http://www.A2hosting.com">
						www.A2hosting.com
					</a>
					<br />
					<br />
					<b>Développement</b>
					<br />
					<br />
					Wild Code School Paris<br /> Souid Souhail<br /> Adresse : 10 Allée Louis Aragon, A609 <br />Site
					Web :{' '}
					<a style={{ color: 'rgb(51, 116, 103)' }} href="http://www.souhailsouid.com">
						www.souhailsouid.com
					</a>
					<br />
					<br />
					<b>Conception et Design</b>
					<br />
					<br />
					L'École Multimédia
					<br /> Adresse : 201 Rue Saint-Martin, 75003 Paris <br />Site Web :{' '}
					<a style={{ color: 'rgb(51, 116, 103)' }} href="http://www.souhailsouid.com">
						https://www.ecole-multimedia.com
					</a>
					<br />
					<br />
					<b>Remerciement</b>
					<br />
					<br />
					WILD CODE SCHOOL PARIS
					<br /> Adresse : 201 Rue Saint-Martin, 75003 Paris <br />Site Web :{' '}
					<a style={{ color: 'rgb(51, 116, 103)' }} href="http://www.souhailsouid.com">
						https://wildcodeschool.fr/
					</a>
					<br />
					Equipes: Guillaume, Carlos, Phany, Mickaêl, Samuel, Pierre,<br /> Coordinateur: Abdou, Alexis <br />
					<br />L'École Multimédia:
					<br />
					Marion Jégu - Cheffe de projet <br />
					Vinciane Bizet - Développeuse<br />
					Nathalie Caumette - Graphiste<br />
					Julie Derlot - Graphiste<br />
					<br />
					<br />
					<b>Conditions d’utilisation : </b>
					<br />
					<br />
					<div>
						Ce site (<a style={{ color: 'rgb(51, 116, 103)' }} href="http://www.corpalif.com">
							www.corpalif.com
						</a>) est proposé en différents langages web (HTML, HTML5, Javascript, CSS, React, NodeJs, etc…)
						pour un meilleur confort d'utilisation et un graphisme plus agréable, nous vous recommandons de
						recourir à des navigateurs modernes comme Safari, Firefox, Google Chrome, etc…
					</div>
					<br />
					<br />
					<b> CORPALIF</b> met en œuvre tous les moyens dont elle dispose, pour assurer une information fiable
					et une mise à jour fiable de ses sites internet. Toutefois, des erreurs ou omissions peuvent
					survenir. L'internaute devra donc s'assurer de l'exactitude des informations auprès de , et signaler
					toutes modifications du site qu'il jugerait utile. n'est en aucun cas responsable de l'utilisation
					faite de ces informations, et de tout préjudice direct ou indirect pouvant en découler.
					<br /> <br />
					<b>Cookies</b> :<br />
					<br />
					Le site{' '}
					<a style={{ color: 'rgb(51, 116, 103)' }} href="http://www.corpalif.com">
						www.corpalif.com
					</a>{' '}
					peut-être amené à vous demander l’acceptation des cookies pour des besoins de statistiques et
					d'affichage. Un cookies est une information déposée sur votre disque dur par le serveur du site que
					vous visitez. Il contient plusieurs données qui sont stockées sur votre ordinateur dans un simple
					fichier texte auquel un serveur accède pour lire et enregistrer des informations . Certaines parties
					de ce site ne peuvent être fonctionnelles sans l’acceptation de cookies.
					<br /> <br />
					<b>Liens hypertextes :</b> <br />
					<br />Les sites internet de peuvent offrir des liens vers d’autres sites internet ou d’autres
					ressources disponibles sur Internet. CORPALIF ne dispose d'aucun moyen pour contrôler les sites en
					connexion avec ses sites internet. ne répond pas de la disponibilité de tels sites et sources
					externes, ni ne la garantit. Elle ne peut être tenue pour responsable de tout dommage, de quelque
					nature que ce soit, résultant du contenu de ces sites ou sources externes, et notamment des
					informations, produits ou services qu’ils proposent, ou de tout usage qui peut être fait de ces
					éléments. Les risques liés à cette utilisation incombent pleinement à l'internaute, qui doit se
					conformer à leurs conditions d'utilisation. Les utilisateurs, les abonnés et les visiteurs des sites
					internet de ne peuvent mettre en place un hyperlien en direction de ce site sans l'autorisation
					expresse et préalable de CORPALIF. Dans l'hypothèse où un utilisateur ou visiteur souhaiterait
					mettre en place un hyperlien en direction d’un des sites internet de CORPALIF, il lui appartiendra
					d'adresser un email accessible sur le site afin de formuler sa demande de mise en place d'un
					hyperlien. CORPALIF se réserve le droit d’accepter ou de refuser un hyperlien sans avoir à en
					justifier sa décision.
					<br /> <br />
					<b>Services fournis : </b>
					<br />
					<br />
					L'ensemble des activités de l'association ainsi que ses informations sont présentés sur notre site{' '}
					<a style={{ color: 'rgb(51, 116, 103)' }} href="http://www.corpalif.com">
						www.corpalif.com
					</a>. CORPALIF s’efforce de fournir sur le site www.corpalif.com des informations aussi précises que
					possible. les renseignements figurant sur le site{' '}
					<a style={{ color: 'rgb(51, 116, 103)' }} href="http://www.corpalif.com">
						www.corpalif.com
					</a>{' '}
					ne sont pas exhaustifs et les photos non contractuelles. Ils sont donnés sous réserve de
					modifications ayant été apportées depuis leur mise en ligne. Par ailleurs, tous les informations
					indiquées sur le site www.corpalif.com
					<b> </b>
					sont données à titre indicatif, et sont susceptibles de changer ou d’évoluer sans préavis. <br />
					<br />
					<b>Limitation contractuelles sur les données : </b>
					<br />
					<div>
						Les informations contenues sur ce site sont aussi précises que possible et le site remis à jour
						à différentes périodes de l’année, mais peut toutefois contenir des inexactitudes ou des
						omissions. Si vous constatez une lacune, erreur ou ce qui parait être un dysfonctionnement,
						merci de bien vouloir le signaler par email, à l’adresse corpalif@gmail.com, en décrivant le
						problème de la manière la plus précise possible (page posant problème, type d’ordinateur et de
						navigateur utilisé, …).
					</div>
					Tout contenu téléchargé se fait aux risques et périls de l'utilisateur et sous sa seule
					responsabilité. En conséquence, ne saurait être tenu responsable d'un quelconque dommage subi par
					l'ordinateur de l'utilisateur ou d'une quelconque perte de données consécutives au téléchargement.{' '}
					De plus, l’utilisateur du site s’engage à accéder au site en utilisant un matériel récent, ne
					contenant pas de virus et avec un navigateur de dernière génération mis-à-jour Les liens hypertextes
					mis en place dans le cadre du présent site internet en direction d'autres ressources présentes sur
					le réseau Internet ne sauraient engager la responsabilité de CORPALIF.
					<br />
					<br />
					<b>Propriété intellectuelle :</b>
					<br />
					<br />
					Tout le contenu du présent sur le site{' '}
					<a style={{ color: 'rgb(51, 116, 103)' }} href="http://www.corpalif.com">
						www.corpalif.com
					</a>, incluant, de façon non limitative, les graphismes, images, textes, vidéos, animations, sons,
					logos, gifs et icônes ainsi que leur mise en forme sont la propriété exclusive de la société à
					l'exception des marques, logos ou contenus appartenant à d'autres sociétés partenaires ou auteurs.
					Toute reproduction, distribution, modification, adaptation, retransmission ou publication, même
					partielle, de ces différents éléments est strictement interdite sans l'accord exprès par écrit de
					CORPALIF. Cette représentation ou reproduction, par quelque procédé que ce soit, constitue une
					contrefaçon sanctionnée par les articles L.335-2 et suivants du Code de la propriété intellectuelle.
					Le non-respect de cette interdiction constitue une contrefaçon pouvant engager la responsabilité
					civile et pénale du contrefacteur. En outre, les propriétaires des Contenus copiés pourraient
					intenter une action en justice à votre encontre.
					<br />
					<br />
					<b>Déclaration à la CNIL : </b>
					<br />
					<br />
					Conformément à la loi 78-17 du 6 janvier 1978 (modifiée par la loi 2004-801 du 6 août 2004 relative
					à la protection des personnes physiques à l'égard des traitements de données à caractère personnel)
					relative à l'informatique, aux fichiers et aux libertés, ce site n'a pas fait l'objet d'une
					déclaration auprès de la Commission nationale de l'informatique et des libertés (<a
						style={{ color: 'rgb(0, 0, 0)' }}
						href="http://www.cnil.fr/"
					>
						www.cnil.fr
					</a>).
					<br />
					<br />
					<b>Litiges : </b>
					<br />
					<br />
					Les présentes conditions du site{' '}
					<a style={{ color: 'rgb(51, 116, 103)' }} href="http://www.corpalif.com">
						www.corpalif.com
					</a>{' '}
					sont régies par les lois françaises et toute contestation ou litiges qui pourraient naître de
					l'interprétation ou de l'exécution de celles-ci seront de la compétence exclusive des tribunaux dont
					dépend le siège social de la société. La langue de référence, pour le règlement de contentieux
					éventuels, est le français.
					<br />
					<br />
					<b>Données personnelles :</b>
					<br />
					<br />
					De manière générale, vous n’êtes pas tenu de nous communiquer vos données personnelles lorsque vous
					visitez notre site Internet{' '}
					<a style={{ color: 'rgb(51, 116, 103)' }} href="http://www.corpalif.com">
						www.corpalif.com
					</a>. Cependant, ce principe comporte certaines exceptions. En effet, pour certains services
					proposés par notre site, vous pouvez être amenés à nous communiquer certaines données telles que :
					votre nom, votre fonction, le nom de votre société, votre adresse électronique, et votre numéro de
					téléphone. Tel est le cas lorsque vous remplissez le formulaire qui vous est proposé en ligne, dans
					la rubrique « contact ». Dans tous les cas, vous pouvez refuser de fournir vos données personnelles.
					Dans ce cas, vous ne pourrez pas utiliser les services du site, notamment celui de solliciter des
					renseignements sur notre société, ou de recevoir les lettres d’information. Enfin, nous pouvons
					collecter de manière automatique certaines informations vous concernant lors d’une simple navigation
					sur notre site Internet, notamment : des informations concernant l’utilisation de notre site, comme
					les zones que vous visitez et les services auxquels vous accédez, votre adresse IP, le type de votre
					navigateur, vos temps d'accès. De telles informations sont utilisées exclusivement à des fins de
					statistiques internes, de manière à améliorer la qualité des services qui vous sont proposés. Les
					bases de données sont protégées par les dispositions de la loi du 1er juillet 1998 transposant la
					directive 96/9 du 11 mars 1996 relative à la protection juridique des bases de données.
					<br /> <br />
					<b> Gestion des données personnelles</b> <br />Le Client est informé des réglementations concernant
					la communication marketing, la loi du 21 Juin 2014 pour la confiance dans l’Economie Numérique, la
					Loi Informatique et Liberté du 06 Août 2004 ainsi que du Règlement Général sur la Protection des
					Données (RGPD : n° 2016-679). <br />7.1 Responsables de la collecte des données personnelles Pour
					les Données Personnelles collectées dans le cadre de la création du compte personnel de
					l’Utilisateur et de sa navigation sur le Site, le responsable du traitement des Données Personnelles
					est : CORPALIF. https://www.corpalif.com est représenté par Francis VANHILLE, son représentant légal
					En tant que responsable du traitement des données qu’il collecte, https://www.corpalif.com s’engage
					à respecter le cadre des dispositions légales en vigueur. Il lui appartient notamment au Client
					d’établir les finalités de ses traitements de données, de fournir à ses prospects et clients, à
					partir de la collecte de leurs consentements, une information complète sur le traitement de leurs
					données personnelles et de maintenir un registre des traitements conforme à la réalité. Chaque fois
					que https://www.corpalif.com traite des Données Personnelles, https://www.corpalif.com prend toutes
					les mesures raisonnables pour s’assurer de l’exactitude et de la pertinence des Données Personnelles
					au regard des finalités pour lesquelles https://www.corpalif.com les traite.<br /> 7.2 Finalité des
					données collectées https://www.corpalif.com est susceptible de traiter tout ou partie des données :
					pour permettre la navigation sur le Site et la gestion et la traçabilité des prestations et services
					commandés par l’utilisateur : données de connexion et d’utilisation du Site, facturation, historique
					des commandes, etc. pour prévenir et lutter contre la fraude informatique (spamming, hacking…) :
					matériel informatique utilisé pour la navigation, l’adresse IP, le mot de passe (hashé) pour
					améliorer la navigation sur le Site : données de connexion et d’utilisation pour mener des enquêtes
					de satisfaction facultatives sur https://www.corpalif.com : adresse email pour mener des campagnes
					de communication (sms, mail) : numéro de téléphone, adresse email https://www.corpalif.com ne
					commercialise pas vos données personnelles qui sont donc uniquement utilisées par nécessité ou à des
					fins statistiques et d’analyses.<br /> 7.3 Droit d’accès, de rectification et d’opposition
					Conformément à la réglementation européenne en vigueur, les Utilisateurs de https://www.corpalif.com
					disposent des droits suivants : droit d'accès (article 15 RGPD) et de rectification (article 16
					RGPD), de mise à jour, de complétude des données des Utilisateurs droit de verrouillage ou
					d’effacement des données des Utilisateurs à caractère personnel (article 17 du RGPD), lorsqu’elles
					sont inexactes, incomplètes, équivoques, périmées, ou dont la collecte, l'utilisation, la
					communication ou la conservation est interdite droit de retirer à tout moment un consentement
					(article 13-2c RGPD) droit à la limitation du traitement des données des Utilisateurs (article 18
					RGPD) droit d’opposition au traitement des données des Utilisateurs (article 21 RGPD) droit à la
					portabilité des données que les Utilisateurs auront fournies, lorsque ces données font l’objet de
					traitements automatisés fondés sur leur consentement ou sur un contrat (article 20 RGPD) droit de
					définir le sort des données des Utilisateurs après leur mort et de choisir à qui
					https://www.corpalif.com devra communiquer (ou non) ses données à un tiers qu’ils aura préalablement
					désigné Dès que https://www.corpalif.com a connaissance du décès d’un Utilisateur et à défaut
					d’instructions de sa part, https://www.corpalif.com s’engage à détruire ses données, sauf si leur
					conservation s’avère nécessaire à des fins probatoires ou pour répondre à une obligation légale. Si
					l’Utilisateur souhaite savoir comment https://www.corpalif.com utilise ses Données Personnelles,
					demander à les rectifier ou s’oppose à leur traitement, l’Utilisateur peut contacter
					https://www.corpalif.com par écrit à l’adresse suivante : CORPALIF – DPO, Francs Vanhille 22 rue des
					Lilas 92700 Colombes. Dans ce cas, l’Utilisateur doit indiquer les Données Personnelles qu’il
					souhaiterait que https://www.corpalif.com corrige, mette à jour ou supprime, en s’identifiant
					précisément avec une copie d’une pièce d’identité (carte d’identité ou passeport). Les demandes de
					suppression de Données Personnelles seront soumises aux obligations qui sont imposées à
					https://www.corpalif.com par la loi, notamment en matière de conservation ou d’archivage des
					documents. Enfin, les Utilisateurs de https://www.corpalif.com peuvent déposer une réclamation
					auprès des autorités de contrôle, et notamment de la CNIL (https://www.cnil.fr/fr/plaintes).<br />{' '}
					7.4 Non-communication des données personnelles https://www.corpalif.com s’interdit de traiter,
					héberger ou transférer les Informations collectées sur ses Clients vers un pays situé en dehors de
					l’Union européenne ou reconnu comme « non adéquat » par la Commission européenne sans en informer
					préalablement le client. Pour autant, https://www.corpalif.com reste libre du choix de ses
					sous-traitants techniques et commerciaux à la condition qu’il présentent les garanties suffisantes
					au regard des exigences du Règlement Général sur la Protection des Données (RGPD : n° 2016-679).
					https://www.corpalif.com s’engage à prendre toutes les précautions nécessaires afin de préserver la
					sécurité des Informations et notamment qu’elles ne soient pas communiquées à des personnes non
					autorisées. Cependant, si un incident impactant l’intégrité ou la confidentialité des Informations
					du Client est portée à la connaissance de https://www.corpalif.com, celle-ci devra dans les
					meilleurs délais informer le Client et lui communiquer les mesures de corrections prises. Par
					ailleurs https://www.corpalif.com ne collecte aucune « données sensibles ». Les Données Personnelles
					de l’Utilisateur peuvent être traitées par des filiales de https://www.corpalif.com et des
					sous-traitants (prestataires de services), exclusivement afin de réaliser les finalités de la
					présente politique. Dans la limite de leurs attributions respectives et pour les finalités rappelées
					ci-dessus, les principales personnes susceptibles d’avoir accès aux données des Utilisateurs de
					https://www.corpalif.com sont principalement les agents de notre service client.
					<br />
					<br />
					<b>PAIEMENT :</b>
					<br />
					<br />
					Dans le cadre d’achat sur le site www.corpalif.com, le paiement est exigible immédiatement à la date
					de la commande. Dans le cas d’un paiement sécurisé en ligne par carte bancaire, la transaction sera
					réalisée par l’intermédiaire d’une société spécialisée qui pourra assurer que les informations
					transmises soient cryptées par un logiciel à l’état de l’art, et ne puissent être lues au cours du
					transport sur le réseau. Toute garantie quant à la sécurité de ce système est entièrement de la
					responsabilité de la société spécialisée et ne saurait être imputée à www.corpalif.com et à son
					developpeur stagiare. Pour que l’adhésion soit prise en compte, le client doit avoir finalisé
					l’achat de l'adhésion correspondant qui inclut le paiement. La réception d’une facture générée lors
					de l’achat constitue la preuve de paiement de l’acompte. Le paiement de l’intégralité du montant est
					exigé pour l'adhésion, ceci étant spécifié sur la page de vente de l'adhésion annuelle. L'adhésion
					annuelle est <b>l'année civile</b> en question. Par exemple, si un client adhère le 31 avril
					2019.L'adhésion sera prise en compte jusqu'au 31 décembre de la même année, soit jusqu'au 31
					décembre 2019. <br />
					L'adhésion sera réputée définitive à l’encaissement par www.corpalif.com de l’intégralité du tarif
					collectif ou individuel toutes taxes comprises, ce qui en sera l’élément déclencheur de l'adhésion
					annuelle pour l'année civile en question. <br />
					<br /> <b> LIVRAISON</b> <br />
					<br />La confirmation de l'adhésion est faite à l’adresse électronique que le client aura indiqué
					lors de la commande et est seul responsable des informations qu’il aura communiquées. En cas
					d’erreur ou d’adresse pas assez explicite, dont la conséquence pourrait être une livraison erronée,
					aucune responsabilité de www.corpalif.com ne pourra être engagée. <br />
					<br />
					<b> CONDITIONS D’ANNULATION, DE RETOUR, DE REMBOURSEMENT – DROIT DE RETRACTATION </b> <br />
					<br />Conformément à l’article Article L121-21 du code de la consommation, le client dispose d’un
					délai de 14 jours calendaires à compter de la date d’achat pour un service ou de la date de
					réception pour un produit, pour exercer son droit de rétractation. S’il souhaite exercer ce droit,
					le client devra rédiger une déclaration exprimant sans ambiguïté sa volonté de se rétracter et
					l’envoyer à www.corpalif.com par lettre recommandée avec accusé de réception à:<br />
					<br /> Corpalif <br />
					Trésorier de la CORPALIF
					<br />
					Hôpital Jeanne Garnier, 75 016 PARIS <br />
					<br /> Le remboursement sera effectué par www.corpalif.com dans les délais légaux prévus dans le
					code de la consommation et via le même mode de paiement que celui utilisé par le client. Toutefois,
					s’il est responsable de la dépréciation des biens qu’il a reçu du fait de manipulations de ces biens
					qui n’étaient pas nécessaires pour en établir la nature, les caractéristiques et le bon
					fonctionnement, le droit de rétractation sera écarté.
				</h4>
			</GridItem>
		</GridContainer>
	</div>
)

export default withStyles(productStyle)(Section)
