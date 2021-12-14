import React from 'react';
import { Link } from 'react-router-dom';
import useCharacters from '../hooks/useCharacters';
import './CharacterList.css';

function CharactersList() {
    
    const {error, loading, data} = useCharacters();

    if(loading) return <div>Spinner...</div>

    if(error) return <div>Something went wrong</div>

    return (
      <div className="CharacterList">
        {data.characters.results.map((character) => {
          return (
            <Link key={character.id} to={`/${character.id}`}>
              <img src={character.image} alt="img" />
              <h2>{character.name}</h2>
            </Link>
          );
        })}
      </div>
    );
}

export default CharactersList

