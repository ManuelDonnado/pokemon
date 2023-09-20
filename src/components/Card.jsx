import React from 'react'
import poke from './imagenes/pokedex.png';
import bola from './imagenes/pokebola.png';

function Card({data}) {

    console.log(data);

  return (
    <div> 
       
        <div className='pokedex'>  
            <img src={bola} alt="pokebola" className='pokebola'/> 
            <img src={data.sprites.other.home.front_default} alt={data.name} className='pokemon' />
            <img src={poke} alt="pokedex" className='pokedex'/> 
        </div>
       

        <table class="table table-striped table-hover">
            <thead>
                <tr>
                    <th>Propiedades: </th>
                    <th> Valor: </th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td>Id: </td>
                    <td> {data.id} </td>
                </tr>
                <tr>
                    <td>Nombre: </td>
                    <td> {data.name} </td>
                </tr>
                <tr>
                    <td>Altura: </td>
                    <td> {data.height} </td>
                </tr>
                <tr>
                    <td>Peso: </td>
                    <td> {data.weight} </td>
                </tr>
                <tr>
                    <td>Experiencia: </td>
                    <td> {data.base_experience} </td>
                </tr>


            </tbody>

        </table>

    </div>
  )
}

export default Card