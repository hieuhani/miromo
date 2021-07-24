export const UserHeader: React.FunctionComponent = () => {
  return (
    <div className="flex items-center w-full p-4">
      <img
        className="h-8 w-8 rounded-full ring-2 ring-white mr-2"
        src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixqx=7qwKjEp7Xv&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        alt=""
      />

      <h4 className="text-lg mr-auto">
        Chào <span className="text-indigo-600 font-bold">Hiếu</span>,
      </h4>
    </div>
  );
};
