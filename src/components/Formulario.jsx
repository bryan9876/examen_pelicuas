import React, { useState } from 'react';
import usePeliculas from '../hooks/usePeliculas';
import '../index.css';

const Formulario = () => {
  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [genero, setGenero] = useState('');
  const { agregarPelicula } = usePeliculas();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!titulo || !descripcion || !genero) return;

    agregarPelicula({ titulo, descripcion, genero });
    setTitulo('');
    setDescripcion('');
    setGenero('');
  };

  return (
    <div className='sect-agregar'>
      <h5>Agrega una nueva pelicula aqui</h5>
      <div className='cont-form'>
        <form onSubmit={handleSubmit}>
          <h4>Titulo</h4>
          <input type="text" placeholder='titulo' value={titulo} onChange={(e) => setTitulo(e.target.value)} />

          <h4>Descripcion</h4>
          <input type="text" placeholder='descripcion' value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />

          <h4>Genero</h4>
          <input type="text" placeholder='genero' value={genero} onChange={(e) => setGenero(e.target.value)} />

          <button className='btn-agregar'>Agregar +</button>
        </form>
      </div>
    </div>
  );
};

export default Formulario;