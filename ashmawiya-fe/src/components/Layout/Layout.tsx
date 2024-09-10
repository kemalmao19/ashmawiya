import { useState } from "react";
import { SideBar } from "./components/SideBar";
import { Header } from "./components/Header";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isHover, setHover] = useState(false);
  return (
    <div className="flex bg-gray-50">
      <SideBar isHover={isHover} setHover={setHover} />
      <Header>{children}</Header>
    </div>
  );
};
