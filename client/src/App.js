import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Profile from './pages/Profile'

function App() {
	return (
		<Router>
			<Navbar />
			<Switch>
				<Route path='/' exact component={Homepage} />
				<Route path='/login' component={Login} />
				<Route path='/signup' component={Signup} />
				<Route path='/profile' component={Profile} />
			</Switch>
			{/* Footer */}
		</Router>
	)
}

export default App
