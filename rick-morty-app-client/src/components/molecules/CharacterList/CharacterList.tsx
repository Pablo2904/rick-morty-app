import React, { useEffect, useState } from "react";
import { fetchCharacters } from "api/characterApi";

export const CharacterList = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadCharacters = async () => {
      try {
        const data = await fetchCharacters();
        setCharacters(data);
      } catch (err) {}
    };
  });

  return <div>List of Characters</div>;
};
