import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./router/Router";
import Alert from "./components/alert/Alert";
import Navbar from "./components/navbar/Navbar";

export const loggedContext = React.createContext();
export const userContext = React.createContext();
export const alertContext = React.createContext();
export const moviesTMDBContext = React.createContext();
export const moviesCatalogoContext = React.createContext();
export const moviesAlquiladasContext = React.createContext();
export const moviePlayContext = React.createContext();

function App() {
  const [logged, setLogged] = useState(false);
  const [user, setUser] = useState({
    username: '',
    role: ''
  });
  const [swalProps, setSwalProps] = useState({});
  const [moviesTMDB, setMoviesTMDB] = useState([]);
  const [moviesCatalogo, setMoviesCatalogo] = useState([]);
  const [moviesAlquiladas, setMoviesAlquiladas] = useState([]);
  const [moviePlay, setMoviePlay] = useState([]);

  return (
    <>
      <moviePlayContext.Provider value={{ moviePlay, setMoviePlay }}>
        <moviesAlquiladasContext.Provider value={{ moviesAlquiladas, setMoviesAlquiladas }}>
          <moviesCatalogoContext.Provider value={{ moviesCatalogo, setMoviesCatalogo }}>
            <moviesTMDBContext.Provider value={{ moviesTMDB, setMoviesTMDB }}>
              <alertContext.Provider value={{ swalProps, setSwalProps }}>
                <userContext.Provider value={{ user, setUser }}>
                  <loggedContext.Provider value={{ logged, setLogged }}>
                    <BrowserRouter>
                      <Router />
                    </BrowserRouter>
                    <Alert />
                  </loggedContext.Provider>
                </userContext.Provider>
              </alertContext.Provider>
            </moviesTMDBContext.Provider>
          </moviesCatalogoContext.Provider>
        </moviesAlquiladasContext.Provider>
      </moviePlayContext.Provider>


    </>
  );
}

export default App;
