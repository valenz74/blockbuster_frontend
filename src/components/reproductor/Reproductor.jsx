import React, { useContext, useEffect, useState } from 'react'
import "./Reproductor.css"
import { moviePlayContext } from '../../App';
import { obtenerIdVideo } from '../../utils/apiFunctions';
import { API_ENDPOINTS } from '../../utils/apiEndpoints';
import YouTube from 'react-youtube';
import InfoBanner from '../infobanner/InfoBanner';



const Reproductor = () => {

    const [playing, setPlaying] = useState(false);
    const [trailer, setTrailer] = useState(false);

    const { moviePlay } = useContext(moviePlayContext);

    const consultarVideoKey = async () => {
        let video = await obtenerIdVideo(moviePlay.id);
        setTrailer(video);
    }

    useEffect(() => {

        if (moviePlay.id) {
            consultarVideoKey();
        }

    }, [moviePlay])

    const updatePLaying = () => setPlaying(true);

    return (
        <div>

            <main className='seccion-reproductor'>

                {
                    moviePlay.id ? (

                        <div className={`viewtrailer ${!trailer ? 'd-none' : 'd-flex'} `}>

                            <img src={`${API_ENDPOINTS.urlImage}${moviePlay.backdrop_path}`}
                                className={!trailer ? 'd-none' : 'd-block'}
                            />
                            {playing ? (
                                <>
                                    <YouTube
                                        videoId={trailer}
                                        className='reproductor'
                                        containerClassNAme={"youtube-container-amru"}
                                        opts={{
                                            width: "100%",
                                            height: "100%",
                                            playerVars: {
                                                autoplay: 1,
                                                controls: 0,
                                                cc_load_policy: 0,
                                                fs: 0,
                                                if_load_policy: 0,
                                                modestbranding: 0,
                                                rel: 0,
                                                showinfo: 0
                                            }
                                        }}
                                    />
                                    <button onClick={() => setPlaying(false)} className="boton btn-cerrar">
                                        Close
                                    </button>
                                </>
                            ) : (<InfoBanner movie={moviePlay} HandlerUpdatePlaying={(state) => updatePLaying} />)}
                        </div>
                    ) : (
                        null
                    )
                }


            </main>

        </div>
    )
}

export default Reproductor