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

export interface Social {
  icon: string;
  alt: string;
  url: string;
};
