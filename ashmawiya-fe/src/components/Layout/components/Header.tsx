import { firstWord } from "../../../lib/firstWord";
import { LogoutOpener } from "../../Modal/LogoutModal";

const checkUsername = () => {
  const { username } = JSON.parse(localStorage.getItem("user") || "{}");
  if (username) {
    return firstWord(username);
  } else {
    return "😊";
  }
};

// const nameWord = firstWord(username);
const nameWord = checkUsername();
export const Header = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full">
      <div className="navbar bg-base-100 p-4">
        <div className="flex-1">
          <div className="form-control">
            <input
              id="search"
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto"
            />
          </div>
        </div>
        <div className="flex-none gap-2">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="avatar placeholder">
                <div className="bg-neutral text-neutral-content w-12 rounded-full">
                  <span>{nameWord}</span>
                </div>
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
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
