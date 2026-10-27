import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const HomePage = () => {
    const navigate = useNavigate()
    return (
        <div>
            <h1>This is HomePage </h1>

            <button onClick={()=>navigate('/setting')}>Go to Setting </button>

        </div>
    )
}

export default HomePage
