import React, { useContext, useEffect, useState } from 'react'

import { userContext, moviesCatalogoContext } from '../App'
import { obtenerPeliculasCatalogo } from '../utils/apiFunctions';
import CardMovie from '../components/cardmovie/CardMovie';
import { Link } from 'react-router-dom';

const Catalogo = () => {

  const { user } = useContext(userContext);
  const {moviesCatalogo, setMoviesCatalogo} = useContext(moviesCatalogoContext);

  let tipo = "agregar";
  if(user.role==='ADMIN'){
    tipo="devolver";
  }

  const cargarPeliculas = async () => {
    let data = await obtenerPeliculasCatalogo();
    setMoviesCatalogo(data);
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
            Catálogo de Películas
          </h2>
        </div>
      </div>

      <div className='container'>
        <div className='row pt-3 d-flex justify-content-center'>
          {
            moviesCatalogo.map((movie) => (
              <CardMovie movie={movie} tipo={tipo}/>
            ))
          }
        </div>
      </div>

    </>

  )
}

export default Catalogo 