export interface ListViewItemProps {
  LinkComponent: React.ComponentType<any>;
  icon?: React.ReactNode;
  title: string;
  subTitle?: string;
  to: string;
}

export const ListViewItem: React.FunctionComponent<ListViewItemProps> = ({
  LinkComponent,
  icon,
  to,
  title,
  subTitle,
}) => (
  <LinkComponent
    className="py-4 px-4 flex block hover:bg-gray-50 items-center"
    to={to}
  >
    <div className="flex-1 flex items-center">
      {icon}
      <div className="ml-3">
        <p className="text-sm font-medium text-gray-900">{title}</p>
        {subTitle && <p className="text-sm text-gray-500">{subTitle}</p>}
      </div>
    </div>
    <svg
      className="h-5 w-5 text-gray-400"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
        clipRule="evenodd"
      />
    </svg>
  </LinkComponent>
);
