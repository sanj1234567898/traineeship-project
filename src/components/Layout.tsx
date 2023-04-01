import React from "react";

const Layout = ({ children }: any) => {
  return (
    <main className="main">
      <div className="container">{children}</div>
    </main>
  );
};

export default Layout;
