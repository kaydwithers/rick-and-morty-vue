interface LocationInterface {
  name: string;
}

export interface CharacterInterface {
  episode: Array<string>;
  id: number;
  image: string;
  location: LocationInterface;
  name: string;
  species: string;
  status: string;
}
