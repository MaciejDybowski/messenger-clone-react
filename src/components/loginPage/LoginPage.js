import React, { useState } from 'react'
import './LoginPage.css';
import logo from '../../img/logo.png'
import { Link } from 'react-router-dom';
import { login } from '../../redux/actions/authActions';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'


function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            email,
            password,
        }
        dispatch(login(data));
    }

    return (
        <div className='loginPage'>
            <img src={logo} alt='logo'></img>
            <p className='hello-text'>Zaloguj się, aby rozpocząć</p>
            <input
                className='email-field'
                type='text' placeholder='Adres e-mail'
                value={email}
                onChange={(e) => setEmail(e.currentTarget.value)}>
            </input>
            <input
                className='password-field'
                type='password'
                placeholder='Hasło'
                value={password}
                onChange={(e) => setPassword(e.currentTarget.value)}>
            </input>
            <button
                type='submit'
                className='login-btn'
                onClick={(e) => handleSubmit(e)}
            >Logowanie</button>
            <p className='password-text'>Nie pamiętasz hasła?</p>
            <Link to='/register' className='newAcc'>
                Utwórz nowe konto
            </Link>
        </div>
    )
}

export default LoginPage
