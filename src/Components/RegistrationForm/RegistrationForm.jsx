import React, { useState } from 'react'
import './../../style.css'

const RegistrationForm = ({ isAuth, Register, error }) => {
	const [details, setDetails] = useState({
		name: '',
		lastName: '',
		email: '',
		password: '',
	})

	const submitHandler = (e) => {
		e.preventDefault()
		Register(details)
	}

	return (
		<form onSubmit={submitHandler}>
			<div className='form-inner'>
				<h2>Registration</h2>
				{(error !== '') ? (<div className='error'>{error}</div>) : ''}
				<div className='form-group'>
					<label htmlFor="name">Name:</label>
					<input type="text" name="name" id="name" onChange={
						e => setDetails({ ...details, name: e.target.value })
					} value={details.name} />
				</div>
				<div className='form-group'>
					<label htmlFor="lastName">Last Name:</label>
					<input type="text" name="lastName" id="lastName" onChange={
						e => setDetails({ ...details, lastName: e.target.value })
					} value={details.lastName} />
				</div>
				<div className='form-group'>
					<label htmlFor="email">Email:</label>
					<input type="email" name="email" id="email" onChange={
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
					<input type='submit' onClick={isAuth} value='GO BACK' />
					<input type='submit' value='REGISTER' />
				</span>
			</div>
		</form>
	)
}

export default RegistrationForm