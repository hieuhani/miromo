import { cloneElement, isValidElement, ReactNode, useState } from 'react';

type CallbackFunction = () => void;

export interface ModalRenderProps {
  toggle: CallbackFunction;
}
export interface ModalProps {
  trigger: ReactNode;
}

export const Modal: React.FunctionComponent<ModalProps> = ({
  trigger,
  children,
}) => {
  const [isPresented, setIsPresented] = useState(false);
  const toggle = () => {
    setIsPresented(!isPresented);
  };

  const triggerButton =
    isValidElement(trigger) &&
    cloneElement(trigger, {
      onClick: toggle,
    });

  const node = typeof children === 'function' ? children({ toggle }) : children;

  return (
    <>
      {triggerButton}
      {isPresented && (
        <div className="fixed inset-0 backdrop-filter backdrop-blur-sm backdrop-contrast-50 overflow-y-auto">
          <div className="min-h-screen flex items-center justify-center px-4">
            <div onClick={toggle} className="inset-0 absolute" />
            <div className="bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl z-10">
              {node}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
