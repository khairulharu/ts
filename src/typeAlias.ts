export type ID = string | number;

export type Character = {
  id: ID;
  name: string;
  hp: number;
  //optinonal type
  //jadi bisa di isi atau tidak
  description?: string;
};

export type AccountGame = {
  id: ID;
  name: string;
  char: Character;
  //ini sama kalau tidak di isi ini tidak akan error
  description?: string;
};
