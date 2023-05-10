import { LazyExoticComponent } from 'react';

export interface IWelcomeProviderProps {
  children: JSX.Element | LazyExoticComponent<() => JSX.Element>;
}
