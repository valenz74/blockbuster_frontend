import "./Buscar.css"
import React, { useContext, useState } from 'react'

import { moviesTMDBContext } from '../../App'
import { obtenerPeliculasTMDB } from '../../utils/apiFunctions';

const Buscar = () => {

    const [terminoBusqueda, setTerminoBusqueda] = useState("");
    const {moviesTMDB, setMoviesTMDB}= useContext(moviesTMDBContext);

    const buscar = async (e)=>{
        setTerminoBusqueda(e.target.value);
        let movies = await obtenerPeliculasTMDB(terminoBusqueda);
        setMoviesTMDB(movies);
    }
    return (
        <input 
        type="text" 
        placeholder='Buscar'
        onChange={
            (e)=>buscar(e)
        }
        />
    )
}

export default Buscar