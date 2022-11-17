import { useState } from 'react'
import { adminUser } from '../utils/userData'

const useLoginAndLogout = () => {
	const [user, setUser] = useState({ name: '', email: '' })
	const [error, setError] = useState('')

	const Login = details => {
		if (details.email === adminUser.email && details.password === adminUser.password) {
			console.log('Logged in')
			setUser({
				name: details.name,
				email: details.email
			})
		} else {
			console.log('Details do not match!')
			setError('Details do not match!')
		}
	}

	const Logout = () => {
		setUser({ name: '', email: '' })
	}

	return {
		user,
		error,
		Login,
		Logout
	}

}

export default useLoginAndLogout