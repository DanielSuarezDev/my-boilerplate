import React, { FC } from "react";

type Props = {
  children: React.ReactNode;
};

export const Button: FC<Props> = ({ children }) => {
  return (
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      {children}
    </button>
  );
};
