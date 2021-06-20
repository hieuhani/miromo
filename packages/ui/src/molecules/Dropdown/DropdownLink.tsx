import { HTMLProps } from 'react';

export interface DropdownLinkProps extends HTMLProps<HTMLAnchorElement> {}

export const DropdownLink: React.FunctionComponent<DropdownLinkProps> = ({
  children,
  ...props
}) => (
  <a
    className="block px-4 py-2 text-sm text-gray-700"
    role="menuitem"
    {...props}
  >
    {children}
  </a>
);
