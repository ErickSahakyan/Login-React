import React from 'react'
import useLoginAndLogout from '../../hooks/useLoginAndLogout'
import LoginForm from '../LoginForm/LoginForm'
import './../../style.css'

const Login = ({ isAuth }) => {

	const { user, error, Login, Logout } = useLoginAndLogout()

	return (
		<div className='welcome__block'>
			{(user.email !== '') ? (
				<div className='welcome'>
					<h2>Welcome, <span>{user.name}</span></h2>
					<button onClick={Logout} >Logout</button>
				</div>)
				: (
					<LoginForm isAuth={isAuth} Login={Login} error={error} />
				)}
		</div>
	)
}

export default Login