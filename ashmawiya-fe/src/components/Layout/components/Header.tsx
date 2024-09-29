import { useEffect, useState } from "react";
import { firstWord } from "../../../lib/firstWord";
import { LogoutOpener } from "../../Modal/LogoutModal";

const { username } = JSON.parse(localStorage.getItem("user") || "{}");
const checkUsername = () => {
  if (username) {
    return firstWord(username);
  } else {
    return "😊";
  }
};

const nameWord = checkUsername();

export const Header = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "retro");

  const toggleTheme = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setTheme("night");
    } else {
      setTheme("retro");
    }
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document
      .querySelector("html")
      ?.setAttribute("data-theme", localTheme || "retro");
  }, [theme]);

  return (
    <div className="w-full pl-14">
      <div className="navbar bg-base-100 p-6 shadow-md">
        <div className="flex-1">
          <div className="font-bold text-base-content">ASHMAWIYA</div>
        </div>
        <div className="flex-none gap-2">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="avatar placeholder">
                <div className="bg-black text-neutral-content w-10 rounded-full">
                  <span>{nameWord}</span>
                </div>
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <div className="flex justify-between items-center">
                <input
                  type="checkbox"
                  value="synthwave"
                  className="toggle theme-controller"
                  onChange={toggleTheme}
                  checked={theme === "retro" ? false : true}
                />
                <p className="p-2 flex justify-center">{username}</p>
              </div>
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <LogoutOpener />
            </ul>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
};
