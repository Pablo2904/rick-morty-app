import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCharacters } from "state/charactersSlice/charactersSlice";
import { RootState, AppDispatch } from "state/store/store";

const Characters: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { characters, loading, error } = useSelector(
    (state: RootState) => state.characters
  );

  useEffect(() => {
    dispatch(fetchCharacters());
  }, []);

  if (loading) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <p>Error: {error}</p>
      </div>
    );
  }

  return (
    <div>
      {characters.map((character) => (
        <div key={character.id}>
          <h3>{character.name}</h3>
          <p>Status: {character.id}</p>
          <p>Species: {character.species}</p>
          <p>Location: {character.location.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Characters;
