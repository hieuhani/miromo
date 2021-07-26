import cx from 'classnames';
import { ReactNode } from 'react';
export interface NavigationBarProps {
  title: string;
  className: string;
  leftItem: ReactNode;
  rightItem: ReactNode;
}
export const NavigationBar: React.FunctionComponent<NavigationBarProps> = ({
  leftItem,
  title,
  className,
  rightItem,
}) => (
  <div
    className={cx(
      'bg-white shadow flex justify-between items-center py-3',
      className
    )}
  >
    <div>{leftItem}</div>
    {title}
    <div>{rightItem}</div>
  </div>
);
