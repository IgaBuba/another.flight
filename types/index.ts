export interface Tile {
  title: string;
  daysCounter: number;
  month: number;
  year: number;
  path: string;
  image: {
    src: string;
    alt: string;
  };
};
