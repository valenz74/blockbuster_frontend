import React, { useContext } from 'react'

import { userContext, setSwalProps, alertContext, moviesCatalogoContext, moviesAlquiladasContext,moviePlayContext } from "../../App"
import { agregarPeliculaAlquilada, devolverPeliculaAlquilada, eliminarPeliculaCatalogo, guardarPeliculaCatalogo, obtenerPeliculasAlquiladas, obtenerPeliculasCatalogo } from '../../utils/apiFunctions';

const Devolver = ({movie}) => {

    const { user } = useContext(userContext);
    const {setSwalProps} = useContext(alertContext);
    const {setMoviesCatalogo} = useContext(moviesCatalogoContext);
    const {setMoviesAlquiladas} = useContext(moviesAlquiladasContext);
    const {moviePlay, setMoviePlay} = useContext(moviePlayContext)


    const eliminarDelCatalogo = async () => {
        let mensaje = await eliminarPeliculaCatalogo(movie.idPelicula);

        if (mensaje == 204) {
            setSwalProps({
                show:true,
                title:"Notificación",
                text:"La película "+movie.title+" ha sigo eliminada del catálogo"
            })

            let data = await obtenerPeliculasCatalogo();
            setMoviesCatalogo(data);
        }
    }

    const devolverPelicula = async () => {
        let mensaje = await devolverPeliculaAlquilada(movie.idAlquilada);

        if (mensaje == 204) {
            setSwalProps({
                show:true,
                title:"Notificación",
                text:"La película "+movie.title+" ha sido devuelta"
            })

            if(moviePlay.id==movie.id){
                setMoviePlay([]);
            }

            let data = await obtenerPeliculasAlquiladas();
            setMoviesAlquiladas(data);

            if(movie.id==moviePlay.id){
                setMoviePlay([]);
            }
            
        }

    }


    return (
        <div>
            <button
                className='btn-danger position-absolute end-0 top-0 m-4'
                onClick={
                    ()=>(
                        user.role==='ADMIN'?eliminarDelCatalogo():devolverPelicula()
                    )
                }
            >
                {user.role==='ADMIN'?'Eliminar del Catálogo':'Devolver'}

            </button>
        </div>
    )
}

export default Devolver