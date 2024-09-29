import { Links } from "./Links/Links";
import { NotebookText, LogOut } from "lucide-react";
export const SideBar = ({
  isHover,
  setHover,
}: { isHover: boolean; setHover: (value: boolean) => void }) => {
  return (
    <div
      id="sideBar"
      className="fixed flex flex-col justify-between bg-base-100 h-screen px-4 py-8 transition-all duration-300 ease-in-out"
      onMouseEnter={() => setHover(!isHover)}
      onMouseLeave={() => setHover(!isHover)}
    >
      <div id="logo" className="text-lg font-bold flex gap-2 items-center">
        <NotebookText />
        {isHover ? <h1>ASHMAWIYA</h1> : null}
      </div>
      <Links isHover={isHover} />
      <label
        htmlFor="my_modal_6"
        id="logout"
        className="flex justify-center gap-2 items-center hover:text-accent cursor-pointer transition-all ease-out delay-100"
      >
        {" "}
        {isHover ? <p>Logout</p> : null}
        <LogOut />
      </label>
    </div>
  );
};
