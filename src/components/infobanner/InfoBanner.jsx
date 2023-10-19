import React from 'react'

const InfoBanner = ({ movie, HandlerUpdatePlaying }) => {
    return (
        <div className='container pb-3'>

            <div className='pb-0 pb-sm-5'>
                {
                    movie ? (
                        <button className='boton mb-4'
                            onClick={HandlerUpdatePlaying()}
                        >
                            Play Trailer
                        </button>
                    ) : (
                        ''
                    )
                }

                <h1 className='text-black pb-3' >{movie.title}</h1>
                <p className='text-black' >{movie.overview}</p>
            </div>
        </div>
    )
}

export default InfoBanner