import React from "react";

export const MainHome = ({ Alumno }) => {
    const { imagen, nombre, edad, carrera, lenguajes } = Alumno;

    return (
        <div className="mainHome">
            <div className="card">
                <img src={imagen} alt={`${nombre}`} className="card-img" />
                <div className="card-info">
                    <h2>{nombre}</h2>
                    <p>
                        <strong>Edad:</strong> {edad} años.
                    </p>
                    <p>
                        <strong>Carrera:</strong> {carrera}
                    </p>
                    <div className="tags-container">
                        {lenguajes.map((leng, index) => (
                            <span key={index} className="tag">
                                {leng}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
