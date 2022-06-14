export interface IOffer {
  id: number;
  title: string;
  description: string;
  price: number;
  points: string[];
};

export interface IStep {
  id: number;
  title: string;
};

export interface ITable {
  id: number;
  title: string;
  price: number;
};
