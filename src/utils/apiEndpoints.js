const API_BASE_URL = "https://blockbusterbackend-production.up.railway.app"

const API_ENDPOINTS = {
    login: `${API_BASE_URL}/login`,
    registro: `${API_BASE_URL}/usuario`,
    peliculacatalogo: `${API_BASE_URL}/peliculacatalogo`,
    urlImage:"https://image.tmdb.org/t/p/original",
    themoviedb:`${API_BASE_URL}/themoviedb`,
    mispeliculas:`${API_BASE_URL}/peliculaalquilada`,
    video:`${API_BASE_URL}/video`,
}

export {API_ENDPOINTS}