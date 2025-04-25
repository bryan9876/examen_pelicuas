// context/PeliculaContext.js
import { createContext, useState, useEffect } from 'react';

const PeliculaContext = createContext();

const PeliculaProvider = ({ children }) => {
  const [peliculas, setPeliculas] = useState(() => {
    const almacenadas = localStorage.getItem('peliculas');
    return almacenadas ? JSON.parse(almacenadas) : [];
  });

  const [peliculaSeleccionada, setPeliculaSeleccionada] = useState(null);

  useEffect(() => {
    localStorage.setItem('peliculas', JSON.stringify(peliculas));
  }, [peliculas]);

  const agregarPelicula = (pelicula) => {
    setPeliculas([...peliculas, pelicula]);
  };

  const seleccionarPelicula = (peli) => {
    setPeliculaSeleccionada(peli);
  };

  const actualizarPelicula = (peliculaEditada) => {
    const nuevas = peliculas.map((p) =>
      p.id === peliculaEditada.id ? peliculaEditada : p
    );
    setPeliculas(nuevas);
    setPeliculaSeleccionada(null);
  };

  const eliminarPelicula = (id) => {
    const filtradas = peliculas.filter(p => p.id !== id);
    setPeliculas(filtradas);
  };

  return (
    <PeliculaContext.Provider
      value={{
        peliculas,
        agregarPelicula,
        peliculaSeleccionada,
        seleccionarPelicula,
        actualizarPelicula,
        eliminarPelicula,
      }}
    >
      {children}
    </PeliculaContext.Provider>
  );
};

export { PeliculaProvider };
export default PeliculaContext;
