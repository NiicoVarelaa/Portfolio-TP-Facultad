import React from 'react'

const Header = () => {

    let alumno = "Nicolás Varela"

    return (
        <header className="header">
            <h1>Hola! 👋 Soy <span>{alumno}</span></h1>
            <p>Desarrolador Web Jr</p>
        </header>
    )
}

export default Header
