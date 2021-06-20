import cx from 'classnames';

export interface TabBarItemProps {
  LinkComponent: React.ComponentType<any>;
  IconComponent: React.ComponentType<any>;
  active?: boolean;
  name: string;
  to: string;
}
export const TabBarItem: React.FunctionComponent<TabBarItemProps> = ({
  LinkComponent,
  IconComponent,
  active,
  name,
  to,
}) => {
  return (
    <LinkComponent
      className={cx(
        active ? 'text-indigo-600' : 'text-gray-500 hover:text-gray-700 ',
        'group flex-col items-center flex py-2 px-1 font-medium text-sm flex-grow flex-shrink-0'
      )}
      to={to}
      aria-current={active ? name : undefined}
    >
      {IconComponent && (
        <IconComponent
          className={cx(
            active
              ? 'text-indigo-500'
              : 'text-gray-400 group-hover:text-gray-500',
            'h-5 w-5'
          )}
          aria-hidden="true"
        />
      )}
      <span>{name}</span>
    </LinkComponent>
  );
};
