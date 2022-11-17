import Login from './Components/Login/Login';
import './App.css'
import { useState } from 'react';
import Registration from './Components/Registration/Registration';



function App() {
	const [auth, setIsAuth] = useState(false)

	const isAuth = () => {
		setIsAuth(!auth)
	}

	return (
		<div >
			{!auth ? <Login isAuth={isAuth} /> : <Registration isAuth={isAuth} />}
		</div>
	)
}
export default App;
