import React, { useState } from 'react'
import './../../style.css'


const LoginForm = ({ isAuth, Login, error }) => {
	const [details, setDetails] = useState({
		name: '',
		email: '',
		password: ''
	})

	const submitHandler = (e) => {
		e.preventDefault()
		Login(details)
	}

	return (
		<form onSubmit={submitHandler}>
			<div className='form-inner'>
				<h2>Login</h2>
				{(error !== '') ? (<div className='error'>{error}</div>) : ''}
				<div className='form-group'>
					<label htmlFor="name">Name:</label>
					<input type="text" name="name" id="name" onChange={
						e => setDetails({ ...details, name: e.target.value })
					} value={details.name} />
				</div>
				<div className='form-group'>
					<label htmlFor="text">Email:</label>
					<input type="text" name="text" id="text" onChange={
						e => setDetails({ ...details, email: e.target.value })
					} value={details.email} />
				</div>
				<div className='form-group'>
					<label htmlFor="password">Password:</label>
					<input type="password" name="password" id="password" onChange={
						e => setDetails({ ...details, password: e.target.value })
					} value={details.password} />
				</div>
				<span className='input-block'>
					<input type="submit" value="LOGIN" />
					<input onClick={isAuth} type="submit" value="REGISTRATION" />
				</span>
			</div>
		</form>
	)
}

export default LoginForm