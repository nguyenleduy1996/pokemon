import React from 'react'
import { Pokemon } from '../Interface/Interface'
import PokemonList from './PokemonList';


interface Props {
    listPokemon: Pokemon[];
    
}
const PokemonCollection:React.FC<Props> = (props) => {

    const {listPokemon } = props;
  return (
    <div>
       <section className='collection-container'>
            {
                listPokemon.map((pokemon, index) =>{
                    return (
                        <div key={index}>
                            <PokemonList
                                name={pokemon.name}
                                id={pokemon.id}
                                image={pokemon.sprites.front_default}
                            />
                        </div>
                    )
                })
            }
       </section>
    </div>
  )
}

export default PokemonCollection