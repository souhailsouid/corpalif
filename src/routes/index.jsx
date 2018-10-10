import PresentationPage from 'views/PresentationPage/PresentationPage.jsx'
import Annuaire from 'views/AnnuaireFrancilien/AnnuaireFrancilien.jsx'
import PresentationStructures from 'views/StructuresPage/ListStructures.jsx'

var indexRoutes = [
	{ path: '/annuaire-francilien', name: 'Annuaire', component: Annuaire },
	{ path: '/structure', name: 'PresentationStructures', component: PresentationStructures },
	{ path: '/', name: 'PresentationPage', component: PresentationPage }
]

export default indexRoutes
