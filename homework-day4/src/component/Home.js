import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const Home = () => {

    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('isLogin');
        navigate('/');
    }

    return (
        <div className='home'>
            <div className='dashboard'>
                <div className='dashboard-user'>
                    <Link to={'/home'}>Home</Link>
                    <Link to={'/product'}>Product</Link>
                    <Link to={'/user'}>User</Link>
                </div>
                <div className='avata-logout'>
                    <img className='imgAvata' src='https://i.pinimg.com/736x/54/61/8a/54618add95b4dab18cf91d8a38f137d8.jpg' alt='avata' />
                    <Button variant="outlined" color="error" onClick={() => handleLogout()}>
                        Logout
                    </Button></div>
            </div>
            <div>
                <img className='imgCover' src='https://i.pinimg.com/1200x/75/2c/90/752c90fbbe567980eb78433fc977cd61.jpg' alt='ảnh bìa' />
            </div>
        </div>
    )
}

export default Home
