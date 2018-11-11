import React, { Component } from 'react'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import jwt_decode from 'jwt-decode'
import setAuthToken from './utils/setAuthToken'
import { setCurrentUser, logoutUser } from './actions/authActions'
import PrivateRoute from 'routes/PrivateRoute.js'
import 'assets/scss/material-kit-pro-react.css?v=1.2.0'
import { Provider } from 'react-redux'
import store from './store'
import { clearCurrentProfile } from './actions/profileActions'
import Dashboard from './views/Dashboard/dashboard'
// Components
import PresentationPage from 'views/PresentationPage/PresentationPage.jsx'
import Annuaire from 'views/AnnuaireFrancilien/AnnuaireFrancilien.jsx'
import PresentationStructures from 'views/StructuresPage/ListStructures.jsx'
import PresentationBlog from 'views/VeilleMedicale/blog.jsx'

import ForgotPassword from 'views/SigninPage/ForgotPage/ResetPassword'
import CreateProfile from 'views/create-profile/CreateProfile'
import EditProfile from 'views/create-profile/UpdateProfile'
// Annuaire
import ProfilePage from 'views/Admin/ProfilePage.jsx'
import ModalSearchParis from 'views/Header/Sections/Departement/Paris/paris'
import ModalSearchYvelines from 'views/Header/Sections/Departement/Yvelines/yvelines'
import ModalSearchSeineSaintDenis from 'views/Header/Sections/Departement/SeineSaintDenis/seinesaintdenis'
import ModalSearchSeineetMarne from 'views/Header/Sections/Departement/SeineetMarne/seineetmarne'
import ModalSearchValdOise from 'views/Header/Sections/Departement/ValdOise/valdoise'
import ModalSearchEssonne from 'views/Header/Sections/Departement/Essonne/essonne'
import ModalSearchValdeMarne from 'views/Header/Sections/Departement/ValdeMarne/valdemarne'
import ModalSearchHautsdeSeine from 'views/Header/Sections/Departement/HautsdeSeine/hautsdeseine'
//Structure Annuaire

/* paris */

import PresentationLitsParis from 'views/Header/Sections/Departement/Paris/structures/lits/presentation'
import PresentationReseauxParis from 'views/Header/Sections/Departement/Paris/structures/Reseaux/presentation'
import PresentationAssociationParis from 'views/Header/Sections/Departement/Paris/structures/Association/presentation'
import PresentationStructureParis from 'views/Header/Sections/Departement/Paris/structures/structure/presentation'
import PresentationUspParis from 'views/Header/Sections/Departement/Paris/structures/Usp/presentation'
import PresentationHadParis from 'views/Header/Sections/Departement/Paris/structures/Had/presentation'
// Essonne
import PresentationLitsEssonne from 'views/Header/Sections/Departement/Essonne/structures/lits/presentation'
import PresentationReseauxEssonne from 'views/Header/Sections/Departement/Essonne/structures/Reseaux/presentation'
import PresentationAssociationEssonne from 'views/Header/Sections/Departement/Essonne/structures/Association/presentation'
import PresentationStructureEssonne from 'views/Header/Sections/Departement/Essonne/structures/structure/presentation'
import PresentationUspEssonne from 'views/Header/Sections/Departement/Essonne/structures/Usp/presentation'
import PresentationHadEssonne from 'views/Header/Sections/Departement/Essonne/structures/Had/presentation'
// Val de Marne
import PresentationLitsValdeMarne from 'views/Header/Sections/Departement/ValdeMarne/structures/lits/presentation'
import PresentationReseauxValdeMarne from 'views/Header/Sections/Departement/ValdeMarne/structures/Reseaux/presentation'
import PresentationAssociationValdeMarne from 'views/Header/Sections/Departement/ValdeMarne/structures/Association/presentation'
import PresentationStructureValdeMarne from 'views/Header/Sections/Departement/ValdeMarne/structures/structure/presentation'
import PresentationUspValdeMarne from 'views/Header/Sections/Departement/ValdeMarne/structures/Usp/presentation'
import PresentationHadValdeMarne from 'views/Header/Sections/Departement/ValdeMarne/structures/Had/presentation'
// Seine Saint Denis
import PresentationLitsSeineSaintDenis from 'views/Header/Sections/Departement/SeineSaintDenis/structures/lits/presentation'
import PresentationReseauxSeineSaintDenis from 'views/Header/Sections/Departement/SeineSaintDenis/structures/Reseaux/presentation'
import PresentationAssociationSeineSaintDenis from 'views/Header/Sections/Departement/SeineSaintDenis/structures/Association/presentation'
import PresentationStructureSeineSaintDenis from 'views/Header/Sections/Departement/SeineSaintDenis/structures/structure/presentation'
import PresentationUspSeineSaintDenis from 'views/Header/Sections/Departement/SeineSaintDenis/structures/Usp/presentation'
import PresentationHadSeineSaintDenis from 'views/Header/Sections/Departement/SeineSaintDenis/structures/Had/presentation'
// Hauts de Seine
import PresentationLitsHautsdeSeine from 'views/Header/Sections/Departement/HautsdeSeine/structures/lits/presentation'
import PresentationReseauxHautsdeSeine from 'views/Header/Sections/Departement/HautsdeSeine/structures/Reseaux/presentation'
import PresentationAssociationHautsdeSeine from 'views/Header/Sections/Departement/HautsdeSeine/structures/Association/presentation'
import PresentationStructureHautsdeSeine from 'views/Header/Sections/Departement/HautsdeSeine/structures/structure/presentation'
import PresentationUspHautsdeSeine from 'views/Header/Sections/Departement/HautsdeSeine/structures/Usp/presentation'
import PresentationHadHautsdeSeine from 'views/Header/Sections/Departement/HautsdeSeine/structures/Had/presentation'
// Val d'Oise
import PresentationLitsValdOise from 'views/Header/Sections/Departement/ValdOise/structures/lits/presentation'
import PresentationReseauxValdOise from 'views/Header/Sections/Departement/ValdOise/structures/Reseaux/presentation'
import PresentationAssociationValdOise from 'views/Header/Sections/Departement/ValdOise/structures/Association/presentation'
import PresentationStructureValdOise from 'views/Header/Sections/Departement/ValdOise/structures/structure/presentation'
import PresentationUspValdOise from 'views/Header/Sections/Departement/ValdOise/structures/Usp/presentation'
import PresentationHadValdOise from 'views/Header/Sections/Departement/ValdOise/structures/Had/presentation'
// Seine et Marne
import PresentationLitsSeineetMarne from 'views/Header/Sections/Departement/SeineetMarne/structures/lits/presentation'
import PresentationReseauxSeineetMarne from 'views/Header/Sections/Departement/SeineetMarne/structures/Reseaux/presentation'
import PresentationAssociationSeineetMarne from 'views/Header/Sections/Departement/SeineetMarne/structures/Association/presentation'
import PresentationStructureSeineetMarne from 'views/Header/Sections/Departement/SeineetMarne/structures/structure/presentation'
import PresentationUspSeineetMarne from 'views/Header/Sections/Departement/SeineetMarne/structures/Usp/presentation'
import PresentationHadSeineetMarne from 'views/Header/Sections/Departement/SeineetMarne/structures/Had/presentation'
// Yvelines
import PresentationLitsYvelines from 'views/Header/Sections/Departement/Yvelines/structures/lits/presentation'
import PresentationReseauxYvelines from 'views/Header/Sections/Departement/Yvelines/structures/Reseaux/presentation'
import PresentationAssociationYvelines from 'views/Header/Sections/Departement/Yvelines/structures/Association/presentation'
import PresentationStructureYvelines from 'views/Header/Sections/Departement/Yvelines/structures/structure/presentation'
import PresentationUspYvelines from 'views/Header/Sections/Departement/Yvelines/structures/Usp/presentation'
import PresentationHadYvelines from 'views/Header/Sections/Departement/Yvelines/structures/Had/presentation'
// ADMIN
import AnnuaireAdminHome from 'views/Admin/Home/Annuaire/Annuaire'
// PARIS ADMIN
// USP
import Paris from 'views/Admin/Home/Annuaire/Departements/Paris/USP/Paris'
import Get from 'views/Admin/Home/Annuaire/Departements/Paris/USP/get/get'
import Post from 'views/Admin/Home/Annuaire/Departements/Paris/USP/post/post'
import Update from 'views/Admin/Home/Annuaire/Departements/Paris/USP/update/Header'
import Delete from 'views/Admin/Home/Annuaire/Departements/Paris/USP/delete/PresentationDelete'
// RESEAUX
import ParisRESEAUX from 'views/Admin/Home/Annuaire/Departements/Paris/RESEAUX/Paris'
import GetPARISRESEAUX from 'views/Admin/Home/Annuaire/Departements/Paris/RESEAUX/get/get'
import PostPARISRESEAUX from 'views/Admin/Home/Annuaire/Departements/Paris/RESEAUX/post/post'
import UpdatePARISRESEAUX from 'views/Admin/Home/Annuaire/Departements/Paris/RESEAUX/update/Header'
import DeletePARISRESEAUX from 'views/Admin/Home/Annuaire/Departements/Paris/RESEAUX/delete/PresentationDelete'
// LITS IDENTIFIES
import ParisLITS from 'views/Admin/Home/Annuaire/Departements/Paris/LITS/Paris'
import GetPARISLITS from 'views/Admin/Home/Annuaire/Departements/Paris/LITS/get/get'
import PostPARISLITS from 'views/Admin/Home/Annuaire/Departements/Paris/LITS/post/post'
import UpdatePARISLITS from 'views/Admin/Home/Annuaire/Departements/Paris/LITS/update/Header'
import DeletePARISLITS from 'views/Admin/Home/Annuaire/Departements/Paris/LITS/delete/PresentationDelete'
// STRUCTURES
import ParisSTRUCTURES from 'views/Admin/Home/Annuaire/Departements/Paris/STRUCTURES/Paris'
import GetPARISSTRUCTURES from 'views/Admin/Home/Annuaire/Departements/Paris/STRUCTURES/get/get'
import PostPARISSTRUCTURES from 'views/Admin/Home/Annuaire/Departements/Paris/STRUCTURES/post/post'
import UpdatePARISSTRUCTURES from 'views/Admin/Home/Annuaire/Departements/Paris/STRUCTURES/update/Header'
import DeletePARISSTRUCTURES from 'views/Admin/Home/Annuaire/Departements/Paris/STRUCTURES/delete/PresentationDelete'
// HAD
import ParisHAD from 'views/Admin/Home/Annuaire/Departements/Paris/HAD/Paris'
import GetPARISHAD from 'views/Admin/Home/Annuaire/Departements/Paris/HAD/get/get'
import PostPARISHAD from 'views/Admin/Home/Annuaire/Departements/Paris/HAD/post/post'
import UpdatePARISHAD from 'views/Admin/Home/Annuaire/Departements/Paris/HAD/update/Header'
import DeletePARISHAD from 'views/Admin/Home/Annuaire/Departements/Paris/HAD/delete/PresentationDelete'
// ASSOCIATIONS BENEVOLES
import ParisASSOS from 'views/Admin/Home/Annuaire/Departements/Paris/ASSOS/Paris'
import GetPARISASSOS from 'views/Admin/Home/Annuaire/Departements/Paris/ASSOS/get/get'
import PostPARISASSOS from 'views/Admin/Home/Annuaire/Departements/Paris/ASSOS/post/post'
import UpdatePARISASSOS from 'views/Admin/Home/Annuaire/Departements/Paris/ASSOS/update/Header'
import DeletePARISASSOS from 'views/Admin/Home/Annuaire/Departements/Paris/ASSOS/delete/PresentationDelete'
// Check for token
if (localStorage.jwtToken) {
	// Set auth token header auth
	setAuthToken(localStorage.jwtToken)
	// Decode token and get user info and exp
	const decoded = jwt_decode(localStorage.jwtToken)
	// Set user and isAuthenticated
	store.dispatch(setCurrentUser(decoded))

	// Check for expired token
	const currentTime = Date.now() / 1000
	if (decoded.exp < currentTime) {
		// Logout user
		store.dispatch(logoutUser())
		// Clear current Profile
		store.dispatch(clearCurrentProfile())
		// Redirect to login
		window.location.href = '/'
	}
}
class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<Router>
					<div className="App">
						<Route exact path="/" component={PresentationPage} />
						<div className="container">
							<Route exact path="/annuaire-francilien" component={Annuaire} />
							<Route exact path="/structure" component={PresentationStructures} />
							<Route exact path="/blogs" component={PresentationBlog} />

							<Route exact path="/forgotpassword" component={ForgotPassword} />
							{/*  Annuaire */}
							{/* paris */}
							<Route exact path="/annuaire/paris" component={ModalSearchParis} />
							{/* Offres de soins */}
							<Route exact path="/annuaire/Paris/lits" component={PresentationLitsParis} />
							<Route exact path="/annuaire/Paris/structure" component={PresentationStructureParis} />
							<Route exact path="/annuaire/Paris/association" component={PresentationAssociationParis} />
							<Route exact path="/annuaire/Paris/had" component={PresentationHadParis} />
							<Route exact path="/annuaire/Paris/usp" component={PresentationUspParis} />
							<Route exact path="/annuaire/Paris/reseaux" component={PresentationReseauxParis} />
							{/* Yvelines */}

							<Route exact path="/annuaire/yvelines" component={ModalSearchYvelines} />
							{/* Offres de soins */}
							<Route exact path="/annuaire/Yvelines/lits" component={PresentationLitsYvelines} />
							<Route
								exact
								path="/annuaire/Yvelines/structure"
								component={PresentationStructureYvelines}
							/>
							<Route
								exact
								path="/annuaire/Yvelines/association"
								component={PresentationAssociationYvelines}
							/>
							<Route exact path="/annuaire/Yvelines/had" component={PresentationHadYvelines} />
							<Route exact path="/annuaire/Yvelines/usp" component={PresentationUspYvelines} />
							<Route exact path="/annuaire/Yvelines/reseaux" component={PresentationReseauxYvelines} />
							{/* Seine Saint Denis */}

							<Route exact path="/annuaire/seinesaintdenis" component={ModalSearchSeineSaintDenis} />
							{/* Offres de soins */}
							<Route
								exact
								path="/annuaire/SeineSaintDenis/lits"
								component={PresentationLitsSeineSaintDenis}
							/>
							<Route
								exact
								path="/annuaire/SeineSaintDenis/structure"
								component={PresentationStructureSeineSaintDenis}
							/>
							<Route
								exact
								path="/annuaire/SeineSaintDenis/association"
								component={PresentationAssociationSeineSaintDenis}
							/>
							<Route
								exact
								path="/annuaire/SeineSaintDenis/had"
								component={PresentationHadSeineSaintDenis}
							/>
							<Route
								exact
								path="/annuaire/SeineSaintDenis/usp"
								component={PresentationUspSeineSaintDenis}
							/>
							<Route
								exact
								path="/annuaire/SeineSaintDenis/reseaux"
								component={PresentationReseauxSeineSaintDenis}
							/>

							{/* Seine et Marne */}
							<Route exact path="/annuaire/seineetmarne" component={ModalSearchSeineetMarne} />
							{/* Offres de soins */}
							<Route exact path="/annuaire/SeineetMarne/lits" component={PresentationLitsSeineetMarne} />
							<Route
								exact
								path="/annuaire/SeineetMarne/structure"
								component={PresentationStructureSeineetMarne}
							/>
							<Route
								exact
								path="/annuaire/SeineetMarne/association"
								component={PresentationAssociationSeineetMarne}
							/>
							<Route exact path="/annuaire/SeineetMarne/had" component={PresentationHadSeineetMarne} />
							<Route exact path="/annuaire/SeineetMarne/usp" component={PresentationUspSeineetMarne} />
							<Route
								exact
								path="/annuaire/SeineetMarne/reseaux"
								component={PresentationReseauxSeineetMarne}
							/>

							{/* Val d'Oise */}
							<Route exact path="/annuaire/valdoise" component={ModalSearchValdOise} />
							{/* Offres de soins */}
							<Route exact path="/annuaire/ValdOise/lits" component={PresentationLitsValdOise} />
							<Route
								exact
								path="/annuaire/ValdOise/structure"
								component={PresentationStructureValdOise}
							/>
							<Route
								exact
								path="/annuaire/ValdOise/association"
								component={PresentationAssociationValdOise}
							/>
							<Route exact path="/annuaire/ValdOise/had" component={PresentationHadValdOise} />
							<Route exact path="/annuaire/ValdOise/usp" component={PresentationUspValdOise} />
							<Route exact path="/annuaire/ValdOise/reseaux" component={PresentationReseauxValdOise} />
							{/* Essonne */}
							<Route exact path="/annuaire/essonne" component={ModalSearchEssonne} />
							{/* Offres de soins */}
							<Route exact path="/annuaire/essonne/lits" component={PresentationLitsEssonne} />
							<Route exact path="/annuaire/essonne/structure" component={PresentationStructureEssonne} />
							<Route
								exact
								path="/annuaire/essonne/association"
								component={PresentationAssociationEssonne}
							/>
							<Route exact path="/annuaire/essonne/had" component={PresentationHadEssonne} />
							<Route exact path="/annuaire/essonne/usp" component={PresentationUspEssonne} />
							<Route exact path="/annuaire/essonne/reseaux" component={PresentationReseauxEssonne} />

							{/* Val de Marne */}

							<Route exact path="/annuaire/valdemarne" component={ModalSearchValdeMarne} />
							{/* Offres de soins */}
							<Route exact path="/annuaire/ValdeMarne/lits" component={PresentationLitsValdeMarne} />
							<Route
								exact
								path="/annuaire/ValdeMarne/structure"
								component={PresentationStructureValdeMarne}
							/>
							<Route
								exact
								path="/annuaire/ValdeMarne/association"
								component={PresentationAssociationValdeMarne}
							/>
							<Route exact path="/annuaire/ValdeMarne/had" component={PresentationHadValdeMarne} />
							<Route exact path="/annuaire/ValdeMarne/usp" component={PresentationUspValdeMarne} />
							<Route
								exact
								path="/annuaire/ValdeMarne/reseaux"
								component={PresentationReseauxValdeMarne}
							/>

							{/* Hauts de Seine */}

							<Route exact path="/annuaire/hautsdeseine" component={ModalSearchHautsdeSeine} />
							{/* Offres de soins */}
							<Route exact path="/annuaire/HautsdeSeine/lits" component={PresentationLitsHautsdeSeine} />
							<Route
								exact
								path="/annuaire/HautsdeSeine/structure"
								component={PresentationStructureHautsdeSeine}
							/>
							<Route
								exact
								path="/annuaire/HautsdeSeine/association"
								component={PresentationAssociationHautsdeSeine}
							/>
							<Route exact path="/annuaire/HautsdeSeine/had" component={PresentationHadHautsdeSeine} />
							<Route exact path="/annuaire/HautsdeSeine/usp" component={PresentationUspHautsdeSeine} />
							<Route
								exact
								path="/annuaire/HautsdeSeine/reseaux"
								component={PresentationReseauxHautsdeSeine}
							/>

							<Switch>
								<PrivateRoute exact path="/dashboard" component={Dashboard} />
							</Switch>
							<Switch>
								<PrivateRoute exact path="/complete-profile" component={CreateProfile} />
							</Switch>
							<Switch>
								<PrivateRoute exact path="/edit-profile" component={EditProfile} />
							</Switch>
							{/* Admin */}
							<Switch>
								<PrivateRoute exact path="/admin" component={ProfilePage} />
								<PrivateRoute exact path="/admin/annuaire" component={AnnuaireAdminHome} />
							</Switch>
							<Switch>
								{/* Paris */}
								{/* USP */}
								<PrivateRoute exact path="/admin/paris/usp" component={Paris} />
								<PrivateRoute exact path="/admin/paris/usp/:id" component={Get} />
								<PrivateRoute exact path="/admin/update/paris/usp/:id" component={Update} />
								<PrivateRoute exact path="/admin/post/paris/usp" component={Post} />
								<PrivateRoute exact path="/admin/delete/paris/usp/:id" component={Delete} />
								{/* RESEAUX */}
								<PrivateRoute exact path="/admin/paris/reseaux" component={ParisRESEAUX} />
								<PrivateRoute exact path="/admin/paris/reseaux/:id" component={GetPARISRESEAUX} />
								<PrivateRoute
									exact
									path="/admin/update/paris/reseaux/:id"
									component={UpdatePARISRESEAUX}
								/>
								<PrivateRoute exact path="/admin/post/paris/reseaux" component={PostPARISRESEAUX} />
								<PrivateRoute
									exact
									path="/admin/delete/paris/reseaux/:id"
									component={DeletePARISRESEAUX}
								/>
								{/* ASSOS */}
								<PrivateRoute exact path="/admin/paris/association" component={ParisASSOS} />
								<PrivateRoute exact path="/admin/paris/association/:id" component={GetPARISASSOS} />
								<PrivateRoute
									exact
									path="/admin/update/paris/association/:id"
									component={UpdatePARISASSOS}
								/>
								<PrivateRoute exact path="/admin/post/paris/association" component={PostPARISASSOS} />
								<PrivateRoute
									exact
									path="/admin/delete/paris/association/:id"
									component={DeletePARISASSOS}
								/>
								{/* HAD */}
								<PrivateRoute exact path="/admin/paris/had" component={ParisHAD} />
								<PrivateRoute exact path="/admin/paris/had/:id" component={GetPARISHAD} />
								<PrivateRoute exact path="/admin/update/paris/had/:id" component={UpdatePARISHAD} />
								<PrivateRoute exact path="/admin/post/paris/had" component={PostPARISHAD} />
								<PrivateRoute exact path="/admin/delete/paris/had/:id" component={DeletePARISHAD} />
								{/* STRUCTURES */}
								<PrivateRoute exact path="/admin/paris/structures" component={ParisSTRUCTURES} />
								<PrivateRoute exact path="/admin/paris/structures/:id" component={GetPARISSTRUCTURES} />
								<PrivateRoute
									exact
									path="/admin/update/paris/structures/:id"
									component={UpdatePARISSTRUCTURES}
								/>
								<PrivateRoute
									exact
									path="/admin/post/paris/structures"
									component={PostPARISSTRUCTURES}
								/>
								<PrivateRoute
									exact
									path="/admin/delete/paris/structures/:id"
									component={DeletePARISSTRUCTURES}
								/>
								{/* LITS */}
								<PrivateRoute exact path="/admin/paris/lits" component={ParisLITS} />
								<PrivateRoute exact path="/admin/paris/lits/:id" component={GetPARISLITS} />
								<PrivateRoute exact path="/admin/update/paris/lits/:id" component={UpdatePARISLITS} />
								<PrivateRoute exact path="/admin/post/paris/lits" component={PostPARISLITS} />
								<PrivateRoute exact path="/admin/delete/paris/lits/:id" component={DeletePARISLITS} />
							</Switch>
							<Switch>
								{/* Hauts de Seine */}

								{/* <PrivateRoute exact path="/admin/paris/usp" component={ParisUSPAdmin} />
								<PrivateRoute exact path="/admin/paris/usp/:id" component={DetailAssociation} />
								<PrivateRoute
									exact
									path="/admin/update/paris/usp/:id"
									component={ParisUSPUpdateAdmin}
								/>
								<PrivateRoute exact path="/admin/post/paris/usp" component={Post} />
								<PrivateRoute
									exact
									path="/admin/delete/paris/usp/:id"
									component={ParisUSPDeleteAdmin}
								/>
							</Switch>
							<Switch> */}
								{/* Val de Marne */}

								{/* <PrivateRoute exact path="/admin/paris/usp" component={ParisUSPAdmin} />
								<PrivateRoute exact path="/admin/paris/usp/:id" component={DetailAssociation} />
								<PrivateRoute
									exact
									path="/admin/update/paris/usp/:id"
									component={ParisUSPUpdateAdmin}
								/>
								<PrivateRoute exact path="/admin/post/paris/usp" component={Post} />
								<PrivateRoute
									exact
									path="/admin/delete/paris/usp/:id"
									component={ParisUSPDeleteAdmin}
								/>
							</Switch>
							<Switch> */}
								{/* Seine Saint Denis */}

								{/* <PrivateRoute exact path="/admin/paris/usp" component={ParisUSPAdmin} />
								<PrivateRoute exact path="/admin/paris/usp/:id" component={DetailAssociation} />
								<PrivateRoute
									exact
									path="/admin/update/paris/usp/:id"
									component={ParisUSPUpdateAdmin}
								/>
								<PrivateRoute exact path="/admin/post/paris/usp" component={Post} />
								<PrivateRoute
									exact
									path="/admin/delete/paris/usp/:id"
									component={ParisUSPDeleteAdmin}
								/>
							</Switch> */}
								{/* <Switch> */}
								{/* Val d'Oise */}

								{/* <PrivateRoute exact path="/admin/paris/usp" component={ParisUSPAdmin} />
								<PrivateRoute exact path="/admin/paris/usp/:id" component={DetailAssociation} />
								<PrivateRoute
									exact
									path="/admin/update/paris/usp/:id"
									component={ParisUSPUpdateAdmin}
								/>
								<PrivateRoute exact path="/admin/post/paris/usp" component={Post} />
								<PrivateRoute
									exact
									path="/admin/delete/paris/usp/:id"
									component={ParisUSPDeleteAdmin}
								/>
							</Switch> */}
								{/* <Switch> */}
								{/* Essonne */}

								{/* <PrivateRoute exact path="/admin/paris/usp" component={ParisUSPAdmin} />
								<PrivateRoute exact path="/admin/paris/usp/:id" component={DetailAssociation} />
								<PrivateRoute
									exact
									path="/admin/update/paris/usp/:id"
									component={ParisUSPUpdateAdmin}
								/>
								<PrivateRoute exact path="/admin/post/paris/usp" component={Post} />
								<PrivateRoute
									exact
									path="/admin/delete/paris/usp/:id"
									component={ParisUSPDeleteAdmin}
								/>
							</Switch>
							<Switch> */}
								{/* Seine et Marne */}

								{/* <PrivateRoute exact path="/admin/paris/usp" component={ParisUSPAdmin} />
								<PrivateRoute exact path="/admin/paris/usp/:id" component={DetailAssociation} />
								<PrivateRoute
									exact
									path="/admin/update/paris/usp/:id"
									component={ParisUSPUpdateAdmin}
								/>
								<PrivateRoute exact path="/admin/post/paris/usp" component={Post} />
								<PrivateRoute
									exact
									path="/admin/delete/paris/usp/:id"
									component={ParisUSPDeleteAdmin}
								/>
							</Switch>
							<Switch> */}
								{/* Yvelines */}

								{/* <PrivateRoute exact path="/admin/paris/usp" component={ParisUSPAdmin} />
								<PrivateRoute exact path="/admin/paris/usp/:id" component={DetailAssociation} />
								<PrivateRoute
									exact
									path="/admin/update/paris/usp/:id"
									component={ParisUSPUpdateAdmin}
								/>
								<PrivateRoute exact path="/admin/post/paris/usp" component={Post} />
								<PrivateRoute
									exact
									path="/admin/delete/paris/usp/:id"
									component={ParisUSPDeleteAdmin}
								/>
							</Switch> */}
							</Switch>
						</div>
					</div>
				</Router>
			</Provider>
		)
	}
}

export default App
