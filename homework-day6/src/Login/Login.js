import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import '../Login/Login.css'
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email === 'user@gmail.com' && password === 'pass12345') {
            localStorage.setItem('isLogin', 'true');
            navigate('/home');
        }
        else { setError('Incorrect email or password') }
    }
    return (
        <div className='login'>
            <h1>LOGIN</h1>
            <form className='login-form' onSubmit={handleSubmit}>
                <TextField
                    id="standard-basic"
                    label="Email" variant="standard"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} />
                <TextField
                    id="standard-basic"
                    label="Passwold" type="password"
                    variant="standard" value={password}
                    onChange={(e) => setPassword(e.target.value)} />
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <Button
                    type='submit'
                    color="secondary">
                    Submit
                </Button>
            </form>
        </div>
    )
}

export default Login
