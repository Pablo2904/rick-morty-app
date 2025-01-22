export type CharacterStatus = "Alive" | "Dead" | "unknown";

export interface Character {
  id: number;
  name: string;
  image: string;
  status: CharacterStatus;
  species: string;
  location: { name: string };
  episode: string[];
}
