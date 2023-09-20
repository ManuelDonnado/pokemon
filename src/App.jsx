import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/Nav';
import Card from './components/Card';

function App() {
  const [pokemon, setPokemon] = useState ("pikachu");
  const [data, setData] = useState (null) ; 

  useEffect (() => {
    const getData = async () => {
      const res = await fetch (`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
      const datos = await res.json();

      setData(datos);
    }
    getData();
  }, [pokemon]) ;

  const handleSubmit = (e) => {
  e.preventDefault();
  const pokeName = e.target[0].value;
  setPokemon(pokeName);
  }

  const handleClick = (e) => {
    const pokeName = e.target.value;
    setPokemon(pokeName)
  }



  return (
    <>

      <Nav  handleSubmit= {handleSubmit} handleClick = {handleClick} />
      {data && <Card data={data}/>}
    </>
  )
}

export default App
