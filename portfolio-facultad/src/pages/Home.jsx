import React from 'react'
import Header from '../components/Header'
import { MainHome } from '../components/MainHome'
import Footer from '../components/Footer'
import nico from '../assets/nico.jpeg';

const Home = () => {

    const Alumno = {
        imagen: nico,
        nombre: "Nicolás Varela",
        edad: 27,
        carrera: "Estudiante de la Tecnicatura Universitaria en Programación en la Universidad Tecnológica Nacional - Facultad Regional Tucumán (UTN-FRT).",
        lenguajes: ["Java", "JavaScript", "React", "Node.js", "Python", "MongoDB"],
    }

    return (
        <div className='app-container'>
            <Header />
            <MainHome Alumno={Alumno} />
            <Footer />
        </div>
    )
}

export default Home