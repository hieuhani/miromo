import {
  cloneElement,
  isValidElement,
  ReactNode,
  useMemo,
  useState,
} from 'react';

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

  const triggerButton = useMemo(() => {
    if (!isValidElement(trigger)) {
      return null;
    }
    return cloneElement(trigger, {
      onClick: toggle,
    });
  }, []);

  return (
    <>
      {triggerButton}
      {isPresented && (
        <div className="fixed inset-0 backdrop-filter backdrop-blur-sm backdrop-contrast-50 overflow-y-auto">
          <div className="min-h-screen flex items-center justify-center px-4">
            <div onClick={toggle} className="inset-0 absolute" />
            <div className="bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl z-10">
              {children}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
