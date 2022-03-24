import React from 'react'
import { Link } from 'react-router-dom'

const AboutPage = () => {
    return (
        <>
            <h1>ABOUT!!!!!!</h1>
            <main>
                <h2>Who are we?</h2>
                <p>
                    That feels like an existential question, don't you
                    think?
                </p>
            </main>
            <nav>
                <Link to="/">Home</Link>
            </nav>
        </>
    )
}

export default AboutPage