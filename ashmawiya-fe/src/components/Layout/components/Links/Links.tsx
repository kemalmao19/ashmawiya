import { useContext } from "react";
import { House, GraduationCap, Folder } from "lucide-react";
import { StateContext } from "../../../../state/context";
import { Link } from "react-router-dom";

type Menu = {
  name: string;
  link: string;
  icon: JSX.Element;
};

export const Links = ({ isHover }: { isHover: boolean }) => {
  const { state, dispatch } = useContext(StateContext) as ContextType;

  const menus: Menu[] = [
    {
      name: "Dashboard",
      link: "/dashboard",
      icon: <House />,
    },
    {
      name: "Courses",
      link: "/dashboard/courses",
      icon: <GraduationCap />,
    },
    {
      name: "Resources",
      link: "/dashboard/resources",
      icon: <Folder />,
    },
  ];

  return (
    <div id="menus" className="flex flex-col space-y-8">
      {menus.map((menu) => (
        <Link
          to={menu.link}
          id="menu"
          key={menu.name}
          className="flex items-center gap-3 cursor-pointer hover:text-black transition-all ease-out delay-100"
          style={{
            color: menu.name === state.panel.t ? "black" : "",
          }}
          onClick={() => dispatch({ t: menu.name } as Panel)}
        >
          {menu.icon}
          {isHover ? <p>{menu.name}</p> : null}
        </Link>
      ))}
    </div>
  );
};
