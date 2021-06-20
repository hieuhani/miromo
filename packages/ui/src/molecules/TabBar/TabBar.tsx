export const TabBar: React.FunctionComponent = ({ children }) => (
  <nav
    className="flex space-x-8 content-center border-t border-gray-300"
    aria-label="Tabs"
  >
    {children}
  </nav>
);
