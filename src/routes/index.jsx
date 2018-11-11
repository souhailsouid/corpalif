import PresentationPage from 'views/PresentationPage/PresentationPage.jsx'
import Annuaire from 'views/AnnuaireFrancilien/AnnuaireFrancilien.jsx'
import PresentationStructures from 'views/StructuresPage/ListStructures.jsx'
import PresentationBlog from 'views/VeilleMedicale/blog.jsx'
import Resetpassword from 'views/SigninPage/ForgotPage/ChangePassword.js'
import ForgotPassword from 'views/SigninPage/ForgotPage/ResetPassword.js'

var indexRoutes = [
	{ path: '/annuaire-francilien', name: 'Annuaire', component: Annuaire },
	{ path: '/structure', name: 'PresentationStructures', component: PresentationStructures },
	{ path: '/blogs', name: 'PresentationBlog', component: PresentationBlog },
	{ path: '/reset/:token', name: 'Resetpassword', component: Resetpassword },
	{ path: '/forgotpassword', name: 'ForgotPassword', component: ForgotPassword },
	{ path: '/', name: 'PresentationPage', component: PresentationPage }
]

export default indexRoutes
