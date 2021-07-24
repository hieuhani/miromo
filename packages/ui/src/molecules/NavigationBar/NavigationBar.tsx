export interface NavigationBarProps {
  title: string;
}
export const NavigationBar: React.FunctionComponent<NavigationBarProps> = ({
  title,
}) => (
  <div className="bg-white shadow flex justify-center h-12 items-center">
    {title}
  </div>
);
