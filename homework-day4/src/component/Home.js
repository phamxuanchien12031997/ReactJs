import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

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
                <button type='logout' onClick={handleLogout}>Logout</button>
            </div>
        </div>
    )
}

export default Home
