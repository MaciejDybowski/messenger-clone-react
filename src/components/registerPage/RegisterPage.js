import React from 'react'
import './RegisterPage.css';
import logo from '../../img/logo.png'

function RegisterPage() {
    return (
        <div className='registerPage'>
            <img src={logo} alt='logo'></img>
            <p className='hello-text'>Załóż konto i rozmawiaj ze znajomymi</p>
            <input className='email-field' type='text' placeholder='Adres e-mail'></input>
            <input className='password-field' type='password' placeholder='Hasło'></input>
            <input className='email-field' type='text' placeholder='Imię'></input>
            <input className='password-field' type='text' placeholder='Nazwisko'></input>
            <button type='submit' className='login-btn'>Rejestruj</button>
        </div>
    )
}

export default RegisterPage
