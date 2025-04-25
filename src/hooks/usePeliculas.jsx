// hooks/usePeliculas.js
import { useContext } from 'react';
import PeliculaContext from '../context/PeliculaContext';

const usePeliculas = () => {
  return useContext(PeliculaContext);
};

export default usePeliculas;


