import { ReactNode, useState } from 'react';

export interface ActionSheetProps {
  trigger: ReactNode;
}

export const ActionSheet: React.FunctionComponent<ActionSheetProps> = ({
  trigger,
  children,
}) => {
  const [isPresented, setIsPresented] = useState(false);
  const toggle = () => {
    setIsPresented(!isPresented);
  };
  return (
    <>
      <button className="w-full" onClick={toggle}>
        {trigger}
      </button>
      {isPresented && (
        <div className="fixed inset-0 backdrop-filter backdrop-blur-sm backdrop-contrast-50 flex flex-col">
          <button className="flex-1" onClick={toggle} />
          <div className="bg-white rounded-t-lg">{children}</div>
        </div>
      )}
    </>
  );
};
