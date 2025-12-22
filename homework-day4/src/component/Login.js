import React from 'react'
import '../App.css';
import { useNavigate } from 'react-router-dom';
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
                <label>Email</label>
                <input type='email' id='inputLogin' placeholder='Nhập địa chỉ email' required />
                <label>Password</label>
                <input type='password' id='password' placeholder='Nhập mật khẩu' required />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Login
