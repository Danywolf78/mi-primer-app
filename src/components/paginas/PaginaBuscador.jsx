import { Container } from '@mui/material';
import React from 'react'
import {useEffect} from 'react'
import {useState} from'react'
import Buscador from '../Buscador/Buscador';
import Loading from "../Loading/Loading";
import { ListaPeliculas } from "../Peliculas/Pelicula"
import { getListadoPeliculas } from "../../servicios/peliculas";
import Paginador from '../Paginador/Paginador';
import { useSearchParams } from "react-router-dom";

const PaginaBuscador=() =>{
    const [peliculas, setpeliculas] = useState();
    const [isLoading, setIsloading]= useState(false);
    const [cantidadPaginas,setCantidadPaginas ]= useState(1);
    const [pagina, setPagina ]= useState(1);
    const [searchParams, setSearchParams] = useSearchParams();

useEffect(()=>{
    if (searchParams.get('query')){
        buscarPelicula(pagina)
    }
},[searchParams,pagina]);
const buscarPelicula = async() =>{
    setIsloading(true);   
    const {Search:pelis, totalResults} = await getListadoPeliculas(searchParams.get('query'),pagina);
    setpeliculas(pelis);
    setCantidadPaginas(Math.ceil(parseInt(totalResults/10)));
    setIsloading(false);
}
const onBuscar =(criterioBusqueda) =>{
    setSearchParams({ query: criterioBusqueda});
    
}

const onCambioPagina = (pagina) => {
    setPagina (pagina);
};  

return<Container>
        <Buscador onBuscar={onBuscar}/>
        {isLoading && <Loading /> }
        {peliculas && <ListaPeliculas peliculas ={peliculas}/>}
        {peliculas && <Paginador cantidadPaginas={cantidadPaginas} onChange={onCambioPagina}/>}
    </Container>
}

export default PaginaBuscador;