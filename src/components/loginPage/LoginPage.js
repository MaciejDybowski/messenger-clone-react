import React from 'react'
import './LoginPage.css';
import logo from '../../img/logo.png'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function LoginPage() {
    return (
        <div className='loginPage'>
            <img src={logo} alt='logo'></img>
            <p className='hello-text'>Zaloguj się, aby rozpocząć</p>
            <input className='email-field' type='text' placeholder='Adres e-mail'></input>
            <input className='password-field' type='password' placeholder='Hasło'></input> 
            <button type='submit' className='login-btn'>Logowanie</button>
            <p className='password-text'>Nie pamiętasz hasła?</p>
            <button className='newAcc'>Utwórz nowe konto</button>
        </div>
    )
}

export default LoginPage
