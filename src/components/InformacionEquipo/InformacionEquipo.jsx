import React from "react";
import './InformacionEquipo.css';
const InformacionEquipo = ({
    ciudad,
    anioformacion,
    basesecreta
    }) => {
    return (
    <section className='informacion-equipo'>
        <ul>
            <li> Ciudad: {ciudad}</li>
            <li> Base Secreta: {basesecreta}</li>
            <li> Año de Formacion: {anioformacion}</li>
        </ul>
    </section>
    )
}
export default InformacionEquipo;