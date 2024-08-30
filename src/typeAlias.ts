export type ID = string | number;

export type Character = {
  id: ID;
  name: string;
  hp: number;
  //optinonal type
  description?: string;
};

export type AccountGame = {
  id: ID;
  name: string;
  char: Character;
  description?: string;
};
