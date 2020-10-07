import React, { useState } from 'react'
import './RegisterPage.css';
import logo from '../../img/logo.png'
import { register } from '../../redux/actions/authActions';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'


function RegisterPage() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const dispatch = useDispatch();


    const handleSubmit = (e) => {
        e.preventDefault();
        const user = {
            email,
            password,
            firstName,
            lastName,
        }
        dispatch(register(user));
    }
    /* // pobranie do zmiennej isAuth czy jest user
    const isAuth = useSelector(state => state.firebase.auth)
    // jesli ma to przekierowanie gdzie chcesz
    if (isAuth.uid) return <Redirect to='/dashboard'></Redirect> */
    return (
        <div className='registerPage'>
            <img src={logo} alt='logo'></img>
            <p className='hello-text'>Załóż konto i rozmawiaj ze znajomymi</p>
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
            <input
                className='email-field'
                type='text' placeholder='Imię'
                value={firstName}
                onChange={(e) => setFirstName(e.currentTarget.value)}>
            </input>
            <input
                className='password-field'
                type='text'
                placeholder='Nazwisko'
                value={lastName}
                onChange={(e) => setLastName(e.currentTarget.value)}>
            </input>
            <button type='submit' className='login-btn' onClick={(e) => handleSubmit(e)}>Rejestruj</button>
        </div>
    )
}

export default RegisterPage
