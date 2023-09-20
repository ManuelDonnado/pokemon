import React from 'react'

function Nav( {handleSubmit,  handleClick} ) {
  return (
    <nav>
        <form onSubmit={handleSubmit} className='busqueda'>
            <div className='l-poke'>
            <label htmlFor="name" > Escribir el nombre de un pokemon: </label>
            </div> 
            <div className='i-poke'>
            <input type="text" />
            </div>
            <div className='b-poke'>
            <button  type="submit" > Buscar </button>
            </div>

        </form>
    </nav>


  );
}

export default Nav