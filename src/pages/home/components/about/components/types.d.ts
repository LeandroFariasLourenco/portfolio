import { ReactNode } from 'react';

export interface IStoryProps {
  onClick: (storyName: string, open: boolean) => void;
  open: boolean;
  hobby: {
    color: string;
    icon: ReactNode;
    content: ReactNode;
    label: string;
  }
}
