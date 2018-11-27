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

import CreateProfile from 'views/create-profile/CreateProfile'
import EditProfile from 'views/create-profile/UpdateProfile'

// Reset Password

import ForgotPassword from 'views/SigninPage/ForgotPage/ResetPassword'
import UpdatePassword from 'views/SigninPage/ForgotPage/UpdatePassword'
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
// Essonne
import PresentationLitsEssonne from 'views/Header/Sections/Departement/Essonne/structures/lits/presentation'
import PresentationReseauxEssonne from 'views/Header/Sections/Departement/Essonne/structures/Reseaux/presentation'
import PresentationAssociationEssonne from 'views/Header/Sections/Departement/Essonne/structures/Association/presentation'
import PresentationStructureEssonne from 'views/Header/Sections/Departement/Essonne/structures/structure/presentation'
import PresentationUspEssonne from 'views/Header/Sections/Departement/Essonne/structures/Usp/presentation'
import PresentationHadEssonne from 'views/Header/Sections/Departement/Essonne/structures/Team/presentation'
// Val de Marne
import PresentationLitsValdeMarne from 'views/Header/Sections/Departement/ValdeMarne/structures/lits/presentation'
import PresentationReseauxValdeMarne from 'views/Header/Sections/Departement/ValdeMarne/structures/Reseaux/presentation'
import PresentationAssociationValdeMarne from 'views/Header/Sections/Departement/ValdeMarne/structures/Association/presentation'
import PresentationStructureValdeMarne from 'views/Header/Sections/Departement/ValdeMarne/structures/structure/presentation'
import PresentationUspValdeMarne from 'views/Header/Sections/Departement/ValdeMarne/structures/Usp/presentation'
import PresentationHadValdeMarne from 'views/Header/Sections/Departement/ValdeMarne/structures/Team/presentation'
// Seine Saint Denis
import PresentationLitsSeineSaintDenis from 'views/Header/Sections/Departement/SeineSaintDenis/structures/lits/presentation'
import PresentationReseauxSeineSaintDenis from 'views/Header/Sections/Departement/SeineSaintDenis/structures/Reseaux/presentation'
import PresentationAssociationSeineSaintDenis from 'views/Header/Sections/Departement/SeineSaintDenis/structures/Association/presentation'
import PresentationStructureSeineSaintDenis from 'views/Header/Sections/Departement/SeineSaintDenis/structures/structure/presentation'
import PresentationUspSeineSaintDenis from 'views/Header/Sections/Departement/SeineSaintDenis/structures/Usp/presentation'
import PresentationHadSeineSaintDenis from 'views/Header/Sections/Departement/SeineSaintDenis/structures/Team/presentation'
// Hauts de Seine
import PresentationLitsHautsdeSeine from 'views/Header/Sections/Departement/HautsdeSeine/structures/lits/presentation'
import PresentationReseauxHautsdeSeine from 'views/Header/Sections/Departement/HautsdeSeine/structures/Reseaux/presentation'
import PresentationAssociationHautsdeSeine from 'views/Header/Sections/Departement/HautsdeSeine/structures/Association/presentation'
import PresentationStructureHautsdeSeine from 'views/Header/Sections/Departement/HautsdeSeine/structures/structure/presentation'
import PresentationUspHautsdeSeine from 'views/Header/Sections/Departement/HautsdeSeine/structures/Usp/presentation'
import PresentationHadHautsdeSeine from 'views/Header/Sections/Departement/HautsdeSeine/structures/Team/presentation'
// Val d'Oise
import PresentationLitsValdOise from 'views/Header/Sections/Departement/ValdOise/structures/lits/presentation'
import PresentationReseauxValdOise from 'views/Header/Sections/Departement/ValdOise/structures/Reseaux/presentation'
import PresentationAssociationValdOise from 'views/Header/Sections/Departement/ValdOise/structures/Association/presentation'
import PresentationStructureValdOise from 'views/Header/Sections/Departement/ValdOise/structures/structure/presentation'
import PresentationUspValdOise from 'views/Header/Sections/Departement/ValdOise/structures/Usp/presentation'
import PresentationHadValdOise from 'views/Header/Sections/Departement/ValdOise/structures/Team/presentation'
// Seine et Marne
import PresentationLitsSeineetMarne from 'views/Header/Sections/Departement/SeineetMarne/structures/lits/presentation'
import PresentationReseauxSeineetMarne from 'views/Header/Sections/Departement/SeineetMarne/structures/Reseaux/presentation'
import PresentationAssociationSeineetMarne from 'views/Header/Sections/Departement/SeineetMarne/structures/Association/presentation'
import PresentationStructureSeineetMarne from 'views/Header/Sections/Departement/SeineetMarne/structures/structure/presentation'
import PresentationUspSeineetMarne from 'views/Header/Sections/Departement/SeineetMarne/structures/Usp/presentation'
import PresentationHadSeineetMarne from 'views/Header/Sections/Departement/SeineetMarne/structures/Team/presentation'
// Yvelines
import PresentationLitsYvelines from 'views/Header/Sections/Departement/Yvelines/structures/lits/presentation'
import PresentationReseauxYvelines from 'views/Header/Sections/Departement/Yvelines/structures/Reseaux/presentation'
import PresentationAssociationYvelines from 'views/Header/Sections/Departement/Yvelines/structures/Association/presentation'
import PresentationStructureYvelines from 'views/Header/Sections/Departement/Yvelines/structures/structure/presentation'
import PresentationUspYvelines from 'views/Header/Sections/Departement/Yvelines/structures/Usp/presentation'
import PresentationHadYvelines from 'views/Header/Sections/Departement/Yvelines/structures/Team/presentation'
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

// MENU
// VEILLE MEDICALE
// RECOMMANDATIONS & OUTILS
import PresentationRecommandation from 'views/Menu/VeilleMedicale/Recommandations/Section/getData/recommandation&outils.jsx'
// import GetRecommandation from 'views/Menu/VeilleMedicale/Recommandations/get'
import Recommandation_id from 'views/Menu/VeilleMedicale/Recommandations/Section/get_id/get_id.js'
// EVENEMENTS

import PresentationEvenement from 'views/Menu/VeilleMedicale/evenements/getData/evenements.jsx'

// NOS RENCONTRES

import PresentationRencontre from 'views/Menu/VeilleMedicale/rencontres/getData/rencontres.jsx'

// ACTUALITES
import PresentationActualite from 'views/Menu/VeilleMedicale/actualites/getData/actualites.jsx'

//Admin
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
// ACTUALITE
import Actualite from 'views/Admin/Menu/VeilleMedicale/actualite/getData/actualites.jsx'
import DeleteOneActualite from 'views/Admin/Menu/VeilleMedicale/actualite/delete/PresentationDelete'
import UpdateActualite from 'views/Admin/Menu/VeilleMedicale/actualite/update/Header'
import PostActualite from 'views/Admin/Menu/VeilleMedicale/actualite/post/Header'

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
							<Route exact path="/reset/:token" component={UpdatePassword} />

							{/*  Annuaire */}
							{/* paris */}
							<Route exact path="/annuaire/paris" component={ModalSearchParis} />
							{/* Offres de soins */}
							<Route exact path="/annuaire/Paris/lits" component={PresentationLitsParis} />
							<Route exact path="/annuaire/Paris/structure" component={PresentationStructureParis} />
							<Route exact path="/annuaire/Paris/association" component={PresentationAssociationParis} />
							<Route exact path="/annuaire/Paris/equipesmobiles" component={PresentationHadParis} />
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
							<Route exact path="/annuaire/Yvelines/equipesmobiles" component={PresentationHadYvelines} />
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
							{/* Offres de soins */}
							<Route exact path="/annuaire/essonne/lits" component={PresentationLitsEssonne} />
							<Route exact path="/annuaire/essonne/structure" component={PresentationStructureEssonne} />
							<Route
								exact
								path="/annuaire/essonne/association"
								component={PresentationAssociationEssonne}
							/>
							<Route exact path="/annuaire/essonne/equipesmobiles" component={PresentationHadEssonne} />
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
							<Route exact path="/annuaire/ValdeMarne/equipesmobiles" component={PresentationHadValdeMarne} />
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
							<Route exact path="/annuaire/HautsdeSeine/equipesmobiles" component={PresentationHadHautsdeSeine} />
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
								<PrivateRoute exact path="/admin/menu/veillemedicale" component={VeillemedicalePage} />

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
								<PrivateRoute exact path="/admin/paris/equipesmobiles" component={ParisHAD} />
								<PrivateRoute exact path="/admin/paris/equipesmobiles/:id" component={GetPARISHAD} />
								<PrivateRoute
									exact
									path="/admin/update/paris/equipesmobiles/:id"
									component={UpdatePARISHAD}
								/>
								<PrivateRoute exact path="/admin/post/paris/equipesmobiles" component={PostPARISHAD} />
								<PrivateRoute
									exact
									path="/admin/delete/paris/equipesmobiles/:id"
									component={DeletePARISHAD}
								/>
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

								{/* USP */}
								<PrivateRoute exact path="/admin/hautdeseine/usp" component={HautsdeSeine} />
								<PrivateRoute exact path="/admin/HAUTDESEINE/usp/:id" component={GetUSPHAUTDESEINE} />
								<PrivateRoute
									exact
									path="/admin/update/HAUTDESEINE/usp/:id"
									component={UpdateUSPHAUTDESEINE}
								/>
								<PrivateRoute exact path="/admin/post/HAUTDESEINE/usp" component={PostUSPHAUTDESEINE} />
								<PrivateRoute
									exact
									path="/admin/delete/HAUTDESEINE/usp/:id"
									component={DeleteUSPHAUTDESEINE}
								/>
								{/* RESEAUX */}
								<PrivateRoute exact path="/admin/HAUTDESEINE/reseaux" component={HAUTDESEINERESEAUX} />
								<PrivateRoute
									exact
									path="/admin/HAUTDESEINE/reseaux/:id"
									component={GetHAUTDESEINERESEAUX}
								/>
								<PrivateRoute
									exact
									path="/admin/update/HAUTDESEINE/reseaux/:id"
									component={UpdateHAUTDESEINERESEAUX}
								/>
								<PrivateRoute
									exact
									path="/admin/post/HAUTDESEINE/reseaux"
									component={PostHAUTDESEINERESEAUX}
								/>
								<PrivateRoute
									exact
									path="/admin/delete/HAUTDESEINE/reseaux/:id"
									component={DeleteHAUTDESEINERESEAUX}
								/>
								{/* ASSOS */}
								<PrivateRoute
									exact
									path="/admin/HAUTDESEINE/association"
									component={HAUTDESEINEASSOS}
								/>
								<PrivateRoute
									exact
									path="/admin/HAUTDESEINE/association/:id"
									component={GetHAUTDESEINEASSOS}
								/>
								<PrivateRoute
									exact
									path="/admin/update/HAUTDESEINE/association/:id"
									component={UpdateHAUTDESEINEASSOS}
								/>
								<PrivateRoute
									exact
									path="/admin/post/HAUTDESEINE/association"
									component={PostHAUTDESEINEASSOS}
								/>
								<PrivateRoute
									exact
									path="/admin/delete/HAUTDESEINE/association/:id"
									component={DeleteHAUTDESEINEASSOS}
								/>
								{/* HAD */}
								<PrivateRoute exact path="/admin/HAUTDESEINE/had" component={HAUTDESEINEHAD} />
								<PrivateRoute exact path="/admin/HAUTDESEINE/had/:id" component={GetHAUTDESEINEHAD} />
								<PrivateRoute
									exact
									path="/admin/update/HAUTDESEINE/had/:id"
									component={UpdateHAUTDESEINEHAD}
								/>
								<PrivateRoute exact path="/admin/post/HAUTDESEINE/had" component={PostHAUTDESEINEHAD} />
								<PrivateRoute
									exact
									path="/admin/delete/HAUTDESEINE/had/:id"
									component={DeleteHAUTDESEINEHAD}
								/>
								{/* STRUCTURES */}
								<PrivateRoute
									exact
									path="/admin/HAUTDESEINE/structures"
									component={HAUTDESEINESTRUCTURES}
								/>
								<PrivateRoute
									exact
									path="/admin/HAUTDESEINE/structures/:id"
									component={GetHAUTDESEINESTRUCTURES}
								/>
								<PrivateRoute
									exact
									path="/admin/update/HAUTDESEINE/structures/:id"
									component={UpdateHAUTDESEINESTRUCTURES}
								/>
								<PrivateRoute
									exact
									path="/admin/post/HAUTDESEINE/structures"
									component={PostHAUTDESEINESTRUCTURES}
								/>
								<PrivateRoute
									exact
									path="/admin/delete/HAUTDESEINE/structures/:id"
									component={DeleteHAUTDESEINESTRUCTURES}
								/>
								{/* LITS */}
								<PrivateRoute exact path="/admin/HAUTDESEINE/lits" component={HAUTDESEINELITS} />
								<PrivateRoute exact path="/admin/HAUTDESEINE/lits/:id" component={GetHAUTDESEINELITS} />
								<PrivateRoute
									exact
									path="/admin/update/HAUTDESEINE/lits/:id"
									component={UpdateHAUTDESEINELITS}
								/>
								<PrivateRoute
									exact
									path="/admin/post/HAUTDESEINE/lits"
									component={PostHAUTDESEINELITS}
								/>
								<PrivateRoute
									exact
									path="/admin/delete/HAUTDESEINE/lits/:id"
									component={DeleteHAUTDESEINELITS}
								/>
							</Switch>
							<Switch>
								{/* Val de Marne */}

								{/* USP */}
								<PrivateRoute exact path="/admin/VALDEMARNE/usp" component={VALDEMARNE} />
								<PrivateRoute exact path="/admin/VALDEMARNE/usp/:id" component={GetUSPVALDEMARNE} />
								<PrivateRoute
									exact
									path="/admin/update/VALDEMARNE/usp/:id"
									component={UpdateUSPVALDEMARNE}
								/>
								<PrivateRoute exact path="/admin/post/VALDEMARNE/usp" component={PostUSPVALDEMARNE} />
								<PrivateRoute
									exact
									path="/admin/delete/VALDEMARNE/usp/:id"
									component={DeleteUSPVALDEMARNE}
								/>
								{/* RESEAUX */}
								<PrivateRoute exact path="/admin/VALDEMARNE/reseaux" component={VALDEMARNERESEAUX} />
								<PrivateRoute
									exact
									path="/admin/VALDEMARNE/reseaux/:id"
									component={GetVALDEMARNERESEAUX}
								/>
								<PrivateRoute
									exact
									path="/admin/update/VALDEMARNE/reseaux/:id"
									component={UpdateVALDEMARNERESEAUX}
								/>
								<PrivateRoute
									exact
									path="/admin/post/VALDEMARNE/reseaux"
									component={PostVALDEMARNERESEAUX}
								/>
								<PrivateRoute
									exact
									path="/admin/delete/VALDEMARNE/reseaux/:id"
									component={DeleteVALDEMARNERESEAUX}
								/>
								{/* ASSOS */}
								<PrivateRoute exact path="/admin/VALDEMARNE/association" component={VALDEMARNEASSOS} />
								<PrivateRoute
									exact
									path="/admin/VALDEMARNE/association/:id"
									component={GetVALDEMARNEASSOS}
								/>
								<PrivateRoute
									exact
									path="/admin/update/VALDEMARNE/association/:id"
									component={UpdateVALDEMARNEASSOS}
								/>
								<PrivateRoute
									exact
									path="/admin/post/VALDEMARNE/association"
									component={PostVALDEMARNEASSOS}
								/>
								<PrivateRoute
									exact
									path="/admin/delete/VALDEMARNE/association/:id"
									component={DeleteVALDEMARNEASSOS}
								/>
								{/* HAD */}
								<PrivateRoute exact path="/admin/VALDEMARNE/equipesmobiles" component={VALDEMARNEHAD} />
								<PrivateRoute
									exact
									path="/admin/VALDEMARNE/equipesmobiles/:id"
									component={GetVALDEMARNEHAD}
								/>
								<PrivateRoute
									exact
									path="/admin/update/VALDEMARNE/equipesmobiles/:id"
									component={UpdateVALDEMARNEHAD}
								/>
								<PrivateRoute
									exact
									path="/admin/post/VALDEMARNE/equipesmobiles"
									component={PostVALDEMARNEHAD}
								/>
								<PrivateRoute
									exact
									path="/admin/delete/VALDEMARNE/equipesmobiles/:id"
									component={DeleteVALDEMARNEHAD}
								/>
								{/* STRUCTURES */}
								<PrivateRoute
									exact
									path="/admin/VALDEMARNE/structures"
									component={VALDEMARNETRUCTURES}
								/>
								<PrivateRoute
									exact
									path="/admin/VALDEMARNE/structures/:id"
									component={GetVALDEMARNESTRUCTURES}
								/>
								<PrivateRoute
									exact
									path="/admin/update/VALDEMARNE/structures/:id"
									component={UpdateVALDEMARNESTRUCTURES}
								/>
								<PrivateRoute
									exact
									path="/admin/post/VALDEMARNE/structures"
									component={PostVALDEMARNESTRUCTURES}
								/>
								<PrivateRoute
									exact
									path="/admin/delete/VALDEMARNE/structures/:id"
									component={DeleteVALDEMARNESTRUCTURES}
								/>
								{/* LITS */}
								<PrivateRoute exact path="/admin/VALDEMARNE/lits" component={VALDEMARNELITS} />
								<PrivateRoute exact path="/admin/VALDEMARNE/lits/:id" component={GetVALDEMARNELITS} />
								<PrivateRoute
									exact
									path="/admin/update/VALDEMARNE/lits/:id"
									component={UpdateVALDEMARNELITS}
								/>
								<PrivateRoute exact path="/admin/post/VALDEMARNE/lits" component={PostVALDEMARNELITS} />
								<PrivateRoute
									exact
									path="/admin/delete/VALDEMARNE/lits/:id"
									component={DeleteVALDEMARNELITS}
								/>
							</Switch>
							<Switch>
								{/* Seine Saint Denis */}

								{/* USP */}
								<PrivateRoute exact path="/admin/SEINESAINTDENIS/usp" component={SEINESAINTDENIS} />
								<PrivateRoute
									exact
									path="/admin/SEINESAINTDENIS/usp/:id"
									component={GetUSPSEINESAINTDENIS}
								/>
								<PrivateRoute
									exact
									path="/admin/update/SEINESAINTDENIS/usp/:id"
									component={UpdateUSPSEINESAINTDENIS}
								/>
								<PrivateRoute
									exact
									path="/admin/post/SEINESAINTDENIS/usp"
									component={PostUSPSEINESAINTDENIS}
								/>
								<PrivateRoute
									exact
									path="/admin/delete/SEINESAINTDENIS/usp/:id"
									component={DeleteUSPSEINESAINTDENIS}
								/>
								{/* RESEAUX */}
								<PrivateRoute
									exact
									path="/admin/SEINESAINTDENIS/reseaux"
									component={SEINESAINTDENISRESEAUX}
								/>
								<PrivateRoute
									exact
									path="/admin/SEINESAINTDENIS/reseaux/:id"
									component={GetSEINESAINTDENISRESEAUX}
								/>
								<PrivateRoute
									exact
									path="/admin/update/SEINESAINTDENIS/reseaux/:id"
									component={UpdateSEINESAINTDENISRESEAUX}
								/>
								<PrivateRoute
									exact
									path="/admin/post/SEINESAINTDENIS/reseaux"
									component={PostSEINESAINTDENISRESEAUX}
								/>
								<PrivateRoute
									exact
									path="/admin/delete/SEINESAINTDENIS/reseaux/:id"
									component={DeleteSEINESAINTDENISRESEAUX}
								/>
								{/* ASSOS */}
								<PrivateRoute
									exact
									path="/admin/SEINESAINTDENIS/association"
									component={SEINESAINTDENISASSOS}
								/>
								<PrivateRoute
									exact
									path="/admin/SEINESAINTDENIS/association/:id"
									component={GetSEINESAINTDENISASSOS}
								/>
								<PrivateRoute
									exact
									path="/admin/update/SEINESAINTDENIS/association/:id"
									component={UpdateSEINESAINTDENISASSOS}
								/>
								<PrivateRoute
									exact
									path="/admin/post/SEINESAINTDENIS/association"
									component={PostSEINESAINTDENISASSOS}
								/>
								<PrivateRoute
									exact
									path="/admin/delete/SEINESAINTDENIS/association/:id"
									component={DeleteSEINESAINTDENISASSOS}
								/>
								{/* HAD */}
								<PrivateRoute
									exact
									path="/admin/SEINESAINTDENIS/equipesmobiles"
									component={SEINESAINTDENISHAD}
								/>
								<PrivateRoute
									exact
									path="/admin/SEINESAINTDENIS/equipesmobiles/:id"
									component={GetSEINESAINTDENISHAD}
								/>
								<PrivateRoute
									exact
									path="/admin/update/SEINESAINTDENIS/equipesmobiles/:id"
									component={UpdateSEINESAINTDENISHAD}
								/>
								<PrivateRoute
									exact
									path="/admin/post/SEINESAINTDENIS/equipesmobiles"
									component={PostSEINESAINTDENISHAD}
								/>
								<PrivateRoute
									exact
									path="/admin/delete/SEINESAINTDENIS/equipesmobiles/:id"
									component={DeleteSEINESAINTDENISHAD}
								/>
								{/* STRUCTURES */}
								<PrivateRoute
									exact
									path="/admin/SEINESAINTDENIS/structures"
									component={SEINESAINTDENISTRUCTURES}
								/>
								<PrivateRoute
									exact
									path="/admin/SEINESAINTDENIS/structures/:id"
									component={GetSEINESAINTDENISSTRUCTURES}
								/>
								<PrivateRoute
									exact
									path="/admin/update/SEINESAINTDENIS/structures/:id"
									component={UpdateSEINESAINTDENISSTRUCTURES}
								/>
								<PrivateRoute
									exact
									path="/admin/post/SEINESAINTDENIS/structures"
									component={PostSEINESAINTDENISSTRUCTURES}
								/>
								<PrivateRoute
									exact
									path="/admin/delete/SEINESAINTDENIS/structures/:id"
									component={DeleteSEINESAINTDENISSTRUCTURES}
								/>
								{/* LITS */}
								<PrivateRoute
									exact
									path="/admin/SEINESAINTDENIS/lits"
									component={SEINESAINTDENISLITS}
								/>
								<PrivateRoute
									exact
									path="/admin/SEINESAINTDENIS/lits/:id"
									component={GetSEINESAINTDENISLITS}
								/>
								<PrivateRoute
									exact
									path="/admin/update/SEINESAINTDENIS/lits/:id"
									component={UpdateSEINESAINTDENISLITS}
								/>
								<PrivateRoute
									exact
									path="/admin/post/SEINESAINTDENIS/lits"
									component={PostSEINESAINTDENISLITS}
								/>
								<PrivateRoute
									exact
									path="/admin/delete/SEINESAINTDENIS/lits/:id"
									component={DeleteSEINESAINTDENISLITS}
								/>
							</Switch>
							<Switch>
								{/* Val d'Oise */}
								{/* USP */}
								<PrivateRoute exact path="/admin/VALDOISE/usp" component={VALDOISE} />
								<PrivateRoute exact path="/admin/VALDOISE/usp/:id" component={GetUSPVALDOISE} />
								<PrivateRoute
									exact
									path="/admin/update/VALDOISE/usp/:id"
									component={UpdateUSPVALDOISE}
								/>
								<PrivateRoute exact path="/admin/post/VALDOISE/usp" component={PostUSPVALDOISE} />
								<PrivateRoute
									exact
									path="/admin/delete/VALDOISE/usp/:id"
									component={DeleteUSPVALDOISE}
								/>
								{/* RESEAUX */}
								<PrivateRoute exact path="/admin/VALDOISE/reseaux" component={VALDOISERESEAUX} />
								<PrivateRoute exact path="/admin/VALDOISE/reseaux/:id" component={GetVALDOISERESEAUX} />
								<PrivateRoute
									exact
									path="/admin/update/VALDOISE/reseaux/:id"
									component={UpdateVALDOISERESEAUX}
								/>
								<PrivateRoute
									exact
									path="/admin/post/VALDOISE/reseaux"
									component={PostVALDOISERESEAUX}
								/>
								<PrivateRoute
									exact
									path="/admin/delete/VALDOISE/reseaux/:id"
									component={DeleteVALDOISERESEAUX}
								/>
								{/* ASSOS */}
								<PrivateRoute exact path="/admin/VALDOISE/association" component={VALDOISEASSOS} />
								<PrivateRoute
									exact
									path="/admin/VALDOISE/association/:id"
									component={GetVALDOISEASSOS}
								/>
								<PrivateRoute
									exact
									path="/admin/update/VALDOISE/association/:id"
									component={UpdateVALDOISEASSOS}
								/>
								<PrivateRoute
									exact
									path="/admin/post/VALDOISE/association"
									component={PostVALDOISEASSOS}
								/>
								<PrivateRoute
									exact
									path="/admin/delete/VALDOISE/association/:id"
									component={DeleteVALDOISEASSOS}
								/>
								{/* HAD */}
								<PrivateRoute exact path="/admin/VALDOISE/equipesmobiles" component={VALDOISEHAD} />
								<PrivateRoute
									exact
									path="/admin/VALDOISE/equipesmobiles/:id"
									component={GetVALDOISEHAD}
								/>
								<PrivateRoute
									exact
									path="/admin/update/VALDOISE/equipesmobiles/:id"
									component={UpdateVALDOISEHAD}
								/>
								<PrivateRoute
									exact
									path="/admin/post/VALDOISE/equipesmobiles"
									component={PostVALDOISEHAD}
								/>
								<PrivateRoute
									exact
									path="/admin/delete/VALDOISE/equipesmobiles/:id"
									component={DeleteVALDOISEHAD}
								/>
								{/* STRUCTURES */}
								<PrivateRoute exact path="/admin/VALDOISE/structures" component={VALDOISETRUCTURES} />
								<PrivateRoute
									exact
									path="/admin/VALDOISE/structures/:id"
									component={GetVALDOISESTRUCTURES}
								/>
								<PrivateRoute
									exact
									path="/admin/update/VALDOISE/structures/:id"
									component={UpdateVALDOISESTRUCTURES}
								/>
								<PrivateRoute
									exact
									path="/admin/post/VALDOISE/structures"
									component={PostVALDOISESTRUCTURES}
								/>
								<PrivateRoute
									exact
									path="/admin/delete/VALDOISE/structures/:id"
									component={DeleteVALDOISESTRUCTURES}
								/>
								{/* LITS */}
								<PrivateRoute exact path="/admin/VALDOISE/lits" component={VALDOISELITS} />
								<PrivateRoute exact path="/admin/VALDOISE/lits/:id" component={GetVALDOISELITS} />
								<PrivateRoute
									exact
									path="/admin/update/VALDOISE/lits/:id"
									component={UpdateVALDOISELITS}
								/>
								<PrivateRoute exact path="/admin/post/VALDOISE/lits" component={PostVALDOISELITS} />
								<PrivateRoute
									exact
									path="/admin/delete/VALDOISE/lits/:id"
									component={DeleteVALDOISELITS}
								/>
							</Switch>
							<Switch>
								{/* Essonne */}
								{/* USP */}
								<PrivateRoute exact path="/admin/ESSONNE/usp" component={ESSONNE} />
								<PrivateRoute exact path="/admin/ESSONNE/usp/:id" component={GetUSPESSONNE} />
								<PrivateRoute exact path="/admin/update/ESSONNE/usp/:id" component={UpdateUSPESSONNE} />
								<PrivateRoute exact path="/admin/post/ESSONNE/usp" component={PostUSPESSONNE} />
								<PrivateRoute exact path="/admin/delete/ESSONNE/usp/:id" component={DeleteUSPESSONNE} />
								{/* RESEAUX */}
								<PrivateRoute exact path="/admin/ESSONNE/reseaux" component={ESSONNERESEAUX} />
								<PrivateRoute exact path="/admin/ESSONNE/reseaux/:id" component={GetESSONNERESEAUX} />
								<PrivateRoute
									exact
									path="/admin/update/ESSONNE/reseaux/:id"
									component={UpdateESSONNERESEAUX}
								/>
								<PrivateRoute exact path="/admin/post/ESSONNE/reseaux" component={PostESSONNERESEAUX} />
								<PrivateRoute
									exact
									path="/admin/delete/ESSONNE/reseaux/:id"
									component={DeleteESSONNERESEAUX}
								/>
								{/* ASSOS */}
								<PrivateRoute exact path="/admin/ESSONNE/association" component={ESSONNEASSOS} />
								<PrivateRoute exact path="/admin/ESSONNE/association/:id" component={GetESSONNEASSOS} />
								<PrivateRoute
									exact
									path="/admin/update/ESSONNE/association/:id"
									component={UpdateESSONNEASSOS}
								/>
								<PrivateRoute
									exact
									path="/admin/post/ESSONNE/association"
									component={PostESSONNEASSOS}
								/>
								<PrivateRoute
									exact
									path="/admin/delete/ESSONNE/association/:id"
									component={DeleteESSONNEASSOS}
								/>
								{/* HAD */}
								<PrivateRoute exact path="/admin/ESSONNE/equipesmobiles" component={ESSONNEHAD} />
								<PrivateRoute
									exact
									path="/admin/ESSONNE/equipesmobiles/:id"
									component={GetESSONNEHAD}
								/>
								<PrivateRoute
									exact
									path="/admin/update/ESSONNE/equipesmobiles/:id"
									component={UpdateESSONNEHAD}
								/>
								<PrivateRoute
									exact
									path="/admin/post/ESSONNE/equipesmobiles"
									component={PostESSONNEHAD}
								/>
								<PrivateRoute
									exact
									path="/admin/delete/ESSONNE/equipesmobiles/:id"
									component={DeleteESSONNEHAD}
								/>
								{/* STRUCTURES */}
								<PrivateRoute exact path="/admin/ESSONNE/structures" component={ESSONNETRUCTURES} />
								<PrivateRoute
									exact
									path="/admin/ESSONNE/structures/:id"
									component={GetESSONNESTRUCTURES}
								/>
								<PrivateRoute
									exact
									path="/admin/update/ESSONNE/structures/:id"
									component={UpdateESSONNESTRUCTURES}
								/>
								<PrivateRoute
									exact
									path="/admin/post/ESSONNE/structures"
									component={PostESSONNESTRUCTURES}
								/>
								<PrivateRoute
									exact
									path="/admin/delete/ESSONNE/structures/:id"
									component={DeleteESSONNESTRUCTURES}
								/>
								{/* LITS */}
								<PrivateRoute exact path="/admin/ESSONNE/lits" component={ESSONNELITS} />
								<PrivateRoute exact path="/admin/ESSONNE/lits/:id" component={GetESSONNELITS} />
								<PrivateRoute
									exact
									path="/admin/update/ESSONNE/lits/:id"
									component={UpdateESSONNELITS}
								/>
								<PrivateRoute exact path="/admin/post/ESSONNE/lits" component={PostESSONNELITS} />
								<PrivateRoute
									exact
									path="/admin/delete/ESSONNE/lits/:id"
									component={DeleteESSONNELITS}
								/>
							</Switch>
							<Switch>
								{/* Seine et Marne */}
								{/* USP */}
								<PrivateRoute exact path="/admin/SEINEETMARNE/usp" component={SEINEETMARNE} />
								<PrivateRoute exact path="/admin/SEINEETMARNE/usp/:id" component={GetUSPSEINEETMARNE} />
								<PrivateRoute
									exact
									path="/admin/update/SEINEETMARNE/usp/:id"
									component={UpdateUSPSEINEETMARNE}
								/>
								<PrivateRoute
									exact
									path="/admin/post/SEINEETMARNE/usp"
									component={PostUSPSEINEETMARNE}
								/>
								<PrivateRoute
									exact
									path="/admin/delete/SEINEETMARNE/usp/:id"
									component={DeleteUSPSEINEETMARNE}
								/>
								{/* RESEAUX */}
								<PrivateRoute
									exact
									path="/admin/SEINEETMARNE/reseaux"
									component={SEINEETMARNERESEAUX}
								/>
								<PrivateRoute
									exact
									path="/admin/SEINEETMARNE/reseaux/:id"
									component={GetSEINEETMARNERESEAUX}
								/>
								<PrivateRoute
									exact
									path="/admin/update/SEINEETMARNE/reseaux/:id"
									component={UpdateSEINEETMARNERESEAUX}
								/>
								<PrivateRoute
									exact
									path="/admin/post/SEINEETMARNE/reseaux"
									component={PostSEINEETMARNERESEAUX}
								/>
								<PrivateRoute
									exact
									path="/admin/delete/SEINEETMARNE/reseaux/:id"
									component={DeleteSEINEETMARNERESEAUX}
								/>
								{/* ASSOS */}
								<PrivateRoute
									exact
									path="/admin/SEINEETMARNE/association"
									component={SEINEETMARNEASSOS}
								/>
								<PrivateRoute
									exact
									path="/admin/SEINEETMARNE/association/:id"
									component={GetSEINEETMARNEASSOS}
								/>
								<PrivateRoute
									exact
									path="/admin/update/SEINEETMARNE/association/:id"
									component={UpdateSEINEETMARNEASSOS}
								/>
								<PrivateRoute
									exact
									path="/admin/post/SEINEETMARNE/association"
									component={PostSEINEETMARNEASSOS}
								/>
								<PrivateRoute
									exact
									path="/admin/delete/SEINEETMARNE/association/:id"
									component={DeleteSEINEETMARNEASSOS}
								/>
								{/* HAD */}
								<PrivateRoute
									exact
									path="/admin/SEINEETMARNE/equipesmobiles"
									component={SEINEETMARNEHAD}
								/>
								<PrivateRoute
									exact
									path="/admin/SEINEETMARNE/equipesmobiles/:id"
									component={GetSEINEETMARNEHAD}
								/>
								<PrivateRoute
									exact
									path="/admin/update/SEINEETMARNE/equipesmobiles/:id"
									component={UpdateSEINEETMARNEHAD}
								/>
								<PrivateRoute
									exact
									path="/admin/post/SEINEETMARNE/equipesmobiles"
									component={PostSEINEETMARNEHAD}
								/>
								<PrivateRoute
									exact
									path="/admin/delete/SEINEETMARNE/equipesmobiles/:id"
									component={DeleteSEINEETMARNEHAD}
								/>
								{/* STRUCTURES */}
								<PrivateRoute
									exact
									path="/admin/SEINEETMARNE/structures"
									component={SEINEETMARNETRUCTURES}
								/>
								<PrivateRoute
									exact
									path="/admin/SEINEETMARNE/structures/:id"
									component={GetSEINEETMARNESTRUCTURES}
								/>
								<PrivateRoute
									exact
									path="/admin/update/SEINEETMARNE/structures/:id"
									component={UpdateSEINEETMARNESTRUCTURES}
								/>
								<PrivateRoute
									exact
									path="/admin/post/SEINEETMARNE/structures"
									component={PostSEINEETMARNESTRUCTURES}
								/>
								<PrivateRoute
									exact
									path="/admin/delete/SEINEETMARNE/structures/:id"
									component={DeleteSEINEETMARNESTRUCTURES}
								/>
								{/* LITS */}
								<PrivateRoute exact path="/admin/SEINEETMARNE/lits" component={SEINEETMARNELITS} />
								<PrivateRoute
									exact
									path="/admin/SEINEETMARNE/lits/:id"
									component={GetSEINEETMARNELITS}
								/>
								<PrivateRoute
									exact
									path="/admin/update/SEINEETMARNE/lits/:id"
									component={UpdateSEINEETMARNELITS}
								/>
								<PrivateRoute
									exact
									path="/admin/post/SEINEETMARNE/lits"
									component={PostSEINEETMARNELITS}
								/>
								<PrivateRoute
									exact
									path="/admin/delete/SEINEETMARNE/lits/:id"
									component={DeleteSEINEETMARNELITS}
								/>
							</Switch>
							<Switch>
								{/* Yvelines */}
								{/* USP */}
								<PrivateRoute exact path="/admin/YVELINES/usp" component={YVELINES} />
								<PrivateRoute exact path="/admin/YVELINES/usp/:id" component={GetUSPYVELINES} />
								<PrivateRoute
									exact
									path="/admin/update/YVELINES/usp/:id"
									component={UpdateUSPYVELINES}
								/>
								<PrivateRoute exact path="/admin/post/YVELINES/usp" component={PostUSPYVELINES} />
								<PrivateRoute
									exact
									path="/admin/delete/YVELINES/usp/:id"
									component={DeleteUSPYVELINES}
								/>
								{/* RESEAUX */}
								<PrivateRoute exact path="/admin/YVELINES/reseaux" component={YVELINESRESEAUX} />
								<PrivateRoute exact path="/admin/YVELINES/reseaux/:id" component={GetYVELINESRESEAUX} />
								<PrivateRoute
									exact
									path="/admin/update/YVELINES/reseaux/:id"
									component={UpdateYVELINESRESEAUX}
								/>
								<PrivateRoute
									exact
									path="/admin/post/YVELINES/reseaux"
									component={PostYVELINESRESEAUX}
								/>
								<PrivateRoute
									exact
									path="/admin/delete/YVELINES/reseaux/:id"
									component={DeleteYVELINESRESEAUX}
								/>
								{/* ASSOS */}
								<PrivateRoute exact path="/admin/YVELINES/association" component={YVELINESASSOS} />
								<PrivateRoute
									exact
									path="/admin/YVELINES/association/:id"
									component={GetYVELINESASSOS}
								/>
								<PrivateRoute
									exact
									path="/admin/update/YVELINES/association/:id"
									component={UpdateYVELINESASSOS}
								/>
								<PrivateRoute
									exact
									path="/admin/post/YVELINES/association"
									component={PostYVELINESASSOS}
								/>
								<PrivateRoute
									exact
									path="/admin/delete/YVELINES/association/:id"
									component={DeleteYVELINESASSOS}
								/>
								{/* HAD */}
								<PrivateRoute exact path="/admin/YVELINES/equipesmobiles" component={YVELINESHAD} />
								<PrivateRoute
									exact
									path="/admin/YVELINES/equipesmobiles/:id"
									component={GetYVELINESHAD}
								/>
								<PrivateRoute
									exact
									path="/admin/update/YVELINES/equipesmobiles/:id"
									component={UpdateYVELINESHAD}
								/>
								<PrivateRoute
									exact
									path="/admin/post/YVELINES/equipesmobiles"
									component={PostYVELINESHAD}
								/>
								<PrivateRoute
									exact
									path="/admin/delete/YVELINES/equipesmobiles/:id"
									component={DeleteYVELINESHAD}
								/>
								{/* STRUCTURES */}
								<PrivateRoute exact path="/admin/YVELINES/structures" component={YVELINESTRUCTURES} />
								<PrivateRoute
									exact
									path="/admin/YVELINES/structures/:id"
									component={GetYVELINESSTRUCTURES}
								/>
								<PrivateRoute
									exact
									path="/admin/update/YVELINES/structures/:id"
									component={UpdateYVELINESSTRUCTURES}
								/>
								<PrivateRoute
									exact
									path="/admin/post/YVELINES/structures"
									component={PostYVELINESSTRUCTURES}
								/>
								<PrivateRoute
									exact
									path="/admin/delete/YVELINES/structures/:id"
									component={DeleteYVELINESSTRUCTURES}
								/>
								{/* LITS */}
								<PrivateRoute exact path="/admin/YVELINES/lits" component={YVELINESLITS} />
								<PrivateRoute exact path="/admin/YVELINES/lits/:id" component={GetYVELINESLITS} />
								<PrivateRoute
									exact
									path="/admin/update/YVELINES/lits/:id"
									component={UpdateYVELINESLITS}
								/>
								<PrivateRoute exact path="/admin/post/YVELINES/lits" component={PostYVELINESLITS} />
								<PrivateRoute
									exact
									path="/admin/delete/YVELINES/lits/:id"
									component={DeleteYVELINESLITS}
								/>
							</Switch>
							{/* Menu*/}
							{/* Veille medicale */}
							<Switch>
								{/* <Route
									exact
									path="/admin/menu/veillemedicale/recommandation&outils/recommandation"
									component={PresentationRecommandation}
								/> */}
								{/* {Menu : Veille medical } */}
								{/* {recommandation et outils } */}
								<Route
									exact
									path="/menu/veillemedicale/recommandation&outils/"
									component={PresentationRecommandation}
								/>
								{/* {evenements } */}
								<Route
									exact
									path="/menu/veillemedicale/evenements/"
									component={PresentationEvenement}
								/>
								{/* {actualite } */}
								<Route
									exact
									path="/menu/veillemedicale/actualites/"
									component={PresentationActualite}
								/>
								{/* {rencontres } */}
								<Route
									exact
									path="/menu/veillemedicale/nosrencontres/"
									component={PresentationRencontre}
								/>

								<PrivateRoute
									exact
									path="/admin/menu/veillemedicale/recommandation&outils/get/:id"
									component={Recommandation_id}
								/>

								{/* {admin } */}
								<PrivateRoute
									exact
									path="/admin/menu/veillemedicale/recommandation&outils/"
									component={Recommandation}
								/>
								<PrivateRoute
									exact
									path="/admin/menu/veillemedicale/recommandation&outils/delete/:id"
									component={DeleteOneRecommandation}
								/>
								<PrivateRoute
									exact
									path="/admin/menu/veillemedicale/recommandation&outils/update/:id"
									component={UpdateRecommandations}
								/>
								<PrivateRoute
									exact
									path="/admin/menu/veillemedicale/recommandation&outils/post"
									component={PostRecommandations}
								/>
								{/* evenements */}
								<PrivateRoute
									exact
									path="/admin/menu/veillemedicale/evenement/"
									component={Evenement}
								/>
								<PrivateRoute
									exact
									path="/admin/menu/veillemedicale/evenement/delete/:id"
									component={DeleteOneEvenement}
								/>
								<PrivateRoute
									exact
									path="/admin/menu/veillemedicale/evenement/update/:id"
									component={UpdateEvenement}
								/>
								<PrivateRoute
									exact
									path="/admin/menu/veillemedicale/evenement/post"
									component={PostEvenement}
								/>

								{/* rencontre */}
								<PrivateRoute
									exact
									path="/admin/menu/veillemedicale/rencontre/"
									component={Rencontre}
								/>
								<PrivateRoute
									exact
									path="/admin/menu/veillemedicale/rencontre/delete/:id"
									component={DeleteOneRencontre}
								/>
								<PrivateRoute
									exact
									path="/admin/menu/veillemedicale/rencontre/update/:id"
									component={UpdateRencontre}
								/>
								<PrivateRoute
									exact
									path="/admin/menu/veillemedicale/rencontre/post"
									component={PostRencontre}
								/>
								{/* actualite */}
								<PrivateRoute
									exact
									path="/admin/menu/veillemedicale/actualite/"
									component={Actualite}
								/>
								<PrivateRoute
									exact
									path="/admin/menu/veillemedicale/actualite/delete/:id"
									component={DeleteOneActualite}
								/>
								<PrivateRoute
									exact
									path="/admin/menu/veillemedicale/actualite/update/:id"
									component={UpdateActualite}
								/>
								<PrivateRoute
									exact
									path="/admin/menu/veillemedicale/actualite/post"
									component={PostActualite}
								/>

								{/* file */}

								{/* HomePage */}
								{/* Caroussel1	*/}
								<PrivateRoute exact path="/admin/HomePage" component={HomePageAdminHome} />
								<PrivateRoute exact path="/admin/carousel" component={SectioncarousselsAdmin} />

								<PrivateRoute
									exact
									path="/admin/menu/caroussel/update/:id"
									component={UpdateCaroussel1}
								/>
								{/* Caroussel2	*/}
								<PrivateRoute exact path="/admin/adherent" component={SectioncadherentAdmin} />

								<PrivateRoute
									exact
									path="/admin/menu/adherent/update/:id"
									component={UpdateCaroussel2}
								/>
								{/* formulaire d'admission	*/}
								<PrivateRoute exact path="/admin/formulaire" component={PresentationFile} />

								<PrivateRoute
									exact
									path="/admin/menu/formulaire/update/:id"
									component={Updatefichier}
								/>
								{/* Agenda	*/}
								{/* Agenda1	*/}

								<PrivateRoute exact path="/admin/agenda1" component={SectionAgenda1Admin} />

								<PrivateRoute exact path="/admin/menu/agenda1/update/:id" component={UpdateAgenda1} />
								{/* Agenda2	*/}

								<PrivateRoute exact path="/admin/agenda2" component={SectionAgenda2Admin} />

								<PrivateRoute exact path="/admin/menu/agenda2/update/:id" component={UpdateAgenda2} />
								{/* Offre d'emploi	*/}

								<PrivateRoute exact path="/admin/offre" component={SectionOffreAdmin} />

								<PrivateRoute exact path="/admin/menu/offre/update/:id" component={UpdateOffre} />
							</Switch>
						</div>
					</div>
				</Router>
			</Provider>
		)
	}
}

export default App
