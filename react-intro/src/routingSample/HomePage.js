import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
    return (
        <>
            <h1>HOME!!!!!!</h1>
            <main>
                <h2>Welcome to the homepage!</h2>
                <p>You can do this, I believe in you.</p>
            </main>
            <nav>
                <Link to="/about">About</Link>
            </nav>
        </>
    )
}

export default HomePage