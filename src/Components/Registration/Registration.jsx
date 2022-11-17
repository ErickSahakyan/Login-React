import React from 'react'
import './../../style.css'
import RegistrationForm from '../RegistrationForm/RegistrationForm'
import useRegisterUser from '../../hooks/useRegisterUser'

const Registration = ({ isAuth }) => {
	const { userRegister, error, Register, Logout } = useRegisterUser()

	return (
		<div className='welcome__block'>
			{(userRegister.email !== '') ? (
				<div className='welcome'>
					<h2>Congratulations you have registered  <span>{userRegister.name} {userRegister.lastName}</span></h2>
					<button onClick={Logout} >Logout</button>
				</div>)
				: (
					<RegistrationForm isAuth={isAuth} Register={Register} error={error} />
				)}
		</div>
	)
}

export default Registration