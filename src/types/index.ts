export interface IOffer   {
  id: number;
  sitesCount: number;
  name: string;
  prices: [
    {
      id: number;
      isActive: boolean;
      productId: number;
      price: string;
    },
  ];
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

export type IStatus = 'Active' | 'Inactive' | 'Hold';

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

