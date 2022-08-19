import { ReactNode } from 'react';

export interface StoryProps {
  hobby: {
    color: string;
    icon: ReactNode;
    content: ReactNode;
    label: string;
  }
}
