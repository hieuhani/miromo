import cx from 'classnames';
import { HTMLProps } from 'react';

export interface TabBarProps extends HTMLProps<HTMLDivElement> {}

export const TabBar: React.FunctionComponent = ({ children, className }) => (
  <nav
    className={cx(
      'flex space-x-8 content-center border-t border-gray-300 z-10 bg-white',
      className
    )}
    aria-label="Tabs"
  >
    {children}
  </nav>
);
