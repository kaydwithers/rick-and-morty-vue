interface LocationInterface {
  name: string;
}

export interface CharacterInterface {
  id: number;
  image: string;
  location: LocationInterface;
  name: string;
  species: string;
  status: string;
}
