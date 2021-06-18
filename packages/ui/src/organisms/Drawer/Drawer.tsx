import { Logo } from '../../atoms/Logo';
import { Overlay } from '../../atoms/Overlay';
import { Nav, NavLink } from '../../molecules/Nav';

export interface DrawerProps {
  onClose: () => void;
}
export const Drawer: React.FunctionComponent<DrawerProps> = ({ onClose }) => {
  return (
    <div
      className="fixed inset-0 flex z-40 md:hidden"
      role="dialog"
      aria-modal="true"
    >
      <Overlay />

      <div className="relative flex-1 flex flex-col max-w-xs w-full pb-4 bg-gray-800">
        <div className="absolute top-0 right-0 -mr-12 pt-2">
          <button
            className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            onClick={onClose}
          >
            <span className="sr-only">Close sidebar</span>
            <svg
              className="h-6 w-6 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <Logo />
        <div className="mt-5 flex-1 h-0 overflow-y-auto">
          <Nav className="px-2 space-y-1">
            <NavLink href="#" active>
              <svg
                className="text-gray-300 mr-4 flex-shrink-0 h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              Dashboard
            </NavLink>

            <NavLink href="#">
              <svg
                className="text-gray-400 group-hover:text-gray-300 mr-4 flex-shrink-0 h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
              Team
            </NavLink>
          </Nav>
        </div>
      </div>

      <div className="flex-shrink-0 w-14" aria-hidden="true"></div>
    </div>
  );
};
