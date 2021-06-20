import cx from 'classnames';
import { HTMLProps } from 'react';
import { ListViewItem, ListViewItemProps } from './ListViewItem';

export interface ListViewProps extends HTMLProps<HTMLUListElement> {
  items: ListViewItemProps[];
}

export const ListView: React.FunctionComponent<ListViewProps> = ({
  className,
  items,
  ...props
}) => (
  <ul className={cx('divide-y divide-gray-200', className)} {...props}>
    {items.map((item, index) => (
      <li key={index}>
        <ListViewItem {...item} />
      </li>
    ))}
  </ul>
);
