import cx from 'classnames';
export interface RowSelectProps {
  selected?: boolean;
  title: string;
  description?: string;
  rightText?: string;
}

export const RowSelect: React.FunctionComponent<RowSelectProps> = ({
  selected = false,
  title,
  description,
  rightText,
}) => {
  return (
    <label
      className="
        relative
        rounded-lg
        border
        border-gray-300
        bg-white
        shadow-sm
        px-4
        py-2
        cursor-pointer
        hover:border-gray-400
        flex
        justify-between
        items-center
        focus-within:ring-1
        focus-within:ring-offset-2
        focus-within:ring-indigo-500
      "
    >
      <div>
        <p className="font-medium text-gray-900">{title}</p>
        <div className="text-sm text-gray-500">{description}</div>
      </div>
      <div className="mt-2 flex text-sm sm:mt-0 sm:block sm:ml-4 sm:text-right">
        <div className="font-medium text-gray-900">{rightText}</div>
      </div>
      <div
        className={cx(
          'absolute -inset-px rounded-lg border-2 pointer-events-none',
          selected ? 'border-indigo-500' : 'border-transparent'
        )}
        aria-hidden="true"
      ></div>
    </label>
  );
};
