import { HTMLProps } from 'react';
import cx from 'classnames';

export interface NavProps extends HTMLProps<HTMLElement> {}

export const Nav: React.FunctionComponent<NavProps> = ({
  children,
  className,
  ...props
}) => (
  <nav className={cx(className)} {...props}>
    {children}
  </nav>
);
