import React from 'react';
import usePeliculas from '../hooks/usePeliculas';

const Lista = () => {
  const { peliculas } = usePeliculas();

  return (
    <div className='cont-lista'>
      <h4 className='h4-title'>Peliculas disponibles</h4>
      <table>
        <thead>
          <tr>
            <th>Favorito</th>
            <th>TITULO</th>
            <th>DESCRIPCION</th>
            <th>GENERO</th>
            <th> - </th>
          </tr>
        </thead>
        <tbody>
          {peliculas.map((peli, index) => (
            <tr key={index}>
              <td>
                <button className='btn-favorito'>Añadir</button>
              </td>
              <td>{peli.titulo}</td>
              <td>{peli.descripcion}</td>
              <td>{peli.genero}</td>
              <td>
                <button className='btn-table'>Editar</button>
                <button className='btn-table'>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Lista;