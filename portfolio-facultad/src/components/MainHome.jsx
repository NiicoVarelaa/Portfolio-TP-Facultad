import React from 'react'

export const MainHome = ({ Alumno }) => {

    const { imagen, nombre, edad, carrera, lenguajes } = Alumno

    return (
        <div>
            <img src={imagen} alt={`Foto de ${nombre}`} />
            <h1>{nombre}</h1>
            <p>Edad: {edad}</p>
            <p>Carrera: {carrera}</p>
            <ul>
                {lenguajes.map((leng, index) => (
                    <li key={index}>{leng}</li>
                ))}
            </ul>
        </div>
    )
}
