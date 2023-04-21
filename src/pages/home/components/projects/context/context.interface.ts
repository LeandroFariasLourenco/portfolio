import React from 'react';

export interface IProjectsContext {
  mobile: {
    lightbox: {
      open: boolean;
      setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    },
  },
}
