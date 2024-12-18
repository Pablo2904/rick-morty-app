import React, { useEffect, useState } from "react";
import { getCharacters } from "api/characterApi";
import { Character } from "types/Character";
import Avatar from "components/atoms/Avatar/Avatar";

export const CharacterList = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadCharacters = async () => {
      try {
        const data = await getCharacters();
        setCharacters(data);
      } catch (err) {
        setError("Nie udało się załadować postaci");
      } finally {
        setLoading(false);
      }
    };

    loadCharacters();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>List of Characters:</h2>

      <ul>
        {characters.map((character) => (
          <li key={character.id}>
            <Avatar src={character.image} alt={character.name} size="medium" />
            <span>{character.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
