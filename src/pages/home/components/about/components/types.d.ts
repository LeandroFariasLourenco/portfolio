import { ReactNode } from 'react';

export interface IStoryProps {
  hobby: {
    color: string;
    icon: ReactNode;
    content: ReactNode;
    label: string;
  }
}
