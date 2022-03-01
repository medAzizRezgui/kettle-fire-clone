import React from "react";
import NavigationBar from "./NavigationBar";
import Stores from "./Stores";
import Discount from "./Discount";
const Layout: React.FC = ({ children }) => {
  return (
    <>
      <NavigationBar />
      {children}
      <Stores />
      <Discount />
    </>
  );
};

export default Layout;
