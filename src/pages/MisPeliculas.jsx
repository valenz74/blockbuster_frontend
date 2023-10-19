import React, { useContext, useEffect, useState } from 'react'

import { userContext, moviesAlquiladasContext } from '../App'
import { obtenerPeliculasAlquiladas, obtenerPeliculasCatalogo, obtenerPeliculasTMDB } from '../utils/apiFunctions';
import CardMovie from '../components/cardmovie/CardMovie';
import Reproductor from '../components/reproductor/Reproductor';

const MisPeliculas = () => {

  const { user } = useContext(userContext);
  const { moviesAlquiladas, setMoviesAlquiladas } = useContext(moviesAlquiladasContext);
  

  const cargarPeliculas = async () => {
    let data = await obtenerPeliculasAlquiladas();
    setMoviesAlquiladas(data);
  }

  useEffect(
    () => {
      cargarPeliculas();
    },
    []
  )

  return (

    <>

      <div className='row'>
        <div className='col-12'>
          <h2 className='text-center py-5'>
            Mis Películas
          </h2>
        </div>
      </div>

      <div className='row sin-m'>
        <div className='col-12'>
          <Reproductor/>
        </div>
      </div>

      <div className='container'>
        <div className='row pt-3 d-flex justify-content-center'>
          {
            moviesAlquiladas.map((movie) => (
              <CardMovie movie={movie} tipo="devolver"/>
            ))
          }
        </div>
      </div>

    </>

  )
}

export default MisPeliculas