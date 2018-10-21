import PresentationPage from 'views/PresentationPage/PresentationPage.jsx'
import Annuaire from 'views/AnnuaireFrancilien/AnnuaireFrancilien.jsx'
import PresentationStructures from 'views/StructuresPage/ListStructures.jsx'
import PresentationBlog from 'views/VeilleMedicale/blog.jsx'

var indexRoutes = [
	{ path: '/annuaire-francilien', name: 'Annuaire', component: Annuaire },
	{ path: '/structure', name: 'PresentationStructures', component: PresentationStructures },
	{ path: '/blogs', name: 'PresentationBlog', component: PresentationBlog },

	{ path: '/', name: 'PresentationPage', component: PresentationPage }
]

export default indexRoutes
