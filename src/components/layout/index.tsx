import { ReactNode } from "react";
import MainHeader from "./main-header";

interface ILayoutProp {
  children: ReactNode;
}

const Layout = ({ children }: ILayoutProp) => {
  return (
    <>
      <MainHeader />
      <main>{children}</main>
    </>
  );
};

export default Layout;
