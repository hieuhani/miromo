import { HTMLProps } from 'react';
import cx from 'classnames';
import { StyleProps } from '../../types';
import { getStyleClassname } from '../../utils';

export interface NavLinkProps extends HTMLProps<HTMLAnchorElement>, StyleProps {
  active?: boolean;
}

export const NavLink: React.FunctionComponent<NavLinkProps> = ({
  children,
  className,
  active,
  ...props
}) => {
  const spacingClassName = getStyleClassname(props);
  return (
    <a
      className={cx(
        'group flex items-center px-2 py-2 text-sm font-medium rounded-md',
        active
          ? 'bg-gray-900 text-white'
          : 'text-gray-300 hover:bg-gray-700 hover:text-white',
        className,
        spacingClassName
      )}
      {...props}
    >
      {children}
    </a>
  );
};
