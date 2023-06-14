import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './LoginForm.css';

function LoginFormPage() {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [credential, setCredential] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);

    if (sessionUser) return <Redirect to="/" />

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);
        return dispatch(sessionActions.login({ credential, password }))
            .catch(async (res) => {
                let data;
                try {
                    data = await res.clone().json();
                } catch {
                    data = await res.text();
                }
                if (data?.errors) setErrors(data.errors);
                else if (data) setErrors([data]);
                else setErrors([res.statusText]);
            });
    }

    const handleDemoUserClick = (e) => {
        e.preventDefault();
        return dispatch(sessionActions.login({credential: 'Demo-lition', password: 'password'}))
      }

    return (
        <div className="LoginForm">
            <form onSubmit={handleSubmit}>
                <ul>
                    {errors.map(error =>
                        <li key={error}>{error}</li>)}
                </ul>
                <h1>Log In</h1>
                <label>Username
                    <input id='credentials' type="text" value={credential} onChange={(e) => setCredential(e.target.value)} required />
                </label>
                <label>Password
                    <input id='credentials' type="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                </label>
                <button className="login" type="submit">Log In</button>
                <button className='login' id="DemoUser" type='submit' onClick={(e) => handleDemoUserClick(e)}>Demo User</button>
            </form>
        </div>
    );
}

export default LoginFormPage;