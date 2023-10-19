import React, { useContext, useEffect, useState } from 'react'

import { userContext } from '../App'
import { obtenerPeliculasCatalogo, obtenerPeliculasTMDB } from '../utils/apiFunctions';
import CardMovie from '../components/cardmovie/CardMovie';

import { moviesTMDBContext } from '../App';

const MoviesTMDB = () => {

  const { user } = useContext(userContext);

  const {moviesTMDB, setMoviesTMDB} = useContext(moviesTMDBContext);

  const cargarPeliculas = async () => {
    let data = await obtenerPeliculasTMDB();
    setMoviesTMDB(data);
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
            Películas de TMDB
          </h2>
        </div>
      </div>

      <div className='container'>
        <div className='row pt-3 d-flex justify-content-center'>
          {
            moviesTMDB.map((movie) => (
              <CardMovie movie={movie} tipo="agregar"/>
            ))
          }
        </div>
      </div>

    </>

  )
}

export default MoviesTMDB