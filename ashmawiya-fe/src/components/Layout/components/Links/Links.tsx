import { useContext } from "react";
import { House, GraduationCap, Folder } from "lucide-react";
import { StateContext } from "../../../Dashboard/Dashboard";

type Menu = {
  name: string;
  link: string;
  icon: JSX.Element;
};

export const Links = ({ isHover }: { isHover: boolean }) => {
  const { state, dispatch } = useContext(StateContext)!;

  const menus: Menu[] = [
    {
      name: "Dashboard",
      link: "#",
      icon: (<House />),
    },
    {
      name: "Courses",
      link: "#",
      icon: (<GraduationCap />),
    },
    {
      name: "Resources",
      link: "#",
      icon: (<Folder />),
    },
  ];

  return (
    <div id="menus" className="flex flex-col space-y-8">
      {menus.map((menu) => (
        <div
          id="menu"
          key={menu.name}
          className="flex items-center gap-3 cursor-pointer hover:text-black transition-all ease-out delay-100"
          style={{
            color: menu.name === state.panel.type ? "black" : "",
          }}
          onClick={() => dispatch({type: menu.name} as Panel)}
        >
          {menu.icon}
          {isHover ? <p>{menu.name}</p> : null}
        </div>
      ))}
    </div>
  );
};
