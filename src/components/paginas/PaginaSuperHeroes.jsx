import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { getSuperHeroes } from "../../servicios/superheroes";
import InformacionEquipo from "../InformacionEquipo/InformacionEquipo";
import  {TarjetaSuperHeroeList} from   "../InformacionSuperHeroes/TarjetaSuperHeroe";
import Titulo from "../Titulo/Titulo";
import './PaginaSuperHeroes.css';

const PaginaSuperHeroes = () => {
    const [informacion, setInformacion] = useState();
    const [loading, setLoading] = useState()
    const getSuperHeroesServicio =async() =>{
        const res = await getSuperHeroes();
        setInformacion(res);
        setLoading(false)
    }
    
    useEffect(() =>{
        if(!informacion) {
            setLoading(true);
            getSuperHeroesServicio();
        }
    }, [informacion ]); 
    const componente= <div> Cargando </div>;
    if (loading || !informacion){
        return componente;
    }

        return (
        <main className="super-page-container" >
            <Titulo 
                tipo='h1' 
                titulo ={informacion.squadName}
            />
            <InformacionEquipo
                ciudad={informacion.homeTown}
                anioformacion={informacion.formed}
                basesecreta={informacion.secretBase}
            />
            
            <Titulo 
                tipo='h2'
                titulo='Miembros'/>
            <TarjetaSuperHeroeList 
            miembros={informacion.members} />
        </main>
    )
}
export default PaginaSuperHeroes;
