import { useState } from 'react'
import { registerUserData } from '../utils/registerUserData'


const useRegisterUser = () => {
	const [userRegister, setUserRegister] = useState({ name: '', lastName: '', email: '', password: '' })
	const [error, setError] = useState('')

	const Register = details => {
		if (details.name !== registerUserData.name &&
			details.lastName !== registerUserData.lastName &&
			details.email !== registerUserData.email &&
			details.password !== registerUserData.password) {
			console.log('Registration')
			setUserRegister({
				name: details.name,
				lastName: details.lastName,
				email: details.email,
				password: details.password
			})
		} else {
			console.log('Details do not match!')
			setError('Details do not match!')
		}
	}

	const Logout = () => {
		setUserRegister({ name: '', lastName: '', email: '', password: '' })
	}

	return {
		userRegister,
		error,
		Register,
		Logout
	}
}

export default useRegisterUser