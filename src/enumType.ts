export enum InGameLevel {
  EPIC = 2445,
  GOLD = 890,
  MASTER = 45,
  LEGEND = 23
}

export type Player = {
  id: string;
  name: string;
  level: InGameLevel;
};
