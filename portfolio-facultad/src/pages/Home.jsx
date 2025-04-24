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
        carrera: "Tecnicatura en Programación",
        lenguajes: ["Java", "JavaScript", "React"],
    }

    return (
        <div>
            <Header />
            <MainHome Alumno={Alumno} />
            <Footer />
        </div>
    )
}

export default Home