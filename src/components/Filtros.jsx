import React from 'react'

const Filtros = () => {
  return (
    <>
    <div className='cont-filtros'>
        <input type="text" placeholder='Buscar por titulo' />
        <select className='select-filt' name="" id="">
            <option value="">Buscar por genero</option>
            <option value="">Terror</option>
            <option value="">Ficcion</option>
        </select>
        <button className='btn-favoritos'>Mis favoritos</button>
    </div>
    </>
  )
}

export default Filtros