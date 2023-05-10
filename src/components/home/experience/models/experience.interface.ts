import { ReactNode } from 'react';

interface ICompany {
  name: string;
  logo: string;
  query: string;
}

export interface IExperience {
  date: string;
  description: ReactNode;
  title: string;
  location: string;
  type: string;
  stack: string;
  icon: string;
  company: ICompany;
}
