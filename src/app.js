import React, { Component } from 'react'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import jwt_decode from 'jwt-decode'
import setAuthToken from './utils/setAuthToken'
import { setCurrentUser, logoutUser } from './actions/authActions'
import PrivateRoute from 'routes/PrivateRoute.js'
import AdminRoute from 'routes/AdminRoute.js'
import 'assets/scss/material-kit-pro-react.css?v=1.2.0'
import { Provider } from 'react-redux'
import store from './store'
import { clearCurrentProfile } from 'actions/profileActions'
import Dashboard from 'views/Dashboard/dashboard'
import ProfilePagePresentation from 'views/Dashboard/ProfilePage'
import PasswordChanged from 'views/SigninPage/ForgotPage/ModalSendConfirmation'
// Components
import PresentationPage from 'views/PresentationPage/PresentationPage.jsx'
import LoginPage from 'views/SigninPage/LoginPage.js'
import RegisterPage from 'views/SignupPage/RegisterPresentation.js'
import PaymentLoginPage from 'views/SigninPage/Payment/PaymentConnection.js'

import Annuaire from 'views/AnnuaireFrancilien/AnnuaireFrancilien.jsx'
import PresentationStructures from 'views/StructuresPage/ListStructures.jsx'
import PresentationBlog from 'views/VeilleMedicale/blog.jsx'

import CreateProfile from 'views/create-profile/CreateProfile'
import UpdatePage from 'views/create-profile/UpdatePage'
//Login

import CreateprofilePage from 'views/create-profile/createProfile/CreateprofilePage.js'
//Payment Process
import DetectStatus from 'views/Menu/coordinationregionale/adherer/Sections/Components/routeTransversale'
import CompleteprofilePage from 'views/create-profile/PaymentProcess/CompleteProfile/CompleteprofilePage.js'
import UpdateProfilePage from 'views/create-profile/PaymentProcess/UpdateProfile/UpdatePage.js'
// Reset Password

import ForgotPassword from 'views/SigninPage/ForgotPage/ResetPassword'
import UpdatePasswordPage from 'views/SigninPage/ForgotPage/UpdatePasswordPage'
// Annuaire
import ProfilePage from 'views/Admin/ProfilePage.jsx'
import VeillemedicalePage from 'views/Admin/Menu/VeilleMedicale/veilleMedicale.jsx'
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
import PresentationHadParis from 'views/Header/Sections/Departement/Paris/structures/Team/presentation'
import Presentation_PARIS_autres_structures from 'views/Header/Sections/Departement/Paris/structures/autres_structures/presentation'
import Presentation_PARIS_Autres from 'views/Header/Sections/Departement/Paris/structures/autres/presentation'
// Essonne
import PresentationMapEssonne from 'views/Header/Sections/Departement/Essonne/structures/Usp/leaflet'
import PresentationLitsEssonne from 'views/Header/Sections/Departement/Essonne/structures/lits/presentation'
import PresentationReseauxEssonne from 'views/Header/Sections/Departement/Essonne/structures/Reseaux/presentation'
import PresentationAssociationEssonne from 'views/Header/Sections/Departement/Essonne/structures/Association/presentation'
import PresentationStructureEssonne from 'views/Header/Sections/Departement/Essonne/structures/structure/presentation'
import PresentationUspEssonne from 'views/Header/Sections/Departement/Essonne/structures/Usp/presentation'
import PresentationHadEssonne from 'views/Header/Sections/Departement/Essonne/structures/Team/presentation'
import Presentation_ESSONNE_autres_structures from 'views/Header/Sections/Departement/Essonne/structures/autres_structures/presentation'
import Presentation_ESSONNE_Autres from 'views/Header/Sections/Departement/Essonne/structures/autres/presentation'
// Val de Marne
import PresentationLitsValdeMarne from 'views/Header/Sections/Departement/ValdeMarne/structures/lits/presentation'
import PresentationReseauxValdeMarne from 'views/Header/Sections/Departement/ValdeMarne/structures/Reseaux/presentation'
import PresentationAssociationValdeMarne from 'views/Header/Sections/Departement/ValdeMarne/structures/Association/presentation'
import PresentationStructureValdeMarne from 'views/Header/Sections/Departement/ValdeMarne/structures/structure/presentation'
import PresentationUspValdeMarne from 'views/Header/Sections/Departement/ValdeMarne/structures/Usp/presentation'
import PresentationHadValdeMarne from 'views/Header/Sections/Departement/ValdeMarne/structures/Team/presentation'
import Presentation_VALDEMARNE_autres_structures from 'views/Header/Sections/Departement/ValdeMarne/structures/autres_structures/presentation'
import Presentation_VALDEMARNE_Autres from 'views/Header/Sections/Departement/ValdeMarne/structures/autres/presentation'
// Seine Saint Denis
import PresentationLitsSeineSaintDenis from 'views/Header/Sections/Departement/SeineSaintDenis/structures/lits/presentation'
import PresentationReseauxSeineSaintDenis from 'views/Header/Sections/Departement/SeineSaintDenis/structures/Reseaux/presentation'
import PresentationAssociationSeineSaintDenis from 'views/Header/Sections/Departement/SeineSaintDenis/structures/Association/presentation'
import PresentationStructureSeineSaintDenis from 'views/Header/Sections/Departement/SeineSaintDenis/structures/structure/presentation'
import PresentationUspSeineSaintDenis from 'views/Header/Sections/Departement/SeineSaintDenis/structures/Usp/presentation'
import PresentationHadSeineSaintDenis from 'views/Header/Sections/Departement/SeineSaintDenis/structures/Team/presentation'
import Presentation_SEINESAINTDENIS_autres_structures from 'views/Header/Sections/Departement/SeineSaintDenis/structures/autres_structures/presentation'
import Presentation_SEINESAINTDENIS_Autres from 'views/Header/Sections/Departement/SeineSaintDenis/structures/autres/presentation'
// Hauts de Seine
import PresentationLitsHautsdeSeine from 'views/Header/Sections/Departement/HautsdeSeine/structures/lits/presentation'
import PresentationReseauxHautsdeSeine from 'views/Header/Sections/Departement/HautsdeSeine/structures/Reseaux/presentation'
import PresentationAssociationHautsdeSeine from 'views/Header/Sections/Departement/HautsdeSeine/structures/Association/presentation'
import PresentationStructureHautsdeSeine from 'views/Header/Sections/Departement/HautsdeSeine/structures/structure/presentation'
import PresentationUspHautsdeSeine from 'views/Header/Sections/Departement/HautsdeSeine/structures/Usp/presentation'
import PresentationHadHautsdeSeine from 'views/Header/Sections/Departement/HautsdeSeine/structures/Team/presentation'
import Presentation_HAUTSDESEINE_autres_structures from 'views/Header/Sections/Departement/HautsdeSeine/structures/autres_structures/presentation'
import Presentation_HAUTSDESEINE_Autres from 'views/Header/Sections/Departement/HautsdeSeine/structures/autres/presentation'
// Val d'Oise
import PresentationLitsValdOise from 'views/Header/Sections/Departement/ValdOise/structures/lits/presentation'
import PresentationReseauxValdOise from 'views/Header/Sections/Departement/ValdOise/structures/Reseaux/presentation'
import PresentationAssociationValdOise from 'views/Header/Sections/Departement/ValdOise/structures/Association/presentation'
import PresentationStructureValdOise from 'views/Header/Sections/Departement/ValdOise/structures/structure/presentation'
import PresentationUspValdOise from 'views/Header/Sections/Departement/ValdOise/structures/Usp/presentation'
import PresentationHadValdOise from 'views/Header/Sections/Departement/ValdOise/structures/Team/presentation'
import Presentation_VALDOISE_autres_structures from 'views/Header/Sections/Departement/ValdOise/structures/autres_structures/presentation'
import Presentation_VALDOISE_Autres from 'views/Header/Sections/Departement/ValdOise/structures/autres/presentation'
// Seine et Marne
import PresentationLitsSeineetMarne from 'views/Header/Sections/Departement/SeineetMarne/structures/lits/presentation'
import PresentationReseauxSeineetMarne from 'views/Header/Sections/Departement/SeineetMarne/structures/Reseaux/presentation'
import PresentationAssociationSeineetMarne from 'views/Header/Sections/Departement/SeineetMarne/structures/Association/presentation'
import PresentationStructureSeineetMarne from 'views/Header/Sections/Departement/SeineetMarne/structures/structure/presentation'
import PresentationUspSeineetMarne from 'views/Header/Sections/Departement/SeineetMarne/structures/Usp/presentation'
import PresentationHadSeineetMarne from 'views/Header/Sections/Departement/SeineetMarne/structures/Team/presentation'
import Presentation_SEINEETMARNE_autres_structures from 'views/Header/Sections/Departement/SeineetMarne/structures/autres_structures/presentation'
import Presentation_SEINEETMARNE_Autres from 'views/Header/Sections/Departement/SeineetMarne/structures/autres/presentation'
// Yvelines
import PresentationLitsYvelines from 'views/Header/Sections/Departement/Yvelines/structures/lits/presentation'
import PresentationReseauxYvelines from 'views/Header/Sections/Departement/Yvelines/structures/Reseaux/presentation'
import PresentationAssociationYvelines from 'views/Header/Sections/Departement/Yvelines/structures/Association/presentation'
import PresentationStructureYvelines from 'views/Header/Sections/Departement/Yvelines/structures/structure/presentation'
import PresentationUspYvelines from 'views/Header/Sections/Departement/Yvelines/structures/Usp/presentation'
import PresentationHadYvelines from 'views/Header/Sections/Departement/Yvelines/structures/Team/presentation'
import Presentation_YVELINES_autres_structures from 'views/Header/Sections/Departement/Yvelines/structures/autres_structures/presentation'
import Presentation_YVELINES_Autres from 'views/Header/Sections/Departement/Yvelines/structures/autres/presentation'
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
import ParisHAD from 'views/Admin/Home/Annuaire/Departements/Paris/Team/Paris'
import GetPARISHAD from 'views/Admin/Home/Annuaire/Departements/Paris/Team/get/get'
import PostPARISHAD from 'views/Admin/Home/Annuaire/Departements/Paris/Team/post/post'
import UpdatePARISHAD from 'views/Admin/Home/Annuaire/Departements/Paris/Team/update/Header'
import DeletePARISHAD from 'views/Admin/Home/Annuaire/Departements/Paris/Team/delete/PresentationDelete'
// ASSOCIATIONS BENEVOLES
import ParisASSOS from 'views/Admin/Home/Annuaire/Departements/Paris/ASSOS/Paris'
import GetPARISASSOS from 'views/Admin/Home/Annuaire/Departements/Paris/ASSOS/get/get'
import PostPARISASSOS from 'views/Admin/Home/Annuaire/Departements/Paris/ASSOS/post/post'
import UpdatePARISASSOS from 'views/Admin/Home/Annuaire/Departements/Paris/ASSOS/update/Header'
import DeletePARISASSOS from 'views/Admin/Home/Annuaire/Departements/Paris/ASSOS/delete/PresentationDelete'
// AUTRES
import Parisautres from 'views/Admin/Home/Annuaire/Departements/Paris/autres/Paris'
import GetParisautres from 'views/Admin/Home/Annuaire/Departements/Paris/autres/get/get'
import PostParisautres from 'views/Admin/Home/Annuaire/Departements/Paris/autres/post/post'
import UpdateParisautres from 'views/Admin/Home/Annuaire/Departements/Paris/autres/update/Header'
import DeleteParisautres from 'views/Admin/Home/Annuaire/Departements/Paris/autres/delete/PresentationDelete'
// AUTRES STRUCTURES
import Parisautres_structures from 'views/Admin/Home/Annuaire/Departements/Paris/autres_structures/Paris'
import GetParisautres_structures from 'views/Admin/Home/Annuaire/Departements/Paris/autres_structures/get/get'
import PostParisautres_structures from 'views/Admin/Home/Annuaire/Departements/Paris/autres_structures/post/post'
import UpdateParisautres_structures from 'views/Admin/Home/Annuaire/Departements/Paris/autres_structures/update/Header'
import DeleteParisautres_structures from 'views/Admin/Home/Annuaire/Departements/Paris/autres_structures/delete/PresentationDelete'

// HAUTS DE SEINE  ADMIN
// USP
import HautsdeSeine from 'views/Admin/Home/Annuaire/Departements/HAUTDESEINE/USP/HAUTDESEINE'
import GetUSPHAUTDESEINE from 'views/Admin/Home/Annuaire/Departements/HAUTDESEINE/USP/get/get'
import PostUSPHAUTDESEINE from 'views/Admin/Home/Annuaire/Departements/HAUTDESEINE/USP/post/post'
import UpdateUSPHAUTDESEINE from 'views/Admin/Home/Annuaire/Departements/HAUTDESEINE/USP/update/Header'
import DeleteUSPHAUTDESEINE from 'views/Admin/Home/Annuaire/Departements/HAUTDESEINE/USP/delete/PresentationDelete'
// RESEAUX
import HAUTDESEINERESEAUX from 'views/Admin/Home/Annuaire/Departements/HAUTDESEINE/RESEAUX/HAUTDESEINE'
import GetHAUTDESEINERESEAUX from 'views/Admin/Home/Annuaire/Departements/HAUTDESEINE/RESEAUX/get/get'
import PostHAUTDESEINERESEAUX from 'views/Admin/Home/Annuaire/Departements/HAUTDESEINE/RESEAUX/post/post'
import UpdateHAUTDESEINERESEAUX from 'views/Admin/Home/Annuaire/Departements/HAUTDESEINE/RESEAUX/update/Header'
import DeleteHAUTDESEINERESEAUX from 'views/Admin/Home/Annuaire/Departements/HAUTDESEINE/RESEAUX/delete/PresentationDelete'
// LITS IDENTIFIES
import HAUTDESEINELITS from 'views/Admin/Home/Annuaire/Departements/HAUTDESEINE/LITS/HAUTDESEINE'
import GetHAUTDESEINELITS from 'views/Admin/Home/Annuaire/Departements/HAUTDESEINE/LITS/get/get'
import PostHAUTDESEINELITS from 'views/Admin/Home/Annuaire/Departements/HAUTDESEINE/LITS/post/post'
import UpdateHAUTDESEINELITS from 'views/Admin/Home/Annuaire/Departements/HAUTDESEINE/LITS/update/Header'
import DeleteHAUTDESEINELITS from 'views/Admin/Home/Annuaire/Departements/HAUTDESEINE/LITS/delete/PresentationDelete'
// STRUCTURES
import HAUTDESEINESTRUCTURES from 'views/Admin/Home/Annuaire/Departements/HAUTDESEINE/STRUCTURES/HAUTDESEINE'
import GetHAUTDESEINESTRUCTURES from 'views/Admin/Home/Annuaire/Departements/HAUTDESEINE/STRUCTURES/get/get'
import PostHAUTDESEINESTRUCTURES from 'views/Admin/Home/Annuaire/Departements/HAUTDESEINE/STRUCTURES/post/post'
import UpdateHAUTDESEINESTRUCTURES from 'views/Admin/Home/Annuaire/Departements/HAUTDESEINE/STRUCTURES/update/Header'
import DeleteHAUTDESEINESTRUCTURES from 'views/Admin/Home/Annuaire/Departements/HAUTDESEINE/STRUCTURES/delete/PresentationDelete'
// HAD
import HAUTDESEINEHAD from 'views/Admin/Home/Annuaire/Departements/HAUTDESEINE/Team/HAUTDESEINE'
import GetHAUTDESEINEHAD from 'views/Admin/Home/Annuaire/Departements/HAUTDESEINE/Team/get/get'
import PostHAUTDESEINEHAD from 'views/Admin/Home/Annuaire/Departements/HAUTDESEINE/Team/post/post'
import UpdateHAUTDESEINEHAD from 'views/Admin/Home/Annuaire/Departements/HAUTDESEINE/Team/update/Header'
import DeleteHAUTDESEINEHAD from 'views/Admin/Home/Annuaire/Departements/HAUTDESEINE/Team/delete/PresentationDelete'
// ASSOCIATIONS BENEVOLES
import HAUTDESEINEASSOS from 'views/Admin/Home/Annuaire/Departements/HAUTDESEINE/ASSOS/HAUTDESEINE'
import GetHAUTDESEINEASSOS from 'views/Admin/Home/Annuaire/Departements/HAUTDESEINE/ASSOS/get/get'
import PostHAUTDESEINEASSOS from 'views/Admin/Home/Annuaire/Departements/HAUTDESEINE/ASSOS/post/post'
import UpdateHAUTDESEINEASSOS from 'views/Admin/Home/Annuaire/Departements/HAUTDESEINE/ASSOS/update/Header'
import DeleteHAUTDESEINEASSOS from 'views/Admin/Home/Annuaire/Departements/HAUTDESEINE/ASSOS/delete/PresentationDelete'
// AUTRES
import HAUTDESEINEautres from 'views/Admin/Home/Annuaire/Departements/HAUTDESEINE/autres/HAUTDESEINE'
import GetHAUTDESEINEautres from 'views/Admin/Home/Annuaire/Departements/HAUTDESEINE/autres/get/get'
import PostHAUTDESEINEautres from 'views/Admin/Home/Annuaire/Departements/HAUTDESEINE/autres/post/post'
import UpdateHAUTDESEINEautres from 'views/Admin/Home/Annuaire/Departements/HAUTDESEINE/autres/update/Header'
import DeleteHAUTDESEINEautres from 'views/Admin/Home/Annuaire/Departements/HAUTDESEINE/autres/delete/PresentationDelete'
// AUTRES STRUCTURES
import HAUTDESEINEautres_structures from 'views/Admin/Home/Annuaire/Departements/HAUTDESEINE/autres_structures/HAUTDESEINE'
import GetHAUTDESEINEautres_structures from 'views/Admin/Home/Annuaire/Departements/HAUTDESEINE/autres_structures/get/get'
import PostHAUTDESEINEautres_structures from 'views/Admin/Home/Annuaire/Departements/HAUTDESEINE/autres_structures/post/post'
import UpdateHAUTDESEINEautres_structures from 'views/Admin/Home/Annuaire/Departements/HAUTDESEINE/autres_structures/update/Header'
import DeleteHAUTDESEINEautres_structures from 'views/Admin/Home/Annuaire/Departements/HAUTDESEINE/autres_structures/delete/PresentationDelete'
// VAL DE MARNE  ADMIN
// USP
import VALDEMARNE from 'views/Admin/Home/Annuaire/Departements/VALDEMARNE/USP/VALDEMARNE'
import GetUSPVALDEMARNE from 'views/Admin/Home/Annuaire/Departements/VALDEMARNE/USP/get/get'
import PostUSPVALDEMARNE from 'views/Admin/Home/Annuaire/Departements/VALDEMARNE/USP/post/post'
import UpdateUSPVALDEMARNE from 'views/Admin/Home/Annuaire/Departements/VALDEMARNE/USP/update/Header'
import DeleteUSPVALDEMARNE from 'views/Admin/Home/Annuaire/Departements/VALDEMARNE/USP/delete/PresentationDelete'
// RESEAUX
import VALDEMARNERESEAUX from 'views/Admin/Home/Annuaire/Departements/VALDEMARNE/RESEAUX/VALDEMARNE'
import GetVALDEMARNERESEAUX from 'views/Admin/Home/Annuaire/Departements/VALDEMARNE/RESEAUX/get/get'
import PostVALDEMARNERESEAUX from 'views/Admin/Home/Annuaire/Departements/VALDEMARNE/RESEAUX/post/post'
import UpdateVALDEMARNERESEAUX from 'views/Admin/Home/Annuaire/Departements/VALDEMARNE/RESEAUX/update/Header'
import DeleteVALDEMARNERESEAUX from 'views/Admin/Home/Annuaire/Departements/VALDEMARNE/RESEAUX/delete/PresentationDelete'
// LITS IDENTIFIES
import VALDEMARNELITS from 'views/Admin/Home/Annuaire/Departements/VALDEMARNE/LITS/VALDEMARNE'
import GetVALDEMARNELITS from 'views/Admin/Home/Annuaire/Departements/VALDEMARNE/LITS/get/get'
import PostVALDEMARNELITS from 'views/Admin/Home/Annuaire/Departements/VALDEMARNE/LITS/post/post'
import UpdateVALDEMARNELITS from 'views/Admin/Home/Annuaire/Departements/VALDEMARNE/LITS/update/Header'
import DeleteVALDEMARNELITS from 'views/Admin/Home/Annuaire/Departements/VALDEMARNE/LITS/delete/PresentationDelete'
// STRUCTURES
import VALDEMARNETRUCTURES from 'views/Admin/Home/Annuaire/Departements/VALDEMARNE/STRUCTURES/VALDEMARNE'
import GetVALDEMARNESTRUCTURES from 'views/Admin/Home/Annuaire/Departements/VALDEMARNE/STRUCTURES/get/get'
import PostVALDEMARNESTRUCTURES from 'views/Admin/Home/Annuaire/Departements/VALDEMARNE/STRUCTURES/post/post'
import UpdateVALDEMARNESTRUCTURES from 'views/Admin/Home/Annuaire/Departements/VALDEMARNE/STRUCTURES/update/Header'
import DeleteVALDEMARNESTRUCTURES from 'views/Admin/Home/Annuaire/Departements/VALDEMARNE/STRUCTURES/delete/PresentationDelete'
// HAD
import VALDEMARNEHAD from 'views/Admin/Home/Annuaire/Departements/VALDEMARNE/Team/VALDEMARNE'
import GetVALDEMARNEHAD from 'views/Admin/Home/Annuaire/Departements/VALDEMARNE/Team/get/get'
import PostVALDEMARNEHAD from 'views/Admin/Home/Annuaire/Departements/VALDEMARNE/Team/post/post'
import UpdateVALDEMARNEHAD from 'views/Admin/Home/Annuaire/Departements/VALDEMARNE/Team/update/Header'
import DeleteVALDEMARNEHAD from 'views/Admin/Home/Annuaire/Departements/VALDEMARNE/Team/delete/PresentationDelete'
// ASSOCIATIONS BENEVOLES
import VALDEMARNEASSOS from 'views/Admin/Home/Annuaire/Departements/VALDEMARNE/ASSOS/VALDEMARNE'
import GetVALDEMARNEASSOS from 'views/Admin/Home/Annuaire/Departements/VALDEMARNE/ASSOS/get/get'
import PostVALDEMARNEASSOS from 'views/Admin/Home/Annuaire/Departements/VALDEMARNE/ASSOS/post/post'
import UpdateVALDEMARNEASSOS from 'views/Admin/Home/Annuaire/Departements/VALDEMARNE/ASSOS/update/Header'
import DeleteVALDEMARNEASSOS from 'views/Admin/Home/Annuaire/Departements/VALDEMARNE/ASSOS/delete/PresentationDelete'
// AUTRES
import VALDEMARNEautres from 'views/Admin/Home/Annuaire/Departements/VALDEMARNE/autres/VALDEMARNE'
import GetVALDEMARNEautres from 'views/Admin/Home/Annuaire/Departements/VALDEMARNE/autres/get/get'
import PostVALDEMARNEautres from 'views/Admin/Home/Annuaire/Departements/VALDEMARNE/autres/post/post'
import UpdateVALDEMARNEautres from 'views/Admin/Home/Annuaire/Departements/VALDEMARNE/autres/update/Header'
import DeleteVALDEMARNEautres from 'views/Admin/Home/Annuaire/Departements/VALDEMARNE/autres/delete/PresentationDelete'
// AUTRES STRUCTURES
import VALDEMARNEautres_structures from 'views/Admin/Home/Annuaire/Departements/VALDEMARNE/autres_structures/VALDEMARNE'
import GetVALDEMARNEautres_structures from 'views/Admin/Home/Annuaire/Departements/VALDEMARNE/autres_structures/get/get'
import PostVALDEMARNEautres_structures from 'views/Admin/Home/Annuaire/Departements/VALDEMARNE/autres_structures/post/post'
import UpdateVALDEMARNEautres_structures from 'views/Admin/Home/Annuaire/Departements/VALDEMARNE/autres_structures/update/Header'
import DeleteVALDEMARNEautres_structures from 'views/Admin/Home/Annuaire/Departements/VALDEMARNE/autres_structures/delete/PresentationDelete'
// SEINE SAINT DENIS  ADMIN
// USP
import SEINESAINTDENIS from 'views/Admin/Home/Annuaire/Departements/SEINESAINTDENIS/USP/SEINESAINTDENIS'
import GetUSPSEINESAINTDENIS from 'views/Admin/Home/Annuaire/Departements/SEINESAINTDENIS/USP/get/get'
import PostUSPSEINESAINTDENIS from 'views/Admin/Home/Annuaire/Departements/SEINESAINTDENIS/USP/post/post'
import UpdateUSPSEINESAINTDENIS from 'views/Admin/Home/Annuaire/Departements/SEINESAINTDENIS/USP/update/Header'
import DeleteUSPSEINESAINTDENIS from 'views/Admin/Home/Annuaire/Departements/SEINESAINTDENIS/USP/delete/PresentationDelete'
// RESEAUX
import SEINESAINTDENISRESEAUX from 'views/Admin/Home/Annuaire/Departements/SEINESAINTDENIS/RESEAUX/SEINESAINTDENIS'
import GetSEINESAINTDENISRESEAUX from 'views/Admin/Home/Annuaire/Departements/SEINESAINTDENIS/RESEAUX/get/get'
import PostSEINESAINTDENISRESEAUX from 'views/Admin/Home/Annuaire/Departements/SEINESAINTDENIS/RESEAUX/post/post'
import UpdateSEINESAINTDENISRESEAUX from 'views/Admin/Home/Annuaire/Departements/SEINESAINTDENIS/RESEAUX/update/Header'
import DeleteSEINESAINTDENISRESEAUX from 'views/Admin/Home/Annuaire/Departements/SEINESAINTDENIS/RESEAUX/delete/PresentationDelete'
// LITS IDENTIFIES
import SEINESAINTDENISLITS from 'views/Admin/Home/Annuaire/Departements/SEINESAINTDENIS/LITS/SEINESAINTDENIS'
import GetSEINESAINTDENISLITS from 'views/Admin/Home/Annuaire/Departements/SEINESAINTDENIS/LITS/get/get'
import PostSEINESAINTDENISLITS from 'views/Admin/Home/Annuaire/Departements/SEINESAINTDENIS/LITS/post/post'
import UpdateSEINESAINTDENISLITS from 'views/Admin/Home/Annuaire/Departements/SEINESAINTDENIS/LITS/update/Header'
import DeleteSEINESAINTDENISLITS from 'views/Admin/Home/Annuaire/Departements/SEINESAINTDENIS/LITS/delete/PresentationDelete'
// STRUCTURES
import SEINESAINTDENISTRUCTURES from 'views/Admin/Home/Annuaire/Departements/SEINESAINTDENIS/STRUCTURES/SEINESAINTDENIS'
import GetSEINESAINTDENISSTRUCTURES from 'views/Admin/Home/Annuaire/Departements/SEINESAINTDENIS/STRUCTURES/get/get'
import PostSEINESAINTDENISSTRUCTURES from 'views/Admin/Home/Annuaire/Departements/SEINESAINTDENIS/STRUCTURES/post/post'
import UpdateSEINESAINTDENISSTRUCTURES from 'views/Admin/Home/Annuaire/Departements/SEINESAINTDENIS/STRUCTURES/update/Header'
import DeleteSEINESAINTDENISSTRUCTURES from 'views/Admin/Home/Annuaire/Departements/SEINESAINTDENIS/STRUCTURES/delete/PresentationDelete'
// HAD
import SEINESAINTDENISHAD from 'views/Admin/Home/Annuaire/Departements/SEINESAINTDENIS/Team/SEINESAINTDENIS'
import GetSEINESAINTDENISHAD from 'views/Admin/Home/Annuaire/Departements/SEINESAINTDENIS/Team/get/get'
import PostSEINESAINTDENISHAD from 'views/Admin/Home/Annuaire/Departements/SEINESAINTDENIS/Team/post/post'
import UpdateSEINESAINTDENISHAD from 'views/Admin/Home/Annuaire/Departements/SEINESAINTDENIS/Team/update/Header'
import DeleteSEINESAINTDENISHAD from 'views/Admin/Home/Annuaire/Departements/SEINESAINTDENIS/Team/delete/PresentationDelete'
// ASSOCIATIONS BENEVOLES
import SEINESAINTDENISASSOS from 'views/Admin/Home/Annuaire/Departements/SEINESAINTDENIS/ASSOS/SEINESAINTDENIS'
import GetSEINESAINTDENISASSOS from 'views/Admin/Home/Annuaire/Departements/SEINESAINTDENIS/ASSOS/get/get'
import PostSEINESAINTDENISASSOS from 'views/Admin/Home/Annuaire/Departements/SEINESAINTDENIS/ASSOS/post/post'
import UpdateSEINESAINTDENISASSOS from 'views/Admin/Home/Annuaire/Departements/SEINESAINTDENIS/ASSOS/update/Header'
import DeleteSEINESAINTDENISASSOS from 'views/Admin/Home/Annuaire/Departements/SEINESAINTDENIS/ASSOS/delete/PresentationDelete'
// AUTRES
import SEINESAINTDENISautres from 'views/Admin/Home/Annuaire/Departements/SEINESAINTDENIS/autres/SEINESAINTDENIS'
import GetSEINESAINTDENISautres from 'views/Admin/Home/Annuaire/Departements/SEINESAINTDENIS/autres/get/get'
import PostSEINESAINTDENISautres from 'views/Admin/Home/Annuaire/Departements/SEINESAINTDENIS/autres/post/post'
import UpdateSEINESAINTDENISautres from 'views/Admin/Home/Annuaire/Departements/SEINESAINTDENIS/autres/update/Header'
import DeleteSEINESAINTDENISautres from 'views/Admin/Home/Annuaire/Departements/SEINESAINTDENIS/autres/delete/PresentationDelete'
// AUTRES STRUCTURES
import SEINESAINTDENISautres_structures from 'views/Admin/Home/Annuaire/Departements/SEINESAINTDENIS/autres_structures/SEINESAINTDENIS'
import GetSEINESAINTDENISautres_structures from 'views/Admin/Home/Annuaire/Departements/SEINESAINTDENIS/autres_structures/get/get'
import PostSEINESAINTDENISautres_structures from 'views/Admin/Home/Annuaire/Departements/SEINESAINTDENIS/autres_structures/post/post'
import UpdateSEINESAINTDENISautres_structures from 'views/Admin/Home/Annuaire/Departements/SEINESAINTDENIS/autres_structures/update/Header'
import DeleteSEINESAINTDENISautres_structures from 'views/Admin/Home/Annuaire/Departements/SEINESAINTDENIS/autres_structures/delete/PresentationDelete'
// SEINE ET MARNE  ADMIN
// USP
import SEINEETMARNE from 'views/Admin/Home/Annuaire/Departements/SEINEETMARNE/USP/SEINEETMARNE'
import GetUSPSEINEETMARNE from 'views/Admin/Home/Annuaire/Departements/SEINEETMARNE/USP/get/get'
import PostUSPSEINEETMARNE from 'views/Admin/Home/Annuaire/Departements/SEINEETMARNE/USP/post/post'
import UpdateUSPSEINEETMARNE from 'views/Admin/Home/Annuaire/Departements/SEINEETMARNE/USP/update/Header'
import DeleteUSPSEINEETMARNE from 'views/Admin/Home/Annuaire/Departements/SEINEETMARNE/USP/delete/PresentationDelete'
// RESEAUX
import SEINEETMARNERESEAUX from 'views/Admin/Home/Annuaire/Departements/SEINEETMARNE/RESEAUX/SEINEETMARNE'
import GetSEINEETMARNERESEAUX from 'views/Admin/Home/Annuaire/Departements/SEINEETMARNE/RESEAUX/get/get'
import PostSEINEETMARNERESEAUX from 'views/Admin/Home/Annuaire/Departements/SEINEETMARNE/RESEAUX/post/post'
import UpdateSEINEETMARNERESEAUX from 'views/Admin/Home/Annuaire/Departements/SEINEETMARNE/RESEAUX/update/Header'
import DeleteSEINEETMARNERESEAUX from 'views/Admin/Home/Annuaire/Departements/SEINEETMARNE/RESEAUX/delete/PresentationDelete'
// LITS IDENTIFIES
import SEINEETMARNELITS from 'views/Admin/Home/Annuaire/Departements/SEINEETMARNE/LITS/SEINEETMARNE'
import GetSEINEETMARNELITS from 'views/Admin/Home/Annuaire/Departements/SEINEETMARNE/LITS/get/get'
import PostSEINEETMARNELITS from 'views/Admin/Home/Annuaire/Departements/SEINEETMARNE/LITS/post/post'
import UpdateSEINEETMARNELITS from 'views/Admin/Home/Annuaire/Departements/SEINEETMARNE/LITS/update/Header'
import DeleteSEINEETMARNELITS from 'views/Admin/Home/Annuaire/Departements/SEINEETMARNE/LITS/delete/PresentationDelete'
// STRUCTURES
import SEINEETMARNETRUCTURES from 'views/Admin/Home/Annuaire/Departements/SEINEETMARNE/STRUCTURES/SEINEETMARNE'
import GetSEINEETMARNESTRUCTURES from 'views/Admin/Home/Annuaire/Departements/SEINEETMARNE/STRUCTURES/get/get'
import PostSEINEETMARNESTRUCTURES from 'views/Admin/Home/Annuaire/Departements/SEINEETMARNE/STRUCTURES/post/post'
import UpdateSEINEETMARNESTRUCTURES from 'views/Admin/Home/Annuaire/Departements/SEINEETMARNE/STRUCTURES/update/Header'
import DeleteSEINEETMARNESTRUCTURES from 'views/Admin/Home/Annuaire/Departements/SEINEETMARNE/STRUCTURES/delete/PresentationDelete'
// HAD
import SEINEETMARNEHAD from 'views/Admin/Home/Annuaire/Departements/SEINEETMARNE/Team/SEINEETMARNE'
import GetSEINEETMARNEHAD from 'views/Admin/Home/Annuaire/Departements/SEINEETMARNE/Team/get/get'
import PostSEINEETMARNEHAD from 'views/Admin/Home/Annuaire/Departements/SEINEETMARNE/Team/post/post'
import UpdateSEINEETMARNEHAD from 'views/Admin/Home/Annuaire/Departements/SEINEETMARNE/Team/update/Header'
import DeleteSEINEETMARNEHAD from 'views/Admin/Home/Annuaire/Departements/SEINEETMARNE/Team/delete/PresentationDelete'
// ASSOCIATIONS BENEVOLES
import SEINEETMARNEASSOS from 'views/Admin/Home/Annuaire/Departements/SEINEETMARNE/ASSOS/SEINEETMARNE'
import GetSEINEETMARNEASSOS from 'views/Admin/Home/Annuaire/Departements/SEINEETMARNE/ASSOS/get/get'
import PostSEINEETMARNEASSOS from 'views/Admin/Home/Annuaire/Departements/SEINEETMARNE/ASSOS/post/post'
import UpdateSEINEETMARNEASSOS from 'views/Admin/Home/Annuaire/Departements/SEINEETMARNE/ASSOS/update/Header'
import DeleteSEINEETMARNEASSOS from 'views/Admin/Home/Annuaire/Departements/SEINEETMARNE/ASSOS/delete/PresentationDelete'
// AUTRES
import SEINEETMARNEautres from 'views/Admin/Home/Annuaire/Departements/SEINEETMARNE/autres/SEINEETMARNE'
import GetSEINEETMARNEautres from 'views/Admin/Home/Annuaire/Departements/SEINEETMARNE/autres/get/get'
import PostSEINEETMARNEautres from 'views/Admin/Home/Annuaire/Departements/SEINEETMARNE/autres/post/post'
import UpdateSEINEETMARNEautres from 'views/Admin/Home/Annuaire/Departements/SEINEETMARNE/autres/update/Header'
import DeleteSEINEETMARNEautres from 'views/Admin/Home/Annuaire/Departements/SEINEETMARNE/autres/delete/PresentationDelete'
// AUTRES STRUCTURES
import SEINEETMARNEautres_structures from 'views/Admin/Home/Annuaire/Departements/SEINEETMARNE/autres_structures/SEINEETMARNE'
import GetSEINEETMARNEautres_structures from 'views/Admin/Home/Annuaire/Departements/SEINEETMARNE/autres_structures/get/get'
import PostSEINEETMARNEautres_structures from 'views/Admin/Home/Annuaire/Departements/SEINEETMARNE/autres_structures/post/post'
import UpdateSEINEETMARNEautres_structures from 'views/Admin/Home/Annuaire/Departements/SEINEETMARNE/autres_structures/update/Header'
import DeleteSEINEETMARNEautres_structures from 'views/Admin/Home/Annuaire/Departements/SEINEETMARNE/autres_structures/delete/PresentationDelete'

// ESSONNE  ADMIN
// USP

import ESSONNE from 'views/Admin/Home/Annuaire/Departements/ESSONNE/USP/ESSONNE'
import GetUSPESSONNE from 'views/Admin/Home/Annuaire/Departements/ESSONNE/USP/get/get'
import PostUSPESSONNE from 'views/Admin/Home/Annuaire/Departements/ESSONNE/USP/post/post'
import UpdateUSPESSONNE from 'views/Admin/Home/Annuaire/Departements/ESSONNE/USP/update/Header'
import DeleteUSPESSONNE from 'views/Admin/Home/Annuaire/Departements/ESSONNE/USP/delete/PresentationDelete'
// RESEAUX
import ESSONNERESEAUX from 'views/Admin/Home/Annuaire/Departements/ESSONNE/RESEAUX/ESSONNE'
import GetESSONNERESEAUX from 'views/Admin/Home/Annuaire/Departements/ESSONNE/RESEAUX/get/get'
import PostESSONNERESEAUX from 'views/Admin/Home/Annuaire/Departements/ESSONNE/RESEAUX/post/post'
import UpdateESSONNERESEAUX from 'views/Admin/Home/Annuaire/Departements/ESSONNE/RESEAUX/update/Header'
import DeleteESSONNERESEAUX from 'views/Admin/Home/Annuaire/Departements/ESSONNE/RESEAUX/delete/PresentationDelete'
// LITS IDENTIFIES
import ESSONNELITS from 'views/Admin/Home/Annuaire/Departements/ESSONNE/LITS/ESSONNE'
import GetESSONNELITS from 'views/Admin/Home/Annuaire/Departements/ESSONNE/LITS/get/get'
import PostESSONNELITS from 'views/Admin/Home/Annuaire/Departements/ESSONNE/LITS/post/post'
import UpdateESSONNELITS from 'views/Admin/Home/Annuaire/Departements/ESSONNE/LITS/update/Header'
import DeleteESSONNELITS from 'views/Admin/Home/Annuaire/Departements/ESSONNE/LITS/delete/PresentationDelete'
// AUTRES
import ESSONNEautres from 'views/Admin/Home/Annuaire/Departements/ESSONNE/autres/ESSONNE'
import GetESSONNEautres from 'views/Admin/Home/Annuaire/Departements/ESSONNE/autres/get/get'
import PostESSONNEautres from 'views/Admin/Home/Annuaire/Departements/ESSONNE/autres/post/post'
import UpdateESSONNEautres from 'views/Admin/Home/Annuaire/Departements/ESSONNE/autres/update/Header'
import DeleteESSONNEautres from 'views/Admin/Home/Annuaire/Departements/ESSONNE/autres/delete/PresentationDelete'
// AUTRES STRUCTURES
import ESSONNEautres_structures from 'views/Admin/Home/Annuaire/Departements/ESSONNE/autres_structures/ESSONNE'
import GetESSONNEautres_structures from 'views/Admin/Home/Annuaire/Departements/ESSONNE/autres_structures/get/get'
import PostESSONNEautres_structures from 'views/Admin/Home/Annuaire/Departements/ESSONNE/autres_structures/post/post'
import UpdateESSONNEautres_structures from 'views/Admin/Home/Annuaire/Departements/ESSONNE/autres_structures/update/Header'
import DeleteESSONNEautres_structures from 'views/Admin/Home/Annuaire/Departements/ESSONNE/autres_structures/delete/PresentationDelete'
// STRUCTURES
import ESSONNETRUCTURES from 'views/Admin/Home/Annuaire/Departements/ESSONNE/STRUCTURES/ESSONNE'
import GetESSONNESTRUCTURES from 'views/Admin/Home/Annuaire/Departements/ESSONNE/STRUCTURES/get/get'
import PostESSONNESTRUCTURES from 'views/Admin/Home/Annuaire/Departements/ESSONNE/STRUCTURES/post/post'
import UpdateESSONNESTRUCTURES from 'views/Admin/Home/Annuaire/Departements/ESSONNE/STRUCTURES/update/Header'
import DeleteESSONNESTRUCTURES from 'views/Admin/Home/Annuaire/Departements/ESSONNE/STRUCTURES/delete/PresentationDelete'
// HAD
import ESSONNEHAD from 'views/Admin/Home/Annuaire/Departements/ESSONNE/Team/ESSONNE'
import GetESSONNEHAD from 'views/Admin/Home/Annuaire/Departements/ESSONNE/Team/get/get'
import PostESSONNEHAD from 'views/Admin/Home/Annuaire/Departements/ESSONNE/Team/post/post'
import UpdateESSONNEHAD from 'views/Admin/Home/Annuaire/Departements/ESSONNE/Team/update/Header'
import DeleteESSONNEHAD from 'views/Admin/Home/Annuaire/Departements/ESSONNE/Team/delete/PresentationDelete'
// ASSOCIATIONS BENEVOLES
import ESSONNEASSOS from 'views/Admin/Home/Annuaire/Departements/ESSONNE/ASSOS/ESSONNE'
import GetESSONNEASSOS from 'views/Admin/Home/Annuaire/Departements/ESSONNE/ASSOS/get/get'
import PostESSONNEASSOS from 'views/Admin/Home/Annuaire/Departements/ESSONNE/ASSOS/post/post'
import UpdateESSONNEASSOS from 'views/Admin/Home/Annuaire/Departements/ESSONNE/ASSOS/update/Header'
import DeleteESSONNEASSOS from 'views/Admin/Home/Annuaire/Departements/ESSONNE/ASSOS/delete/PresentationDelete'
// YVELINES  ADMIN
// USP
import YVELINES from 'views/Admin/Home/Annuaire/Departements/YVELINES/USP/YVELINES'
import GetUSPYVELINES from 'views/Admin/Home/Annuaire/Departements/YVELINES/USP/get/get'
import PostUSPYVELINES from 'views/Admin/Home/Annuaire/Departements/YVELINES/USP/post/post'
import UpdateUSPYVELINES from 'views/Admin/Home/Annuaire/Departements/YVELINES/USP/update/Header'
import DeleteUSPYVELINES from 'views/Admin/Home/Annuaire/Departements/YVELINES/USP/delete/PresentationDelete'
// RESEAUX
import YVELINESRESEAUX from 'views/Admin/Home/Annuaire/Departements/YVELINES/RESEAUX/YVELINES'
import GetYVELINESRESEAUX from 'views/Admin/Home/Annuaire/Departements/YVELINES/RESEAUX/get/get'
import PostYVELINESRESEAUX from 'views/Admin/Home/Annuaire/Departements/YVELINES/RESEAUX/post/post'
import UpdateYVELINESRESEAUX from 'views/Admin/Home/Annuaire/Departements/YVELINES/RESEAUX/update/Header'
import DeleteYVELINESRESEAUX from 'views/Admin/Home/Annuaire/Departements/YVELINES/RESEAUX/delete/PresentationDelete'
// LITS IDENTIFIES
import YVELINESLITS from 'views/Admin/Home/Annuaire/Departements/YVELINES/LITS/YVELINES'
import GetYVELINESLITS from 'views/Admin/Home/Annuaire/Departements/YVELINES/LITS/get/get'
import PostYVELINESLITS from 'views/Admin/Home/Annuaire/Departements/YVELINES/LITS/post/post'
import UpdateYVELINESLITS from 'views/Admin/Home/Annuaire/Departements/YVELINES/LITS/update/Header'
import DeleteYVELINESLITS from 'views/Admin/Home/Annuaire/Departements/YVELINES/LITS/delete/PresentationDelete'
// STRUCTURES
import YVELINESTRUCTURES from 'views/Admin/Home/Annuaire/Departements/YVELINES/STRUCTURES/YVELINES'
import GetYVELINESSTRUCTURES from 'views/Admin/Home/Annuaire/Departements/YVELINES/STRUCTURES/get/get'
import PostYVELINESSTRUCTURES from 'views/Admin/Home/Annuaire/Departements/YVELINES/STRUCTURES/post/post'
import UpdateYVELINESSTRUCTURES from 'views/Admin/Home/Annuaire/Departements/YVELINES/STRUCTURES/update/Header'
import DeleteYVELINESSTRUCTURES from 'views/Admin/Home/Annuaire/Departements/YVELINES/STRUCTURES/delete/PresentationDelete'
// HAD
import YVELINESHAD from 'views/Admin/Home/Annuaire/Departements/YVELINES/Team/YVELINES'
import GetYVELINESHAD from 'views/Admin/Home/Annuaire/Departements/YVELINES/Team/get/get'
import PostYVELINESHAD from 'views/Admin/Home/Annuaire/Departements/YVELINES/Team/post/post'
import UpdateYVELINESHAD from 'views/Admin/Home/Annuaire/Departements/YVELINES/Team/update/Header'
import DeleteYVELINESHAD from 'views/Admin/Home/Annuaire/Departements/YVELINES/Team/delete/PresentationDelete'
// ASSOCIATIONS BENEVOLES
import YVELINESASSOS from 'views/Admin/Home/Annuaire/Departements/YVELINES/ASSOS/YVELINES'
import GetYVELINESASSOS from 'views/Admin/Home/Annuaire/Departements/YVELINES/ASSOS/get/get'
import PostYVELINESASSOS from 'views/Admin/Home/Annuaire/Departements/YVELINES/ASSOS/post/post'
import UpdateYVELINESASSOS from 'views/Admin/Home/Annuaire/Departements/YVELINES/ASSOS/update/Header'
import DeleteYVELINESASSOS from 'views/Admin/Home/Annuaire/Departements/YVELINES/ASSOS/delete/PresentationDelete'
// AUTRES
import YVELINESautres from 'views/Admin/Home/Annuaire/Departements/YVELINES/autres/YVELINES'
import GetYVELINESautres from 'views/Admin/Home/Annuaire/Departements/YVELINES/autres/get/get'
import PostYVELINESautres from 'views/Admin/Home/Annuaire/Departements/YVELINES/autres/post/post'
import UpdateYVELINESautres from 'views/Admin/Home/Annuaire/Departements/YVELINES/autres/update/Header'
import DeleteYVELINESautres from 'views/Admin/Home/Annuaire/Departements/YVELINES/autres/delete/PresentationDelete'
// AUTRES STRUCTURES
import YVELINESautres_structures from 'views/Admin/Home/Annuaire/Departements/YVELINES/autres_structures/YVELINES'
import GetYVELINESautres_structures from 'views/Admin/Home/Annuaire/Departements/YVELINES/autres_structures/get/get'
import PostYVELINESautres_structures from 'views/Admin/Home/Annuaire/Departements/YVELINES/autres_structures/post/post'
import UpdateYVELINESautres_structures from 'views/Admin/Home/Annuaire/Departements/YVELINES/autres_structures/update/Header'
import DeleteYVELINESautres_structures from 'views/Admin/Home/Annuaire/Departements/YVELINES/autres_structures/delete/PresentationDelete'

// VAL D'OISE  ADMIN
// USP
import VALDOISE from 'views/Admin/Home/Annuaire/Departements/VALDOISE/USP/VALDOISE'
import GetUSPVALDOISE from 'views/Admin/Home/Annuaire/Departements/VALDOISE/USP/get/get'
import PostUSPVALDOISE from 'views/Admin/Home/Annuaire/Departements/VALDOISE/USP/post/post'
import UpdateUSPVALDOISE from 'views/Admin/Home/Annuaire/Departements/VALDOISE/USP/update/Header'
import DeleteUSPVALDOISE from 'views/Admin/Home/Annuaire/Departements/VALDOISE/USP/delete/PresentationDelete'
// RESEAUX
import VALDOISERESEAUX from 'views/Admin/Home/Annuaire/Departements/VALDOISE/RESEAUX/VALDOISE'
import GetVALDOISERESEAUX from 'views/Admin/Home/Annuaire/Departements/VALDOISE/RESEAUX/get/get'
import PostVALDOISERESEAUX from 'views/Admin/Home/Annuaire/Departements/VALDOISE/RESEAUX/post/post'
import UpdateVALDOISERESEAUX from 'views/Admin/Home/Annuaire/Departements/VALDOISE/RESEAUX/update/Header'
import DeleteVALDOISERESEAUX from 'views/Admin/Home/Annuaire/Departements/VALDOISE/RESEAUX/delete/PresentationDelete'
// LITS IDENTIFIES
import VALDOISELITS from 'views/Admin/Home/Annuaire/Departements/VALDOISE/LITS/VALDOISE'
import GetVALDOISELITS from 'views/Admin/Home/Annuaire/Departements/VALDOISE/LITS/get/get'
import PostVALDOISELITS from 'views/Admin/Home/Annuaire/Departements/VALDOISE/LITS/post/post'
import UpdateVALDOISELITS from 'views/Admin/Home/Annuaire/Departements/VALDOISE/LITS/update/Header'
import DeleteVALDOISELITS from 'views/Admin/Home/Annuaire/Departements/VALDOISE/LITS/delete/PresentationDelete'
// STRUCTURES
import VALDOISETRUCTURES from 'views/Admin/Home/Annuaire/Departements/VALDOISE/STRUCTURES/VALDOISE'
import GetVALDOISESTRUCTURES from 'views/Admin/Home/Annuaire/Departements/VALDOISE/STRUCTURES/get/get'
import PostVALDOISESTRUCTURES from 'views/Admin/Home/Annuaire/Departements/VALDOISE/STRUCTURES/post/post'
import UpdateVALDOISESTRUCTURES from 'views/Admin/Home/Annuaire/Departements/VALDOISE/STRUCTURES/update/Header'
import DeleteVALDOISESTRUCTURES from 'views/Admin/Home/Annuaire/Departements/VALDOISE/STRUCTURES/delete/PresentationDelete'
// HAD
import VALDOISEHAD from 'views/Admin/Home/Annuaire/Departements/VALDOISE/Team/VALDOISE'
import GetVALDOISEHAD from 'views/Admin/Home/Annuaire/Departements/VALDOISE/Team/get/get'
import PostVALDOISEHAD from 'views/Admin/Home/Annuaire/Departements/VALDOISE/Team/post/post'
import UpdateVALDOISEHAD from 'views/Admin/Home/Annuaire/Departements/VALDOISE/Team/update/Header'
import DeleteVALDOISEHAD from 'views/Admin/Home/Annuaire/Departements/VALDOISE/Team/delete/PresentationDelete'
// ASSOCIATIONS BENEVOLES
import VALDOISEASSOS from 'views/Admin/Home/Annuaire/Departements/VALDOISE/ASSOS/VALDOISE'
import GetVALDOISEASSOS from 'views/Admin/Home/Annuaire/Departements/VALDOISE/ASSOS/get/get'
import PostVALDOISEASSOS from 'views/Admin/Home/Annuaire/Departements/VALDOISE/ASSOS/post/post'
import UpdateVALDOISEASSOS from 'views/Admin/Home/Annuaire/Departements/VALDOISE/ASSOS/update/Header'
import DeleteVALDOISEASSOS from 'views/Admin/Home/Annuaire/Departements/VALDOISE/ASSOS/delete/PresentationDelete'
// AUTRES
import VALDOISEautres from 'views/Admin/Home/Annuaire/Departements/VALDOISE/autres/VALDOISE'
import GetVALDOISEautres from 'views/Admin/Home/Annuaire/Departements/VALDOISE/autres/get/get'
import PostVALDOISEautres from 'views/Admin/Home/Annuaire/Departements/VALDOISE/autres/post/post'
import UpdateVALDOISEautres from 'views/Admin/Home/Annuaire/Departements/VALDOISE/autres/update/Header'
import DeleteVALDOISEautres from 'views/Admin/Home/Annuaire/Departements/VALDOISE/autres/delete/PresentationDelete'
// AUTRES STRUCTURES
import VALDOISEautres_structures from 'views/Admin/Home/Annuaire/Departements/VALDOISE/autres_structures/VALDOISE'
import GetVALDOISEautres_structures from 'views/Admin/Home/Annuaire/Departements/VALDOISE/autres_structures/get/get'
import PostVALDOISEautres_structures from 'views/Admin/Home/Annuaire/Departements/VALDOISE/autres_structures/post/post'
import UpdateVALDOISEautres_structures from 'views/Admin/Home/Annuaire/Departements/VALDOISE/autres_structures/update/Header'
import DeleteVALDOISEautres_structures from 'views/Admin/Home/Annuaire/Departements/VALDOISE/autres_structures/delete/PresentationDelete'
// MENU
// COORDINATION REGIONALE
import CorpalifPage from 'views/Menu/coordinationregionale/corpalif/corpalif.js'
import OrientationPage from 'views/Menu/coordinationregionale/orientation/orientation.js'
import AdhererPage from 'views/Menu/coordinationregionale/adherer/adherer.js'
// SOINS PALLIATIFS
//DEMARCHE PALLIATIVE
import DemarchePalliatifPage from 'views/Menu/soinspalliatifs/demarchepalliative/DemarchePalliatifPage.js'

// LEGISLATION
import LegislationPage from 'views/Menu/soinspalliatifs/legislation/LegislationPage.js'
// ACCOMPAGNER SON PROCHE
import AccompagnementRecommandation from 'views/Menu/soinspalliatifs/accompagnement/AccompagnementRecommandation.js'

// VEILLE MEDICALE
// RECOMMANDATIONS & OUTILS
import PresentationRecommandation from 'views/Menu/VeilleMedicale/Recommandations/Section/getData/recommandation&outils.jsx'
// import GetRecommandation from 'views/Menu/VeilleMedicale/Recommandations/get'
import Recommandation_id from 'views/Menu/VeilleMedicale/Recommandations/Section/get_id/get_id.js'
// EVENEMENTS

import PresentationEvenement from 'views/Menu/VeilleMedicale/evenements/getData/evenements.jsx'

// OFFRES D'EMPLOIS & FORMATIONS
import PresentationEmploi from 'views/Menu/offresdemploi/offres/getData/offres.jsx'
import PresentationFormation from 'views/Menu/formations/getData/formations.jsx'
// NOS RENCONTRES
import PresentationInfoSubscribers from 'views/Menu/VeilleMedicale/rencontres/Subscribers/PresentationInfoSubscribers.jsx'
import PresentationRencontre from 'views/Menu/VeilleMedicale/rencontres/getData/rencontres.jsx'

// ACTUALITES
import PresentationActualite from 'views/Menu/VeilleMedicale/actualites/getData/actualites.jsx'

// Adherent

import PaymentPage from 'views/Adherent/individuel/PaymentPage'
import PaymentPage50euros from 'views/Adherent/collectif/PaymentPage50euros'
//Admin
// COORDINATION REGIONALE
// page Admin
import CoordinationPage from 'views/Admin/Menu/coordinationregionale/presentation'
import SoinsPalliatifPage from 'views/Admin/Menu/soinspalliatifs/presentation'

// ADHERENTS
import OrientationAdminPage from 'views/Admin/Menu/coordinationregionale/orientation/orientation'
import AdhererAdminPage from 'views/Admin/Menu/coordinationregionale/adherer/adherer'
import CorpalifAdminPage from 'views/Admin/Menu/coordinationregionale/corpalif/corpalif'
import UpdateAdherer from 'views/Admin/Menu/coordinationregionale/adherer/update/Header'
// CORPALIF
import updateCorpalif from 'views/Admin/Menu/coordinationregionale/corpalif/update/Header'
// ORIENTATION
import UpdateOrientation from 'views/Admin/Menu/coordinationregionale/orientation/update/Header'
// SOINS PALLIATIFS

// LEGISLATION
import LegislationDemarche from 'views/Admin/Menu/soinspalliatifs/legislation/update/Header'
import LegislationAdminPage from 'views/Admin/Menu/soinspalliatifs/legislation/legislation'
// DEMARCHE
import UpdateDemarche from 'views/Admin/Menu/soinspalliatifs/demarche/update/Header'
import DemarchePalliatifAdminPage from 'views/Admin/Menu/soinspalliatifs/demarche/demarche'
//ACCOMPAGNEMENT
import UpdateAccompagnement from 'views/Admin/Menu/soinspalliatifs/accompagnement/update/Header'
import AccompagnementAdminPage from 'views/Admin/Menu/soinspalliatifs/accompagnement/accompagnement'
// VEILLE MEDICALE
// RECOMMANDATIONS & OUTILS
import Recommandation from 'views/Admin/Menu/VeilleMedicale/recommandation&outils/getData/recommandation&outils.jsx'
import DeleteOneRecommandation from 'views/Admin/Menu/VeilleMedicale/recommandation&outils/delete/PresentationDelete'
import UpdateRecommandations from 'views/Admin/Menu/VeilleMedicale/recommandation&outils/update/Header'
import PostRecommandations from 'views/Admin/Menu/VeilleMedicale/recommandation&outils/post/Header'

// EVENEMENTS
import Evenement from 'views/Admin/Menu/VeilleMedicale/evenement/getData/evenements.jsx'
import DeleteOneEvenement from 'views/Admin/Menu/VeilleMedicale/evenement/delete/PresentationDelete'
import UpdateEvenement from 'views/Admin/Menu/VeilleMedicale/evenement/update/Header'
import PostEvenement from 'views/Admin/Menu/VeilleMedicale/evenement/post/Header'
// RENCONTRES
import Rencontre from 'views/Admin/Menu/VeilleMedicale/rencontre/getData/rencontres.jsx'
import DeleteOneRencontre from 'views/Admin/Menu/VeilleMedicale/rencontre/delete/PresentationDelete'
import UpdateRencontre from 'views/Admin/Menu/VeilleMedicale/rencontre/update/Header'
import PostRencontre from 'views/Admin/Menu/VeilleMedicale/rencontre/post/Header'
// RENCONTRES_INSCRIT CONTENU PRIVE
import Rencontre_inscrit from 'views/Admin/Menu/VeilleMedicale/rencontre_inscrit/getData/rencontres.jsx'
import DeleteOneRencontre_inscrit from 'views/Admin/Menu/VeilleMedicale/rencontre_inscrit/delete/PresentationDelete'
import UpdateRencontre_inscrit from 'views/Admin/Menu/VeilleMedicale/rencontre_inscrit/update/Header'
import PostRencontre_inscrit from 'views/Admin/Menu/VeilleMedicale/rencontre_inscrit/post/Header'
// ACTUALITE
import Actualite from 'views/Admin/Menu/VeilleMedicale/actualite/getData/actualites.jsx'
import DeleteOneActualite from 'views/Admin/Menu/VeilleMedicale/actualite/delete/PresentationDelete'
import UpdateActualite from 'views/Admin/Menu/VeilleMedicale/actualite/update/Header'
import PostActualite from 'views/Admin/Menu/VeilleMedicale/actualite/post/Header'
// EMPLOI - FORMATIONS
// EMPLOI
import OffreEmploi from 'views/Admin/Menu/offres&emplois/offres/getData/offres.jsx'
import DeleteOneOffre from 'views/Admin/Menu/offres&emplois/offres/delete/PresentationDelete'
import UpdateOffres from 'views/Admin/Menu/offres&emplois/offres/update/Header'
import PostOffres from 'views/Admin/Menu/offres&emplois/offres/post/Header'
//  FORMATIONS
import Formation from 'views/Admin/Menu/offres&emplois/formations/getData/formations.jsx'
import DeleteOneFormations from 'views/Admin/Menu/offres&emplois/formations/delete/PresentationDelete'
import UpdateFormations from 'views/Admin/Menu/offres&emplois/formations/update/Header'
import PostFormation from 'views/Admin/Menu/offres&emplois/formations/post/Header'
// USERS // ALL PROFILES // NEWSLETTER // ALL ADHERENTS // STATUS
import SectionProfilesAll from 'views/Admin/users/all/allprofiles'
import SectionProfilesAdherent from 'views/Admin/users/adherents/allAdherentsprofiles'
import SectionProfilesNewsletter from 'views/Admin/users/newsletter/allNewslettersprofiles'
import SectionProfilesCollectif from 'views/Admin/users/collectifs/allAdherentsprofiles'
import SectionProfilesIndividuel from 'views/Admin/users/individuels/allAdherentsprofiles'

// HomePage
// Caroussel1

import HomePageAdminHome from 'views/Admin/Home/HomePage/HomePage'
import UpdateCaroussel1 from 'views/Admin/Home/HomePage/Carousel/update/Header'
import SectioncarousselsAdmin from 'views/Admin/Home/HomePage/Carousel/carousel'
// Caroussel2  //ADHERENT

import UpdateCaroussel2 from 'views/Admin/Home/HomePage/Adherent/update/Header'
import SectioncadherentAdmin from 'views/Admin/Home/HomePage/Adherent/carousel'
// formulaire d'admission

import PresentationFile from 'views/Admin/Menu/formulaire/PresentationFile'
import Updatefichier from 'views/Admin/Menu/formulaire/update/Header'

// Agenda
// Agenda 1

import UpdateAgenda1 from 'views/Admin/Home/HomePage/notification/agenda1/update/Header'
import SectionAgenda1Admin from 'views/Admin/Home/HomePage/notification/agenda1/agenda'
// Agenda 2
import UpdateAgenda2 from 'views/Admin/Home/HomePage/notification/agenda2/update/Header'
import SectionAgenda2Admin from 'views/Admin/Home/HomePage/notification/agenda2/agenda'
// Offre d'emploi
import UpdateOffre from 'views/Admin/Home/HomePage/notification/offre/update/Header'
import SectionOffreAdmin from 'views/Admin/Home/HomePage/notification/offre/offre'

import Maps from './map'
import PresentationContact from 'views/Contact/PresentationContact.js'
import OpenModalLogin from 'views/SigninPage/OpenLogin.js'

// Check for token
if (localStorage.jwtToken) {
	// Set auth token header auth
	setAuthToken(localStorage.jwtToken)
	// Decode token and get user info and exp
	const decoded = jwt_decode(localStorage.jwtToken)
	// Set user and isAuthenticated
	store.dispatch(setCurrentUser(decoded))
	// history = createHistory(this.props)
	// Check for expired token
	const currentTime = Date.now() / 1000
	if (decoded.exp < currentTime) {
		// Logout user
		store.dispatch(logoutUser())
		// Clear current Profile
		store.dispatch(clearCurrentProfile())
		// Redirect to login
		window.location.href = '/Contact'
	}
}
class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<Router history={this.history}>
					<div className="App">
						<Route exact path="/" component={PresentationPage} />
						<Route exact path="/login" component={LoginPage} />
						<Route exact path="/register" component={RegisterPage} />
						<Route exact path="/adherent/login" component={PaymentLoginPage} />
						<Route exact path="/passwordchanged" component={PasswordChanged} />
						{/* Adherents process Payment */}
						<Route exact path="/completeprofile" component={CompleteprofilePage} />
						<Route exact path="/adherent/?" component={DetectStatus} />

						<Route exact path="/createprofile" component={CreateprofilePage} />
						<Route exact path="/adherent/check-profile" component={UpdateProfilePage} />
						<Route exact path="/adherents/adherer/individuel" component={PaymentPage} />
						<Route exact path="/adherents/adherer/collectif" component={PaymentPage50euros} />

						<Route exact path="/map" component={Maps} />
						<div className="container">
							<Route exact path="/annuaire-francilien" component={Annuaire} />
							<Route exact path="/structure" component={PresentationStructures} />
							<Route exact path="/blogs" component={PresentationBlog} />
							<Route exact path="/forgotpassword" component={ForgotPassword} />
							<Route exact path="/reset/:token" component={UpdatePasswordPage} />
							{/* Annuaire
							{/* paris */}
							<Route
								exact
								path="/annuaire/PARIS/autres_structures"
								component={Presentation_PARIS_autres_structures}
							/>
							<Route exact path="/annuaire/PARIS/autres" component={Presentation_PARIS_Autres} />
							<Route exact path="/annuaire/paris" component={ModalSearchParis} />
							{/* Offres de soins */}
							<Route exact path="/annuaire/Paris/lits" component={PresentationLitsParis} />
							<Route exact path="/annuaire/Paris/structure" component={PresentationStructureParis} />
							<Route exact path="/annuaire/Paris/association" component={PresentationAssociationParis} />
							<Route exact path="/annuaire/Paris/equipesmobiles" component={PresentationHadParis} />
							<Route exact path="/annuaire/Paris/usp" component={PresentationUspParis} />
							<Route exact path="/annuaire/Paris/reseaux" component={PresentationReseauxParis} />
							{/* Yvelines */}
							<Route
								exact
								path="/annuaire/YVELINES/autres_structures"
								component={Presentation_YVELINES_autres_structures}
							/>
							<Route exact path="/annuaire/YVELINES/autres" component={Presentation_YVELINES_Autres} />
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
							<Route exact path="/annuaire/Yvelines/equipesmobiles" component={PresentationHadYvelines} />
							<Route exact path="/annuaire/Yvelines/usp" component={PresentationUspYvelines} />
							<Route exact path="/annuaire/Yvelines/reseaux" component={PresentationReseauxYvelines} />
							{/* Seine Saint Denis */}
							<Route
								exact
								path="/annuaire/SEINESAINTDENIS/autres_structures"
								component={Presentation_SEINESAINTDENIS_autres_structures}
							/>
							<Route
								exact
								path="/annuaire/SEINESAINTDENIS/autres"
								component={Presentation_SEINESAINTDENIS_Autres}
							/>
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
								path="/annuaire/SeineSaintDenis/equipesmobiles"
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
							<Route
								exact
								path="/annuaire/SEINEETMARNE/autres_structures"
								component={Presentation_SEINEETMARNE_autres_structures}
							/>
							<Route
								exact
								path="/annuaire/SEINEETMARNE/autres"
								component={Presentation_SEINEETMARNE_Autres}
							/>
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
							<Route
								exact
								path="/annuaire/SeineetMarne/equipesmobiles"
								component={PresentationHadSeineetMarne}
							/>
							<Route exact path="/annuaire/SeineetMarne/usp" component={PresentationUspSeineetMarne} />
							<Route
								exact
								path="/annuaire/SeineetMarne/reseaux"
								component={PresentationReseauxSeineetMarne}
							/>
							{/* Val d'Oise */}
							<Route
								exact
								path="/annuaire/VALDOISE/autres_structures"
								component={Presentation_VALDOISE_autres_structures}
							/>
							<Route exact path="/annuaire/VALDOISE/autres" component={Presentation_VALDOISE_Autres} />
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
							<Route exact path="/annuaire/ValdOise/equipesmobiles" component={PresentationHadValdOise} />
							<Route exact path="/annuaire/ValdOise/usp" component={PresentationUspValdOise} />
							<Route exact path="/annuaire/ValdOise/reseaux" component={PresentationReseauxValdOise} />
							{/* Essonne */}
							<Route exact path="/annuaire/essonne" component={ModalSearchEssonne} />
							<Route exact path="/annuaire/essonne/lits" component={PresentationLitsEssonne} />
							<Route exact path="/annuaire/essonne/structure" component={PresentationStructureEssonne} />
							<Route
								exact
								path="/annuaire/essonne/association"
								component={PresentationAssociationEssonne}
							/>
							<Route
								exact
								path="/annuaire/essonne/autres_structures"
								component={Presentation_ESSONNE_autres_structures}
							/>
							<Route exact path="/annuaire/essonne/autres" component={Presentation_ESSONNE_Autres} />
							<Route exact path="/annuaire/essonne/equipesmobiles" component={PresentationHadEssonne} />
							<Route exact path="/annuaire/essonne/usp" component={PresentationUspEssonne} />
							<Route exact path="/annuaire/essonne/reseaux" component={PresentationReseauxEssonne} />
							{/* Val de Marne */}
							<Route
								exact
								path="/annuaire/VALDEMARNE/autres_structures"
								component={Presentation_VALDEMARNE_autres_structures}
							/>
							<Route
								exact
								path="/annuaire/VALDEMARNE/autres"
								component={Presentation_VALDEMARNE_Autres}
							/>
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
							<Route
								exact
								path="/annuaire/ValdeMarne/equipesmobiles"
								component={PresentationHadValdeMarne}
							/>
							<Route exact path="/annuaire/ValdeMarne/usp" component={PresentationUspValdeMarne} />
							<Route
								exact
								path="/annuaire/ValdeMarne/reseaux"
								component={PresentationReseauxValdeMarne}
							/>
							{/* Hauts de Seine */}
							<Route
								exact
								path="/annuaire/HAUTSDESEINE/autres_structures"
								component={Presentation_HAUTSDESEINE_autres_structures}
							/>
							<Route
								exact
								path="/annuaire/HAUTSDESEINE/autres"
								component={Presentation_HAUTSDESEINE_Autres}
							/>
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
							<Route
								exact
								path="/annuaire/HautsdeSeine/equipesmobiles"
								component={PresentationHadHautsdeSeine}
							/>
							<Route exact path="/annuaire/HautsdeSeine/usp" component={PresentationUspHautsdeSeine} />
							<Route
								exact
								path="/annuaire/HautsdeSeine/reseaux"
								component={PresentationReseauxHautsdeSeine}
							/>{' '}
							<Switch>
								<PrivateRoute exact path="/dashboard" component={Dashboard} />
								<PrivateRoute exact path="/monprofile" component={ProfilePagePresentation} />
							</Switch>
							<Switch>
								<PrivateRoute exact path="/complete-profile" component={CreateProfile} />
							</Switch>
							<Switch>
								<PrivateRoute exact path="/edit-profile" component={UpdatePage} />
							</Switch>
							{/* Admin */}
							<Switch>
								<AdminRoute exact path="/admin" component={ProfilePage} />
								<AdminRoute exact path="/admin/menu/veillemedicale" component={VeillemedicalePage} />

								<AdminRoute exact path="/admin/annuaire" component={AnnuaireAdminHome} />
							</Switch>
							<Switch>
								{/* Paris */}
								{/* {Autres} */}
								<AdminRoute exact path="/admin/Paris/autres" component={Parisautres} />
								<AdminRoute exact path="/admin/Paris/autres/:id" component={GetParisautres} />
								<AdminRoute exact path="/admin/update/Paris/autres/:id" component={UpdateParisautres} />
								<AdminRoute exact path="/admin/post/Paris/autres" component={PostParisautres} />
								<AdminRoute exact path="/admin/delete/Paris/autres/:id" component={DeleteParisautres} />

								{/* {Autres_structures} */}

								<AdminRoute
									exact
									path="/admin/menu/coordinationregionale"
									component={CoordinationPage}
								/>
								<AdminRoute exact path="/admin/menu/soinspalliatifs" component={SoinsPalliatifPage} />
								<AdminRoute
									exact
									path="/admin/Paris/autres_structures"
									component={Parisautres_structures}
								/>
								<AdminRoute
									exact
									path="/admin/Paris/autres_structures/:id"
									component={GetParisautres_structures}
								/>
								<AdminRoute
									exact
									path="/admin/update/Paris/autres_structures/:id"
									component={UpdateParisautres_structures}
								/>
								<AdminRoute
									exact
									path="/admin/post/Paris/autres_structures"
									component={PostParisautres_structures}
								/>
								<AdminRoute
									exact
									path="/admin/delete/Paris/autres_structures/:id"
									component={DeleteParisautres_structures}
								/>
								{/* USP */}
								<AdminRoute exact path="/admin/paris/usp" component={Paris} />
								<AdminRoute exact path="/admin/paris/usp/:id" component={Get} />
								<AdminRoute exact path="/admin/update/paris/usp/:id" component={Update} />
								<AdminRoute exact path="/admin/post/paris/usp" component={Post} />
								<AdminRoute exact path="/admin/delete/paris/usp/:id" component={Delete} />
								{/* RESEAUX */}
								<AdminRoute exact path="/admin/paris/reseaux" component={ParisRESEAUX} />
								<AdminRoute exact path="/admin/paris/reseaux/:id" component={GetPARISRESEAUX} />
								<AdminRoute
									exact
									path="/admin/update/paris/reseaux/:id"
									component={UpdatePARISRESEAUX}
								/>
								<AdminRoute exact path="/admin/post/paris/reseaux" component={PostPARISRESEAUX} />
								<AdminRoute
									exact
									path="/admin/delete/paris/reseaux/:id"
									component={DeletePARISRESEAUX}
								/>
								{/* ASSOS */}
								<AdminRoute exact path="/admin/paris/association" component={ParisASSOS} />
								<AdminRoute exact path="/admin/paris/association/:id" component={GetPARISASSOS} />
								<AdminRoute
									exact
									path="/admin/update/paris/association/:id"
									component={UpdatePARISASSOS}
								/>
								<AdminRoute exact path="/admin/post/paris/association" component={PostPARISASSOS} />
								<AdminRoute
									exact
									path="/admin/delete/paris/association/:id"
									component={DeletePARISASSOS}
								/>
								{/* HAD */}
								<AdminRoute exact path="/admin/paris/equipesmobiles" component={ParisHAD} />
								<AdminRoute exact path="/admin/paris/equipesmobiles/:id" component={GetPARISHAD} />
								<AdminRoute
									exact
									path="/admin/update/paris/equipesmobiles/:id"
									component={UpdatePARISHAD}
								/>
								<AdminRoute exact path="/admin/post/paris/equipesmobiles" component={PostPARISHAD} />
								<AdminRoute
									exact
									path="/admin/delete/paris/equipesmobiles/:id"
									component={DeletePARISHAD}
								/>
								{/* STRUCTURES */}
								<AdminRoute exact path="/admin/paris/structures" component={ParisSTRUCTURES} />
								<AdminRoute exact path="/admin/paris/structures/:id" component={GetPARISSTRUCTURES} />
								<AdminRoute
									exact
									path="/admin/update/paris/structures/:id"
									component={UpdatePARISSTRUCTURES}
								/>
								<AdminRoute exact path="/admin/post/paris/structures" component={PostPARISSTRUCTURES} />
								<AdminRoute
									exact
									path="/admin/delete/paris/structures/:id"
									component={DeletePARISSTRUCTURES}
								/>
								{/* LITS */}
								<AdminRoute exact path="/admin/paris/lits" component={ParisLITS} />
								<AdminRoute exact path="/admin/paris/lits/:id" component={GetPARISLITS} />
								<AdminRoute exact path="/admin/update/paris/lits/:id" component={UpdatePARISLITS} />
								<AdminRoute exact path="/admin/post/paris/lits" component={PostPARISLITS} />
								<AdminRoute exact path="/admin/delete/paris/lits/:id" component={DeletePARISLITS} />
							</Switch>
							<Switch>
								{/* Hauts de Seine */}
								{/* {Autres} */}
								<AdminRoute exact path="/admin/HAUTDESEINE/autres" component={HAUTDESEINEautres} />
								<AdminRoute
									exact
									path="/admin/HAUTDESEINE/autres/:id"
									component={GetHAUTDESEINEautres}
								/>
								<AdminRoute
									exact
									path="/admin/update/HAUTDESEINE/autres/:id"
									component={UpdateHAUTDESEINEautres}
								/>
								<AdminRoute
									exact
									path="/admin/post/HAUTDESEINE/autres"
									component={PostHAUTDESEINEautres}
								/>
								<AdminRoute
									exact
									path="/admin/delete/HAUTDESEINE/autres/:id"
									component={DeleteHAUTDESEINEautres}
								/>

								{/* {Autres_structures} */}
								<AdminRoute
									exact
									path="/admin/HAUTDESEINE/autres_structures"
									component={HAUTDESEINEautres_structures}
								/>
								<AdminRoute
									exact
									path="/admin/HAUTDESEINE/autres_structures/:id"
									component={GetHAUTDESEINEautres_structures}
								/>
								<AdminRoute
									exact
									path="/admin/update/HAUTDESEINE/autres_structures/:id"
									component={UpdateHAUTDESEINEautres_structures}
								/>
								<AdminRoute
									exact
									path="/admin/post/HAUTDESEINE/autres_structures"
									component={PostHAUTDESEINEautres_structures}
								/>
								<AdminRoute
									exact
									path="/admin/delete/HAUTDESEINE/autres_structures/:id"
									component={DeleteHAUTDESEINEautres_structures}
								/>
								{/* USP */}
								<AdminRoute exact path="/admin/hautdeseine/usp" component={HautsdeSeine} />
								<AdminRoute exact path="/admin/HAUTDESEINE/usp/:id" component={GetUSPHAUTDESEINE} />
								<AdminRoute
									exact
									path="/admin/update/HAUTDESEINE/usp/:id"
									component={UpdateUSPHAUTDESEINE}
								/>
								<AdminRoute exact path="/admin/post/HAUTDESEINE/usp" component={PostUSPHAUTDESEINE} />
								<AdminRoute
									exact
									path="/admin/delete/HAUTDESEINE/usp/:id"
									component={DeleteUSPHAUTDESEINE}
								/>
								{/* RESEAUX */}
								<AdminRoute exact path="/admin/HAUTDESEINE/reseaux" component={HAUTDESEINERESEAUX} />
								<AdminRoute
									exact
									path="/admin/HAUTDESEINE/reseaux/:id"
									component={GetHAUTDESEINERESEAUX}
								/>
								<AdminRoute
									exact
									path="/admin/update/HAUTDESEINE/reseaux/:id"
									component={UpdateHAUTDESEINERESEAUX}
								/>
								<AdminRoute
									exact
									path="/admin/post/HAUTDESEINE/reseaux"
									component={PostHAUTDESEINERESEAUX}
								/>
								<AdminRoute
									exact
									path="/admin/delete/HAUTDESEINE/reseaux/:id"
									component={DeleteHAUTDESEINERESEAUX}
								/>
								{/* ASSOS */}
								<AdminRoute exact path="/admin/HAUTDESEINE/association" component={HAUTDESEINEASSOS} />
								<AdminRoute
									exact
									path="/admin/HAUTDESEINE/association/:id"
									component={GetHAUTDESEINEASSOS}
								/>
								<AdminRoute
									exact
									path="/admin/update/HAUTDESEINE/association/:id"
									component={UpdateHAUTDESEINEASSOS}
								/>
								<AdminRoute
									exact
									path="/admin/post/HAUTDESEINE/association"
									component={PostHAUTDESEINEASSOS}
								/>
								<AdminRoute
									exact
									path="/admin/delete/HAUTDESEINE/association/:id"
									component={DeleteHAUTDESEINEASSOS}
								/>
								{/* HAD */}
								<AdminRoute exact path="/admin/HAUTDESEINE/equipesmobiles" component={HAUTDESEINEHAD} />
								<AdminRoute
									exact
									path="/admin/HAUTDESEINE/equipesmobiles/:id"
									component={GetHAUTDESEINEHAD}
								/>
								<AdminRoute
									exact
									path="/admin/update/HAUTDESEINE/equipesmobiles/:id"
									component={UpdateHAUTDESEINEHAD}
								/>
								<AdminRoute
									exact
									path="/admin/post/HAUTDESEINE/equipesmobiles"
									component={PostHAUTDESEINEHAD}
								/>
								<AdminRoute
									exact
									path="/admin/delete/HAUTDESEINE/equipesmobiles/:id"
									component={DeleteHAUTDESEINEHAD}
								/>
								{/* STRUCTURES */}
								<AdminRoute
									exact
									path="/admin/HAUTDESEINE/structures"
									component={HAUTDESEINESTRUCTURES}
								/>
								<AdminRoute
									exact
									path="/admin/HAUTDESEINE/structures/:id"
									component={GetHAUTDESEINESTRUCTURES}
								/>
								<AdminRoute
									exact
									path="/admin/update/HAUTDESEINE/structures/:id"
									component={UpdateHAUTDESEINESTRUCTURES}
								/>
								<AdminRoute
									exact
									path="/admin/post/HAUTDESEINE/structures"
									component={PostHAUTDESEINESTRUCTURES}
								/>
								<AdminRoute
									exact
									path="/admin/delete/HAUTDESEINE/structures/:id"
									component={DeleteHAUTDESEINESTRUCTURES}
								/>
								{/* LITS */}
								<AdminRoute exact path="/admin/HAUTDESEINE/lits" component={HAUTDESEINELITS} />
								<AdminRoute exact path="/admin/HAUTDESEINE/lits/:id" component={GetHAUTDESEINELITS} />
								<AdminRoute
									exact
									path="/admin/update/HAUTDESEINE/lits/:id"
									component={UpdateHAUTDESEINELITS}
								/>
								<AdminRoute exact path="/admin/post/HAUTDESEINE/lits" component={PostHAUTDESEINELITS} />
								<AdminRoute
									exact
									path="/admin/delete/HAUTDESEINE/lits/:id"
									component={DeleteHAUTDESEINELITS}
								/>
							</Switch>
							<Switch>
								{/* Val de Marne */}
								{/* {Autres} */}
								<AdminRoute exact path="/admin/VALDEMARNE/autres" component={VALDEMARNEautres} />
								<AdminRoute exact path="/admin/VALDEMARNE/autres/:id" component={GetVALDEMARNEautres} />
								<AdminRoute
									exact
									path="/admin/update/VALDEMARNE/autres/:id"
									component={UpdateVALDEMARNEautres}
								/>
								<AdminRoute
									exact
									path="/admin/post/VALDEMARNE/autres"
									component={PostVALDEMARNEautres}
								/>
								<AdminRoute
									exact
									path="/admin/delete/VALDEMARNE/autres/:id"
									component={DeleteVALDEMARNEautres}
								/>

								{/* {Autres_structures} */}
								<AdminRoute
									exact
									path="/admin/VALDEMARNE/autres_structures"
									component={VALDEMARNEautres_structures}
								/>
								<AdminRoute
									exact
									path="/admin/VALDEMARNE/autres_structures/:id"
									component={GetVALDEMARNEautres_structures}
								/>
								<AdminRoute
									exact
									path="/admin/update/VALDEMARNE/autres_structures/:id"
									component={UpdateVALDEMARNEautres_structures}
								/>
								<AdminRoute
									exact
									path="/admin/post/VALDEMARNE/autres_structures"
									component={PostVALDEMARNEautres_structures}
								/>
								<AdminRoute
									exact
									path="/admin/delete/VALDEMARNE/autres_structures/:id"
									component={DeleteVALDEMARNEautres_structures}
								/>
								{/* USP */}
								<AdminRoute exact path="/admin/VALDEMARNE/usp" component={VALDEMARNE} />
								<AdminRoute exact path="/admin/VALDEMARNE/usp/:id" component={GetUSPVALDEMARNE} />
								<AdminRoute
									exact
									path="/admin/update/VALDEMARNE/usp/:id"
									component={UpdateUSPVALDEMARNE}
								/>
								<AdminRoute exact path="/admin/post/VALDEMARNE/usp" component={PostUSPVALDEMARNE} />
								<AdminRoute
									exact
									path="/admin/delete/VALDEMARNE/usp/:id"
									component={DeleteUSPVALDEMARNE}
								/>
								{/* RESEAUX */}
								<AdminRoute exact path="/admin/VALDEMARNE/reseaux" component={VALDEMARNERESEAUX} />
								<AdminRoute
									exact
									path="/admin/VALDEMARNE/reseaux/:id"
									component={GetVALDEMARNERESEAUX}
								/>
								<AdminRoute
									exact
									path="/admin/update/VALDEMARNE/reseaux/:id"
									component={UpdateVALDEMARNERESEAUX}
								/>
								<AdminRoute
									exact
									path="/admin/post/VALDEMARNE/reseaux"
									component={PostVALDEMARNERESEAUX}
								/>
								<AdminRoute
									exact
									path="/admin/delete/VALDEMARNE/reseaux/:id"
									component={DeleteVALDEMARNERESEAUX}
								/>
								{/* ASSOS */}
								<AdminRoute exact path="/admin/VALDEMARNE/association" component={VALDEMARNEASSOS} />
								<AdminRoute
									exact
									path="/admin/VALDEMARNE/association/:id"
									component={GetVALDEMARNEASSOS}
								/>
								<AdminRoute
									exact
									path="/admin/update/VALDEMARNE/association/:id"
									component={UpdateVALDEMARNEASSOS}
								/>
								<AdminRoute
									exact
									path="/admin/post/VALDEMARNE/association"
									component={PostVALDEMARNEASSOS}
								/>
								<AdminRoute
									exact
									path="/admin/delete/VALDEMARNE/association/:id"
									component={DeleteVALDEMARNEASSOS}
								/>
								{/* HAD */}
								<AdminRoute exact path="/admin/VALDEMARNE/equipesmobiles" component={VALDEMARNEHAD} />
								<AdminRoute
									exact
									path="/admin/VALDEMARNE/equipesmobiles/:id"
									component={GetVALDEMARNEHAD}
								/>
								<AdminRoute
									exact
									path="/admin/update/VALDEMARNE/equipesmobiles/:id"
									component={UpdateVALDEMARNEHAD}
								/>
								<AdminRoute
									exact
									path="/admin/post/VALDEMARNE/equipesmobiles"
									component={PostVALDEMARNEHAD}
								/>
								<AdminRoute
									exact
									path="/admin/delete/VALDEMARNE/equipesmobiles/:id"
									component={DeleteVALDEMARNEHAD}
								/>
								{/* STRUCTURES */}
								<AdminRoute exact path="/admin/VALDEMARNE/structures" component={VALDEMARNETRUCTURES} />
								<AdminRoute
									exact
									path="/admin/VALDEMARNE/structures/:id"
									component={GetVALDEMARNESTRUCTURES}
								/>
								<AdminRoute
									exact
									path="/admin/update/VALDEMARNE/structures/:id"
									component={UpdateVALDEMARNESTRUCTURES}
								/>
								<AdminRoute
									exact
									path="/admin/post/VALDEMARNE/structures"
									component={PostVALDEMARNESTRUCTURES}
								/>
								<AdminRoute
									exact
									path="/admin/delete/VALDEMARNE/structures/:id"
									component={DeleteVALDEMARNESTRUCTURES}
								/>
								{/* LITS */}
								<AdminRoute exact path="/admin/VALDEMARNE/lits" component={VALDEMARNELITS} />
								<AdminRoute exact path="/admin/VALDEMARNE/lits/:id" component={GetVALDEMARNELITS} />
								<AdminRoute
									exact
									path="/admin/update/VALDEMARNE/lits/:id"
									component={UpdateVALDEMARNELITS}
								/>
								<AdminRoute exact path="/admin/post/VALDEMARNE/lits" component={PostVALDEMARNELITS} />
								<AdminRoute
									exact
									path="/admin/delete/VALDEMARNE/lits/:id"
									component={DeleteVALDEMARNELITS}
								/>
							</Switch>
							<Switch>
								{/* Seine Saint Denis */}
								{/* {Autres} */}
								<AdminRoute
									exact
									path="/admin/SEINESAINTDENIS/autres"
									component={SEINESAINTDENISautres}
								/>
								<AdminRoute
									exact
									path="/admin/SEINESAINTDENIS/autres/:id"
									component={GetSEINESAINTDENISautres}
								/>
								<AdminRoute
									exact
									path="/admin/update/SEINESAINTDENIS/autres/:id"
									component={UpdateSEINESAINTDENISautres}
								/>
								<AdminRoute
									exact
									path="/admin/post/SEINESAINTDENIS/autres"
									component={PostSEINESAINTDENISautres}
								/>
								<AdminRoute
									exact
									path="/admin/delete/SEINESAINTDENIS/autres/:id"
									component={DeleteSEINESAINTDENISautres}
								/>

								{/* {Autres_structures} */}
								<AdminRoute
									exact
									path="/admin/SEINESAINTDENIS/autres_structures"
									component={SEINESAINTDENISautres_structures}
								/>
								<AdminRoute
									exact
									path="/admin/SEINESAINTDENIS/autres_structures/:id"
									component={GetSEINESAINTDENISautres_structures}
								/>
								<AdminRoute
									exact
									path="/admin/update/SEINESAINTDENIS/autres_structures/:id"
									component={UpdateSEINESAINTDENISautres_structures}
								/>
								<AdminRoute
									exact
									path="/admin/post/SEINESAINTDENIS/autres_structures"
									component={PostSEINESAINTDENISautres_structures}
								/>
								<AdminRoute
									exact
									path="/admin/delete/SEINESAINTDENIS/autres_structures/:id"
									component={DeleteSEINESAINTDENISautres_structures}
								/>
								{/* USP */}
								<AdminRoute exact path="/admin/SEINESAINTDENIS/usp" component={SEINESAINTDENIS} />
								<AdminRoute
									exact
									path="/admin/SEINESAINTDENIS/usp/:id"
									component={GetUSPSEINESAINTDENIS}
								/>
								<AdminRoute
									exact
									path="/admin/update/SEINESAINTDENIS/usp/:id"
									component={UpdateUSPSEINESAINTDENIS}
								/>
								<AdminRoute
									exact
									path="/admin/post/SEINESAINTDENIS/usp"
									component={PostUSPSEINESAINTDENIS}
								/>
								<AdminRoute
									exact
									path="/admin/delete/SEINESAINTDENIS/usp/:id"
									component={DeleteUSPSEINESAINTDENIS}
								/>
								{/* RESEAUX */}
								<AdminRoute
									exact
									path="/admin/SEINESAINTDENIS/reseaux"
									component={SEINESAINTDENISRESEAUX}
								/>
								<AdminRoute
									exact
									path="/admin/SEINESAINTDENIS/reseaux/:id"
									component={GetSEINESAINTDENISRESEAUX}
								/>
								<AdminRoute
									exact
									path="/admin/update/SEINESAINTDENIS/reseaux/:id"
									component={UpdateSEINESAINTDENISRESEAUX}
								/>
								<AdminRoute
									exact
									path="/admin/post/SEINESAINTDENIS/reseaux"
									component={PostSEINESAINTDENISRESEAUX}
								/>
								<AdminRoute
									exact
									path="/admin/delete/SEINESAINTDENIS/reseaux/:id"
									component={DeleteSEINESAINTDENISRESEAUX}
								/>
								{/* ASSOS */}
								<AdminRoute
									exact
									path="/admin/SEINESAINTDENIS/association"
									component={SEINESAINTDENISASSOS}
								/>
								<AdminRoute
									exact
									path="/admin/SEINESAINTDENIS/association/:id"
									component={GetSEINESAINTDENISASSOS}
								/>
								<AdminRoute
									exact
									path="/admin/update/SEINESAINTDENIS/association/:id"
									component={UpdateSEINESAINTDENISASSOS}
								/>
								<AdminRoute
									exact
									path="/admin/post/SEINESAINTDENIS/association"
									component={PostSEINESAINTDENISASSOS}
								/>
								<AdminRoute
									exact
									path="/admin/delete/SEINESAINTDENIS/association/:id"
									component={DeleteSEINESAINTDENISASSOS}
								/>
								{/* HAD */}
								<AdminRoute
									exact
									path="/admin/SEINESAINTDENIS/equipesmobiles"
									component={SEINESAINTDENISHAD}
								/>
								<AdminRoute
									exact
									path="/admin/SEINESAINTDENIS/equipesmobiles/:id"
									component={GetSEINESAINTDENISHAD}
								/>
								<AdminRoute
									exact
									path="/admin/update/SEINESAINTDENIS/equipesmobiles/:id"
									component={UpdateSEINESAINTDENISHAD}
								/>
								<AdminRoute
									exact
									path="/admin/post/SEINESAINTDENIS/equipesmobiles"
									component={PostSEINESAINTDENISHAD}
								/>
								<AdminRoute
									exact
									path="/admin/delete/SEINESAINTDENIS/equipesmobiles/:id"
									component={DeleteSEINESAINTDENISHAD}
								/>
								{/* STRUCTURES */}
								<AdminRoute
									exact
									path="/admin/SEINESAINTDENIS/structures"
									component={SEINESAINTDENISTRUCTURES}
								/>
								<AdminRoute
									exact
									path="/admin/SEINESAINTDENIS/structures/:id"
									component={GetSEINESAINTDENISSTRUCTURES}
								/>
								<AdminRoute
									exact
									path="/admin/update/SEINESAINTDENIS/structures/:id"
									component={UpdateSEINESAINTDENISSTRUCTURES}
								/>
								<AdminRoute
									exact
									path="/admin/post/SEINESAINTDENIS/structures"
									component={PostSEINESAINTDENISSTRUCTURES}
								/>
								<AdminRoute
									exact
									path="/admin/delete/SEINESAINTDENIS/structures/:id"
									component={DeleteSEINESAINTDENISSTRUCTURES}
								/>
								{/* LITS */}
								<AdminRoute exact path="/admin/SEINESAINTDENIS/lits" component={SEINESAINTDENISLITS} />
								<AdminRoute
									exact
									path="/admin/SEINESAINTDENIS/lits/:id"
									component={GetSEINESAINTDENISLITS}
								/>
								<AdminRoute
									exact
									path="/admin/update/SEINESAINTDENIS/lits/:id"
									component={UpdateSEINESAINTDENISLITS}
								/>
								<AdminRoute
									exact
									path="/admin/post/SEINESAINTDENIS/lits"
									component={PostSEINESAINTDENISLITS}
								/>
								<AdminRoute
									exact
									path="/admin/delete/SEINESAINTDENIS/lits/:id"
									component={DeleteSEINESAINTDENISLITS}
								/>
							</Switch>
							<Switch>
								{/* Val d'Oise */}
								{/* {Autres} */}
								<AdminRoute exact path="/admin/VALDOISE/autres" component={VALDOISEautres} />
								<AdminRoute exact path="/admin/VALDOISE/autres/:id" component={GetVALDOISEautres} />
								<AdminRoute
									exact
									path="/admin/update/VALDOISE/autres/:id"
									component={UpdateVALDOISEautres}
								/>
								<AdminRoute exact path="/admin/post/VALDOISE/autres" component={PostVALDOISEautres} />
								<AdminRoute
									exact
									path="/admin/delete/VALDOISE/autres/:id"
									component={DeleteVALDOISEautres}
								/>

								{/* {Autres_structures} */}
								<AdminRoute
									exact
									path="/admin/VALDOISE/autres_structures"
									component={VALDOISEautres_structures}
								/>
								<AdminRoute
									exact
									path="/admin/VALDOISE/autres_structures/:id"
									component={GetVALDOISEautres_structures}
								/>
								<AdminRoute
									exact
									path="/admin/update/VALDOISE/autres_structures/:id"
									component={UpdateVALDOISEautres_structures}
								/>
								<AdminRoute
									exact
									path="/admin/post/VALDOISE/autres_structures"
									component={PostVALDOISEautres_structures}
								/>
								<AdminRoute
									exact
									path="/admin/delete/VALDOISE/autres_structures/:id"
									component={DeleteVALDOISEautres_structures}
								/>
								{/* USP */}
								<AdminRoute exact path="/admin/VALDOISE/usp" component={VALDOISE} />
								<AdminRoute exact path="/admin/VALDOISE/usp/:id" component={GetUSPVALDOISE} />
								<AdminRoute exact path="/admin/update/VALDOISE/usp/:id" component={UpdateUSPVALDOISE} />
								<AdminRoute exact path="/admin/post/VALDOISE/usp" component={PostUSPVALDOISE} />
								<AdminRoute exact path="/admin/delete/VALDOISE/usp/:id" component={DeleteUSPVALDOISE} />
								{/* RESEAUX */}
								<AdminRoute exact path="/admin/VALDOISE/reseaux" component={VALDOISERESEAUX} />
								<AdminRoute exact path="/admin/VALDOISE/reseaux/:id" component={GetVALDOISERESEAUX} />
								<AdminRoute
									exact
									path="/admin/update/VALDOISE/reseaux/:id"
									component={UpdateVALDOISERESEAUX}
								/>
								<AdminRoute exact path="/admin/post/VALDOISE/reseaux" component={PostVALDOISERESEAUX} />
								<AdminRoute
									exact
									path="/admin/delete/VALDOISE/reseaux/:id"
									component={DeleteVALDOISERESEAUX}
								/>
								{/* ASSOS */}
								<AdminRoute exact path="/admin/VALDOISE/association" component={VALDOISEASSOS} />
								<AdminRoute exact path="/admin/VALDOISE/association/:id" component={GetVALDOISEASSOS} />
								<AdminRoute
									exact
									path="/admin/update/VALDOISE/association/:id"
									component={UpdateVALDOISEASSOS}
								/>
								<AdminRoute
									exact
									path="/admin/post/VALDOISE/association"
									component={PostVALDOISEASSOS}
								/>
								<AdminRoute
									exact
									path="/admin/delete/VALDOISE/association/:id"
									component={DeleteVALDOISEASSOS}
								/>
								{/* HAD */}
								<AdminRoute exact path="/admin/VALDOISE/equipesmobiles" component={VALDOISEHAD} />
								<AdminRoute
									exact
									path="/admin/VALDOISE/equipesmobiles/:id"
									component={GetVALDOISEHAD}
								/>
								<AdminRoute
									exact
									path="/admin/update/VALDOISE/equipesmobiles/:id"
									component={UpdateVALDOISEHAD}
								/>
								<AdminRoute
									exact
									path="/admin/post/VALDOISE/equipesmobiles"
									component={PostVALDOISEHAD}
								/>
								<AdminRoute
									exact
									path="/admin/delete/VALDOISE/equipesmobiles/:id"
									component={DeleteVALDOISEHAD}
								/>
								{/* STRUCTURES */}
								<AdminRoute exact path="/admin/VALDOISE/structures" component={VALDOISETRUCTURES} />
								<AdminRoute
									exact
									path="/admin/VALDOISE/structures/:id"
									component={GetVALDOISESTRUCTURES}
								/>
								<AdminRoute
									exact
									path="/admin/update/VALDOISE/structures/:id"
									component={UpdateVALDOISESTRUCTURES}
								/>
								<AdminRoute
									exact
									path="/admin/post/VALDOISE/structures"
									component={PostVALDOISESTRUCTURES}
								/>
								<AdminRoute
									exact
									path="/admin/delete/VALDOISE/structures/:id"
									component={DeleteVALDOISESTRUCTURES}
								/>
								{/* LITS */}
								<AdminRoute exact path="/admin/VALDOISE/lits" component={VALDOISELITS} />
								<AdminRoute exact path="/admin/VALDOISE/lits/:id" component={GetVALDOISELITS} />
								<AdminRoute
									exact
									path="/admin/update/VALDOISE/lits/:id"
									component={UpdateVALDOISELITS}
								/>
								<AdminRoute exact path="/admin/post/VALDOISE/lits" component={PostVALDOISELITS} />
								<AdminRoute
									exact
									path="/admin/delete/VALDOISE/lits/:id"
									component={DeleteVALDOISELITS}
								/>
							</Switch>
							<Switch>
								{/* Essonne */}
								{/* USP */}
								<AdminRoute exact path="/admin/ESSONNE/usp" component={ESSONNE} />
								<AdminRoute exact path="/admin/ESSONNE/usp/:id" component={GetUSPESSONNE} />
								<AdminRoute exact path="/admin/update/ESSONNE/usp/:id" component={UpdateUSPESSONNE} />
								<AdminRoute exact path="/admin/post/ESSONNE/usp" component={PostUSPESSONNE} />
								<AdminRoute exact path="/admin/delete/ESSONNE/usp/:id" component={DeleteUSPESSONNE} />
								{/* RESEAUX */}
								<AdminRoute exact path="/admin/ESSONNE/reseaux" component={ESSONNERESEAUX} />
								<AdminRoute exact path="/admin/ESSONNE/reseaux/:id" component={GetESSONNERESEAUX} />
								<AdminRoute
									exact
									path="/admin/update/ESSONNE/reseaux/:id"
									component={UpdateESSONNERESEAUX}
								/>
								<AdminRoute exact path="/admin/post/ESSONNE/reseaux" component={PostESSONNERESEAUX} />
								<AdminRoute
									exact
									path="/admin/delete/ESSONNE/reseaux/:id"
									component={DeleteESSONNERESEAUX}
								/>
								{/* ASSOS */}
								<AdminRoute exact path="/admin/ESSONNE/association" component={ESSONNEASSOS} />
								<AdminRoute exact path="/admin/ESSONNE/association/:id" component={GetESSONNEASSOS} />
								<AdminRoute
									exact
									path="/admin/update/ESSONNE/association/:id"
									component={UpdateESSONNEASSOS}
								/>
								<AdminRoute exact path="/admin/post/ESSONNE/association" component={PostESSONNEASSOS} />
								<AdminRoute
									exact
									path="/admin/delete/ESSONNE/association/:id"
									component={DeleteESSONNEASSOS}
								/>
								{/* HAD */}
								<AdminRoute exact path="/admin/ESSONNE/equipesmobiles" component={ESSONNEHAD} />
								<AdminRoute exact path="/admin/ESSONNE/equipesmobiles/:id" component={GetESSONNEHAD} />
								<AdminRoute
									exact
									path="/admin/update/ESSONNE/equipesmobiles/:id"
									component={UpdateESSONNEHAD}
								/>
								<AdminRoute
									exact
									path="/admin/post/ESSONNE/equipesmobiles"
									component={PostESSONNEHAD}
								/>
								<AdminRoute
									exact
									path="/admin/delete/ESSONNE/equipesmobiles/:id"
									component={DeleteESSONNEHAD}
								/>
								{/* STRUCTURES */}
								<AdminRoute exact path="/admin/ESSONNE/structures" component={ESSONNETRUCTURES} />
								<AdminRoute
									exact
									path="/admin/ESSONNE/structures/:id"
									component={GetESSONNESTRUCTURES}
								/>
								<AdminRoute
									exact
									path="/admin/update/ESSONNE/structures/:id"
									component={UpdateESSONNESTRUCTURES}
								/>
								<AdminRoute
									exact
									path="/admin/post/ESSONNE/structures"
									component={PostESSONNESTRUCTURES}
								/>
								<AdminRoute
									exact
									path="/admin/delete/ESSONNE/structures/:id"
									component={DeleteESSONNESTRUCTURES}
								/>
								{/* LITS */}
								<AdminRoute exact path="/admin/ESSONNE/lits" component={ESSONNELITS} />
								<AdminRoute exact path="/admin/ESSONNE/lits/:id" component={GetESSONNELITS} />
								<AdminRoute exact path="/admin/update/ESSONNE/lits/:id" component={UpdateESSONNELITS} />
								<AdminRoute exact path="/admin/post/ESSONNE/lits" component={PostESSONNELITS} />
								<AdminRoute exact path="/admin/delete/ESSONNE/lits/:id" component={DeleteESSONNELITS} />
								{/* {Autres} */}
								<AdminRoute exact path="/admin/ESSONNE/autres" component={ESSONNEautres} />
								<AdminRoute exact path="/admin/ESSONNE/autres/:id" component={GetESSONNEautres} />
								<AdminRoute
									exact
									path="/admin/update/ESSONNE/autres/:id"
									component={UpdateESSONNEautres}
								/>
								<AdminRoute exact path="/admin/post/ESSONNE/autres" component={PostESSONNEautres} />
								<AdminRoute
									exact
									path="/admin/delete/ESSONNE/autres/:id"
									component={DeleteESSONNEautres}
								/>

								{/* {Autres_structures} */}
								<AdminRoute
									exact
									path="/admin/ESSONNE/autres_structures"
									component={ESSONNEautres_structures}
								/>
								<AdminRoute
									exact
									path="/admin/ESSONNE/autres_structures/:id"
									component={GetESSONNEautres_structures}
								/>
								<AdminRoute
									exact
									path="/admin/update/ESSONNE/autres_structures/:id"
									component={UpdateESSONNEautres_structures}
								/>
								<AdminRoute
									exact
									path="/admin/post/ESSONNE/autres_structures"
									component={PostESSONNEautres_structures}
								/>
								<AdminRoute
									exact
									path="/admin/delete/ESSONNE/autres_structures/:id"
									component={DeleteESSONNEautres_structures}
								/>
							</Switch>
							<Switch>
								{/* Seine et Marne */}
								{/* {Autres} */}
								<AdminRoute exact path="/admin/SEINEETMARNE/autres" component={SEINEETMARNEautres} />
								<AdminRoute
									exact
									path="/admin/SEINEETMARNE/autres/:id"
									component={GetSEINEETMARNEautres}
								/>
								<AdminRoute
									exact
									path="/admin/update/SEINEETMARNE/autres/:id"
									component={UpdateSEINEETMARNEautres}
								/>
								<AdminRoute
									exact
									path="/admin/post/SEINEETMARNE/autres"
									component={PostSEINEETMARNEautres}
								/>
								<AdminRoute
									exact
									path="/admin/delete/SEINEETMARNE/autres/:id"
									component={DeleteSEINEETMARNEautres}
								/>

								{/* {Autres_structures} */}
								<AdminRoute
									exact
									path="/admin/SEINEETMARNE/autres_structures"
									component={SEINEETMARNEautres_structures}
								/>
								<AdminRoute
									exact
									path="/admin/SEINEETMARNE/autres_structures/:id"
									component={GetSEINEETMARNEautres_structures}
								/>
								<AdminRoute
									exact
									path="/admin/update/SEINEETMARNE/autres_structures/:id"
									component={UpdateSEINEETMARNEautres_structures}
								/>
								<AdminRoute
									exact
									path="/admin/post/SEINEETMARNE/autres_structures"
									component={PostSEINEETMARNEautres_structures}
								/>
								<AdminRoute
									exact
									path="/admin/delete/SEINEETMARNE/autres_structures/:id"
									component={DeleteSEINEETMARNEautres_structures}
								/>

								{/* USP */}
								<AdminRoute exact path="/admin/SEINEETMARNE/usp" component={SEINEETMARNE} />
								<AdminRoute exact path="/admin/SEINEETMARNE/usp/:id" component={GetUSPSEINEETMARNE} />
								<AdminRoute
									exact
									path="/admin/update/SEINEETMARNE/usp/:id"
									component={UpdateUSPSEINEETMARNE}
								/>
								<AdminRoute exact path="/admin/post/SEINEETMARNE/usp" component={PostUSPSEINEETMARNE} />
								<AdminRoute
									exact
									path="/admin/delete/SEINEETMARNE/usp/:id"
									component={DeleteUSPSEINEETMARNE}
								/>
								{/* RESEAUX */}
								<AdminRoute exact path="/admin/SEINEETMARNE/reseaux" component={SEINEETMARNERESEAUX} />
								<AdminRoute
									exact
									path="/admin/SEINEETMARNE/reseaux/:id"
									component={GetSEINEETMARNERESEAUX}
								/>
								<AdminRoute
									exact
									path="/admin/update/SEINEETMARNE/reseaux/:id"
									component={UpdateSEINEETMARNERESEAUX}
								/>
								<AdminRoute
									exact
									path="/admin/post/SEINEETMARNE/reseaux"
									component={PostSEINEETMARNERESEAUX}
								/>
								<AdminRoute
									exact
									path="/admin/delete/SEINEETMARNE/reseaux/:id"
									component={DeleteSEINEETMARNERESEAUX}
								/>
								{/* ASSOS */}
								<AdminRoute
									exact
									path="/admin/SEINEETMARNE/association"
									component={SEINEETMARNEASSOS}
								/>
								<AdminRoute
									exact
									path="/admin/SEINEETMARNE/association/:id"
									component={GetSEINEETMARNEASSOS}
								/>
								<AdminRoute
									exact
									path="/admin/update/SEINEETMARNE/association/:id"
									component={UpdateSEINEETMARNEASSOS}
								/>
								<AdminRoute
									exact
									path="/admin/post/SEINEETMARNE/association"
									component={PostSEINEETMARNEASSOS}
								/>
								<AdminRoute
									exact
									path="/admin/delete/SEINEETMARNE/association/:id"
									component={DeleteSEINEETMARNEASSOS}
								/>
								{/* HAD */}
								<AdminRoute
									exact
									path="/admin/SEINEETMARNE/equipesmobiles"
									component={SEINEETMARNEHAD}
								/>
								<AdminRoute
									exact
									path="/admin/SEINEETMARNE/equipesmobiles/:id"
									component={GetSEINEETMARNEHAD}
								/>
								<AdminRoute
									exact
									path="/admin/update/SEINEETMARNE/equipesmobiles/:id"
									component={UpdateSEINEETMARNEHAD}
								/>
								<AdminRoute
									exact
									path="/admin/post/SEINEETMARNE/equipesmobiles"
									component={PostSEINEETMARNEHAD}
								/>
								<AdminRoute
									exact
									path="/admin/delete/SEINEETMARNE/equipesmobiles/:id"
									component={DeleteSEINEETMARNEHAD}
								/>
								{/* STRUCTURES */}
								<AdminRoute
									exact
									path="/admin/SEINEETMARNE/structures"
									component={SEINEETMARNETRUCTURES}
								/>
								<AdminRoute
									exact
									path="/admin/SEINEETMARNE/structures/:id"
									component={GetSEINEETMARNESTRUCTURES}
								/>
								<AdminRoute
									exact
									path="/admin/update/SEINEETMARNE/structures/:id"
									component={UpdateSEINEETMARNESTRUCTURES}
								/>
								<AdminRoute
									exact
									path="/admin/post/SEINEETMARNE/structures"
									component={PostSEINEETMARNESTRUCTURES}
								/>
								<AdminRoute
									exact
									path="/admin/delete/SEINEETMARNE/structures/:id"
									component={DeleteSEINEETMARNESTRUCTURES}
								/>
								{/* LITS */}
								<AdminRoute exact path="/admin/SEINEETMARNE/lits" component={SEINEETMARNELITS} />
								<AdminRoute exact path="/admin/SEINEETMARNE/lits/:id" component={GetSEINEETMARNELITS} />
								<AdminRoute
									exact
									path="/admin/update/SEINEETMARNE/lits/:id"
									component={UpdateSEINEETMARNELITS}
								/>
								<AdminRoute
									exact
									path="/admin/post/SEINEETMARNE/lits"
									component={PostSEINEETMARNELITS}
								/>
								<AdminRoute
									exact
									path="/admin/delete/SEINEETMARNE/lits/:id"
									component={DeleteSEINEETMARNELITS}
								/>
							</Switch>
							<Switch>
								{/* Yvelines */}
								{/* {Autres} */}
								<AdminRoute exact path="/admin/YVELINES/autres" component={YVELINESautres} />
								<AdminRoute exact path="/admin/YVELINES/autres/:id" component={GetYVELINESautres} />
								<AdminRoute
									exact
									path="/admin/update/YVELINES/autres/:id"
									component={UpdateYVELINESautres}
								/>
								<AdminRoute exact path="/admin/post/YVELINES/autres" component={PostYVELINESautres} />
								<AdminRoute
									exact
									path="/admin/delete/YVELINES/autres/:id"
									component={DeleteYVELINESautres}
								/>

								{/* {Autres_structures} */}
								<AdminRoute
									exact
									path="/admin/YVELINES/autres_structures"
									component={YVELINESautres_structures}
								/>
								<AdminRoute
									exact
									path="/admin/YVELINES/autres_structures/:id"
									component={GetYVELINESautres_structures}
								/>
								<AdminRoute
									exact
									path="/admin/update/YVELINES/autres_structures/:id"
									component={UpdateYVELINESautres_structures}
								/>
								<AdminRoute
									exact
									path="/admin/post/YVELINES/autres_structures"
									component={PostYVELINESautres_structures}
								/>
								<AdminRoute
									exact
									path="/admin/delete/YVELINES/autres_structures/:id"
									component={DeleteYVELINESautres_structures}
								/>
								{/* USP */}
								<AdminRoute exact path="/admin/YVELINES/usp" component={YVELINES} />
								<AdminRoute exact path="/admin/YVELINES/usp/:id" component={GetUSPYVELINES} />
								<AdminRoute exact path="/admin/update/YVELINES/usp/:id" component={UpdateUSPYVELINES} />
								<AdminRoute exact path="/admin/post/YVELINES/usp" component={PostUSPYVELINES} />
								<AdminRoute exact path="/admin/delete/YVELINES/usp/:id" component={DeleteUSPYVELINES} />
								{/* RESEAUX */}
								<AdminRoute exact path="/admin/YVELINES/reseaux" component={YVELINESRESEAUX} />
								<AdminRoute exact path="/admin/YVELINES/reseaux/:id" component={GetYVELINESRESEAUX} />
								<AdminRoute
									exact
									path="/admin/update/YVELINES/reseaux/:id"
									component={UpdateYVELINESRESEAUX}
								/>
								<AdminRoute exact path="/admin/post/YVELINES/reseaux" component={PostYVELINESRESEAUX} />
								<AdminRoute
									exact
									path="/admin/delete/YVELINES/reseaux/:id"
									component={DeleteYVELINESRESEAUX}
								/>
								{/* ASSOS */}
								<AdminRoute exact path="/admin/YVELINES/association" component={YVELINESASSOS} />
								<AdminRoute exact path="/admin/YVELINES/association/:id" component={GetYVELINESASSOS} />
								<AdminRoute
									exact
									path="/admin/update/YVELINES/association/:id"
									component={UpdateYVELINESASSOS}
								/>
								<AdminRoute
									exact
									path="/admin/post/YVELINES/association"
									component={PostYVELINESASSOS}
								/>
								<AdminRoute
									exact
									path="/admin/delete/YVELINES/association/:id"
									component={DeleteYVELINESASSOS}
								/>
								{/* HAD */}
								<AdminRoute exact path="/admin/YVELINES/equipesmobiles" component={YVELINESHAD} />
								<AdminRoute
									exact
									path="/admin/YVELINES/equipesmobiles/:id"
									component={GetYVELINESHAD}
								/>
								<AdminRoute
									exact
									path="/admin/update/YVELINES/equipesmobiles/:id"
									component={UpdateYVELINESHAD}
								/>
								<AdminRoute
									exact
									path="/admin/post/YVELINES/equipesmobiles"
									component={PostYVELINESHAD}
								/>
								<AdminRoute
									exact
									path="/admin/delete/YVELINES/equipesmobiles/:id"
									component={DeleteYVELINESHAD}
								/>
								{/* STRUCTURES */}
								<AdminRoute exact path="/admin/YVELINES/structures" component={YVELINESTRUCTURES} />
								<AdminRoute
									exact
									path="/admin/YVELINES/structures/:id"
									component={GetYVELINESSTRUCTURES}
								/>
								<AdminRoute
									exact
									path="/admin/update/YVELINES/structures/:id"
									component={UpdateYVELINESSTRUCTURES}
								/>
								<AdminRoute
									exact
									path="/admin/post/YVELINES/structures"
									component={PostYVELINESSTRUCTURES}
								/>
								<AdminRoute
									exact
									path="/admin/delete/YVELINES/structures/:id"
									component={DeleteYVELINESSTRUCTURES}
								/>
								{/* LITS */}
								<AdminRoute exact path="/admin/YVELINES/lits" component={YVELINESLITS} />
								<AdminRoute exact path="/admin/YVELINES/lits/:id" component={GetYVELINESLITS} />
								<AdminRoute
									exact
									path="/admin/update/YVELINES/lits/:id"
									component={UpdateYVELINESLITS}
								/>
								<AdminRoute exact path="/admin/post/YVELINES/lits" component={PostYVELINESLITS} />
								<AdminRoute
									exact
									path="/admin/delete/YVELINES/lits/:id"
									component={DeleteYVELINESLITS}
								/>
							</Switch>
							{/* Menu*/}
							<Switch>
								{/* soins palliatifs */}
								{/* Coordination régionale */}
								<Route exact path="/menu/coordinationregionale/corpalif/" component={CorpalifPage} />
								<Route
									exact
									path="/menu/coordinationregionale/orientationregionale/"
									component={OrientationPage}
								/>
								<Route exact path="/menu/coordinationregionale/adherer/" component={AdhererPage} />
								{/* Veille medicale */}
								<Route
									exact
									path="/menu/veillemedicale/recommandation&outils/"
									component={PresentationRecommandation}
								/>
								{/* soins palliatifs */}
								<Route
									exact
									path="/menu/soinspalliatifs/demarche-palliative"
									component={DemarchePalliatifPage}
								/>
								<Route exact path="/menu/soinspalliatifs/legislation" component={LegislationPage} />
								{/* Veille medicale */}
								<Route
									exact
									path="/menu/soinspalliatifs/accompagnement"
									component={AccompagnementRecommandation}
								/>
								{/* {evenements } */}
								<Route
									exact
									path="/menu/veillemedicale/evenements/"
									component={PresentationEvenement}
								/>
								{/* {offres d'emplois et formations } */}
								<Route exact path="/offres-d'emplois" component={PresentationEmploi} />
								<Route exact path="/formations" component={PresentationFormation} />
								{/* {actualite } */}
								<Route
									exact
									path="/menu/veillemedicale/actualites/"
									component={PresentationActualite}
								/>
								{/* {Contact page}	 */}
								<Route exact path="/menu/contact" component={PresentationContact} />
								{/* {Modal Open for Login}	 */}
								<Route exact path="/login" component={OpenModalLogin} />
								{/* {rencontres } */}
								<Route
									exact
									path="/menu/veillemedicale/nosrencontres/"
									component={PresentationRencontre}
								/>
								<Route exact path="/admin/maps" component={PresentationMapEssonne} />
								<PrivateRoute
									exact
									path="/menu/veillemedicale/infosforSubscribers"
									component={PresentationInfoSubscribers}
								/>
								{/* {admin } */}
								<AdminRoute
									exact
									path="/admin/menu/soinspalliatifs/legislation/"
									component={LegislationAdminPage}
								/>
								<AdminRoute
									exact
									path="/admin/menu/soinspalliatifs/demarche/"
									component={DemarchePalliatifAdminPage}
								/>
								<AdminRoute
									exact
									path="/admin/menu/soinspalliatifs/accompagnement/"
									component={AccompagnementAdminPage}
								/>
								<AdminRoute
									exact
									path="/admin/menu/veillemedicale/recommandation&outils/get/:id"
									component={Recommandation_id}
								/>
								<AdminRoute
									exact
									path="/admin/menu/coordinationregionale/orientation/orientation/"
									component={OrientationAdminPage}
								/>
								<AdminRoute
									exact
									path="/admin/menu/coordinationregionale/adherer/adherer/"
									component={AdhererAdminPage}
								/>
								<AdminRoute
									exact
									path="/admin/menu/coordinationregionale/corpalif/corpalif/"
									component={CorpalifAdminPage}
								/>
								<AdminRoute
									exact
									path="/admin/menu/coordinationregionale/orientation/orientation/"
									component={OrientationAdminPage}
								/>
								<AdminRoute
									exact
									path="/admin/menu/coordinationregionale/adherer/adherer/"
									component={AdhererAdminPage}
								/>
								<AdminRoute
									exact
									path="/admin/menu/coordinationregionale/corpalif/update/:id"
									component={updateCorpalif}
								/>
								<AdminRoute
									exact
									path="/admin/menu/coordinationregionale/orientation/update/:id"
									component={UpdateOrientation}
								/>
								<AdminRoute
									exact
									path="/admin/menu/coordinationregionale/adherer/update/:id"
									component={UpdateAdherer}
								/>
								<AdminRoute
									exact
									path="/admin/menu/coordinationregionale/orientation/orientation/"
									component={OrientationAdminPage}
								/>
								<AdminRoute
									exact
									path="/admin/menu/soinspalliatifs/demarche/update/:id"
									component={UpdateDemarche}
								/>
								<AdminRoute
									exact
									path="/admin/menu/soinspalliatifs/legislation/update/:id"
									component={LegislationDemarche}
								/>
								<AdminRoute
									exact
									path="/admin/menu/soinspalliatifs/accompagnement/update/:id"
									component={UpdateAccompagnement}
								/>

								<AdminRoute
									exact
									path="/admin/menu/veillemedicale/recommandation&outils/"
									component={Recommandation}
								/>
								<AdminRoute
									exact
									path="/admin/menu/veillemedicale/recommandation&outils/delete/:id"
									component={DeleteOneRecommandation}
								/>
								<AdminRoute
									exact
									path="/admin/menu/veillemedicale/recommandation&outils/update/:id"
									component={UpdateRecommandations}
								/>
								<AdminRoute
									exact
									path="/admin/menu/veillemedicale/recommandation&outils/post"
									component={PostRecommandations}
								/>
								{/* evenements */}
								<AdminRoute exact path="/admin/menu/veillemedicale/evenement/" component={Evenement} />
								<AdminRoute
									exact
									path="/admin/menu/veillemedicale/evenement/delete/:id"
									component={DeleteOneEvenement}
								/>
								<AdminRoute
									exact
									path="/admin/menu/veillemedicale/evenement/update/:id"
									component={UpdateEvenement}
								/>
								<AdminRoute
									exact
									path="/admin/menu/veillemedicale/evenement/post"
									component={PostEvenement}
								/>
								{/* rencontre_inscrit, Contenu privé */}
								<AdminRoute
									exact
									path="/admin/menu/veillemedicale/privateInfo/"
									component={Rencontre_inscrit}
								/>
								<AdminRoute
									exact
									path="/admin/menu/veillemedicale/privateInfo/delete/:id"
									component={DeleteOneRencontre_inscrit}
								/>
								<AdminRoute
									exact
									path="/admin/menu/veillemedicale/privateInfo/update/:id"
									component={UpdateRencontre_inscrit}
								/>
								<AdminRoute
									exact
									path="/admin/menu/veillemedicale/privateInfo/post"
									component={PostRencontre_inscrit}
								/>
								{/* rencontre */}
								<AdminRoute exact path="/admin/menu/veillemedicale/rencontre/" component={Rencontre} />
								<AdminRoute
									exact
									path="/admin/menu/veillemedicale/rencontre/delete/:id"
									component={DeleteOneRencontre}
								/>
								<AdminRoute
									exact
									path="/admin/menu/veillemedicale/rencontre/update/:id"
									component={UpdateRencontre}
								/>
								<AdminRoute
									exact
									path="/admin/menu/veillemedicale/rencontre/post"
									component={PostRencontre}
								/>
								{/* actualite */}
								<AdminRoute exact path="/admin/menu/veillemedicale/actualite/" component={Actualite} />
								<AdminRoute
									exact
									path="/admin/menu/veillemedicale/actualite/delete/:id"
									component={DeleteOneActualite}
								/>
								<AdminRoute
									exact
									path="/admin/menu/veillemedicale/actualite/update/:id"
									component={UpdateActualite}
								/>
								<AdminRoute
									exact
									path="/admin/menu/veillemedicale/actualite/post"
									component={PostActualite}
								/>
								{/* offres d'emploi */}
								<AdminRoute exact path="/admin/menu/offres-emplois" component={OffreEmploi} />
								<AdminRoute
									exact
									path="/admin/menu/offres-emplois/delete/:id"
									component={DeleteOneOffre}
								/>
								<AdminRoute
									exact
									path="/admin/menu/offres-emplois/update/:id"
									component={UpdateOffres}
								/>
								<AdminRoute exact path="/admin/menu/offres-emplois/post" component={PostOffres} />
								{/* formation */}
								<AdminRoute exact path="/admin/menu/formations" component={Formation} />
								<AdminRoute
									exact
									path="/admin/menu/formations/delete/:id"
									component={DeleteOneFormations}
								/>
								<AdminRoute
									exact
									path="/admin/menu/formations/update/:id"
									component={UpdateFormations}
								/>
								<AdminRoute exact path="/admin/menu/formations/post" component={PostFormation} />
								{/* file */}
								{/* HomePage */}
								{/* Caroussel1	*/}
								<AdminRoute exact path="/admin/HomePage" component={HomePageAdminHome} />
								<AdminRoute exact path="/admin/carousel" component={SectioncarousselsAdmin} />
								<AdminRoute
									exact
									path="/admin/menu/caroussel/update/:id"
									component={UpdateCaroussel1}
								/>
								{/* Caroussel2	*/}
								<AdminRoute exact path="/admin/adherent" component={SectioncadherentAdmin} />
								<AdminRoute exact path="/admin/menu/adherent/update/:id" component={UpdateCaroussel2} />
								{/* formulaire d'admission	*/}
								<AdminRoute exact path="/admin/formulaire" component={PresentationFile} />
								<AdminRoute exact path="/admin/menu/formulaire/update/:id" component={Updatefichier} />
								{/* Agenda	*/}
								{/* Agenda1	*/}
								<AdminRoute exact path="/admin/agenda1" component={SectionAgenda1Admin} />
								<AdminRoute exact path="/admin/menu/agenda1/update/:id" component={UpdateAgenda1} />
								{/* Agenda2	*/}
								<AdminRoute exact path="/admin/agenda2" component={SectionAgenda2Admin} />
								<AdminRoute exact path="/admin/menu/agenda2/update/:id" component={UpdateAgenda2} />
								{/* Offre d'emploi	*/}
								<AdminRoute exact path="/admin/offre" component={SectionOffreAdmin} />
								<AdminRoute exact path="/admin/menu/offre/update/:id" component={UpdateOffre} />
								{/* {USERS} // ALL PROFILES // NEWSLETTERS // ALL ADHRENTS ... */}
								<AdminRoute exact path="/admin/users/all" component={SectionProfilesAll} />
								<AdminRoute exact path="/admin/users/adherents" component={SectionProfilesAdherent} />
								<AdminRoute
									exact
									path="/admin/users/individuel"
									component={SectionProfilesIndividuel}
								/>
								<AdminRoute exact path="/admin/users/collectif" component={SectionProfilesCollectif} />
								<AdminRoute
									exact
									path="/admin/users/newsletters"
									component={SectionProfilesNewsletter}
								/>
								{/* <AdminRoute exact path="/admin/menu/offre/update/:id" component={UpdateOffre} />
								<AdminRoute exact path="/admin/menu/offre/update/:id" component={UpdateOffre} />
								<AdminRoute exact path="/admin/menu/offre/update/:id" component={UpdateOffre} />
								<AdminRoute exact path="/admin/menu/offre/update/:id" component={UpdateOffre} /> */}
							</Switch>
						</div>
					</div>
				</Router>
			</Provider>
		)
	}
}

export default App
