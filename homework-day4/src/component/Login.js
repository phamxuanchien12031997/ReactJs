import React from 'react'
import '../App.css';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const Login = () => {

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        localStorage.setItem('isLogin', 'true');

        navigate('/home');
    }

    return (
        <div className='loginForm' onSubmit={handleSubmit}>
            <div className='title'>Login</div>
            <form className='form'>
                <TextField id="standard-basic" label="Email" variant="standard" />
                <TextField id="standard-basic" label="Password" variant="standard" />
                <Button variant="contained" endIcon={<SendIcon />} type='submit'>
                    submit
                </Button>
            </form>
        </div>
    )
}

export default Login
