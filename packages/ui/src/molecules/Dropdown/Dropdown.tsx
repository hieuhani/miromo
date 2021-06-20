import { useState, cloneElement } from 'react';
import { usePopper } from 'react-popper';

export interface DropdownProps {
  trigger: React.ReactElement;
}
export const Dropdown: React.FunctionComponent<DropdownProps> = ({
  trigger,
  children,
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(
    null
  );
  const [arrowElement, setArrowElement] = useState<HTMLDivElement | null>(null);
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    modifiers: [{ name: 'arrow', options: { element: arrowElement } }],
  });
  const toggleDropdown = () => setDropdownOpen((prevState) => !prevState);

  return (
    <>
      {cloneElement(trigger, {
        ref: setReferenceElement,
        onClick: toggleDropdown,
      })}

      {dropdownOpen && (
        <div
          ref={setPopperElement}
          style={styles.popper}
          className="w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          {...attributes.popper}
        >
          {children}
          <div ref={setArrowElement} style={styles.arrow} />
        </div>
      )}
    </>
  );
};
