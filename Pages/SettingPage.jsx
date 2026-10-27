import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const SettingPage = () => {
    const navigate = useNavigate()
    return (
        <div>
            <h1>Setting Page</h1>
            <button onClick={() => navigate('/')}>Go to Home Page</button>

        </div>
    )
}

export default SettingPage
