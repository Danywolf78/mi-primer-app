import { Container } from '@mui/material';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams} from 'react-router-dom';
import { getPelicula } from '../../servicios/peliculas';
import Loading from '../Loading/Loading';
//import Buscador from '../Buscador/Buscador';
import Pelicula from "../Peliculas/Pelicula"
//import Paginador from '../Paginador/Paginador';

const PaginaDetalle=() =>{
    const [pelicula, setPelicula] = useState();
    const [isLoading, setIsLoading] = useState(false)
    const {id}= useParams()
    useEffect(() =>{
        if (id && !pelicula){
           getPeliculaDelServicio();
        }
    },[id, pelicula])

    const getPeliculaDelServicio= async() =>{
        setIsLoading(true)
        const peli = await getPelicula(id)
        setPelicula(peli);    
        setIsLoading(false)
    };

    if(pelicula && pelicula.Error || !pelicula) {
        return (<Container maxWidth='sm'>
        La pelicula no se encontro {id}
        </Container>
        )
    }

    if(isLoading && !pelicula){
        return <Loading />
    }
    
    return(
        <Container maxWidth='sm' >
            <Pelicula pelicula={pelicula}/>
        </Container>
)  
}

export default PaginaDetalle;