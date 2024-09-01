export interface Hero {
  id: number;
  name: string;
  skill: boolean;
  pasif: string;
  readonly nib: string;
  readonly npwp: string;
}

export interface UpdatedHero extends Hero {
  jungleEarning: number;
}

export interface Char {
  name: string;
  eko: "string";
}