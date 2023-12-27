import React from 'react';
import { useState, useEffect } from "react";
import './App.css';
import axios from 'axios';
import PokemonCollection from './component/PokemonCollection';
import { Pokemon } from './Interface/Interface';

interface Pokemons {
  name: string,
  url: string
}


function App() {
  const [listPokemon, setListPokemon ] = useState<Pokemon[]>([]);
  const [nextUrl, setNextUrl ] = useState<string>("");
  const [loading, setLoading ] = useState<boolean>(true);
  useEffect(() => {
    const getPokemon = async () => {
        console.log("Toi code o day")
        const res = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=20&offset=20")
        setNextUrl(res.data.next)
        res.data.results.forEach( async (pokemon:Pokemons) =>{
            const poke = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
            setListPokemon((p) => [...p, poke.data])
            setLoading(false)
            console.log("hehe")
        })
    }
    getPokemon()
  },[])

  const loadMorePokemon = () =>{
      setLoading(true)
      const getPokemon = async () => {
        const res = await axios.get(nextUrl)
        setNextUrl(res.data.next)
        res.data.results.forEach( async (pokemon:Pokemons) =>{
            const poke = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
            setListPokemon((p) => [...p, poke.data])
            setLoading(false)
        })
      }
    getPokemon()
  }
  return (
    <div className="App">
        <div className="container">
           <header  className="pokemon-header">
              Pokemon
           </header>
           <PokemonCollection   listPokemon={listPokemon}/>
           <div className='btn'>
              <button onClick={() => loadMorePokemon()}>
               {loading ? "Loading..." : "Load more"}{" "}
              </button>

           </div>
        </div>
    </div>
  );
}

export default App;
