export const ProfileCard: React.FunctionComponent = () => {
  return (
    <div className="p-4 flex items-center flex-col">
      <img
        className="inline-block h-20 w-20 rounded-full"
        src="https://images.unsplash.com/photo-1526660690293-bcd32dc3b123?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        alt=""
      />
      <div className="text-center">
        <p className="font-medium text-gray-700 group-hover:text-gray-900">
          Hieu Tran
        </p>
        <p className="text-sm font-medium text-gray-500 group-hover:text-gray-700">
          hieutran.fu@gmail.com
        </p>
      </div>
    </div>
  );
};
