import { ReactNode } from 'react';

export interface ICourse {
  title: string;
  type: string;
  location: string;
  description: ReactNode;
  duration: string;
  logo: string;
}
