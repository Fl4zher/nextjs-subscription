import React, { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="mx-auto md:px-4 md:max-w-3xl min-h-screen">{children}</div>
  );
};

export default Layout;
