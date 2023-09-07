import React from 'react'
import './pokemon.css';
import MyVerticallyCenteredModal from './MyVerticallyCenteredModal';


interface Props {
    name: string,
    id: number,
    image: string
}

const PokemonList:React.FC<Props> = (props) => {
    const {name,id,image } = props;
    const [modalShow, setModalShow] = React.useState(false);
  return (
    <div>
       <section className='pokemon-list-container' onClick={() => setModalShow(true)}>
            <p className='pokemon-name'>{name}</p>
            <img src={image} alt='pokemon' />
       </section>
       <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  )
}

export default PokemonList