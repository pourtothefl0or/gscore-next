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

export interface ISubs {
  id: number;
  title: string;
  validDate: string;
  price: number;
  status: IStatus;
};

export interface ISubsLicense {
  id: number;
  subsId: number;
  code: string;
  domain: string;
  status: IStatus;
};

export type IStatus = 'Active' | 'Inactive' | 'Hold';
