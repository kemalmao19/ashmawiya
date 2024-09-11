import { logout } from "../../utils/logoutHandler";

export const LogoutModal = (): JSX.Element => {
  return (
    <>
      <input type="checkbox" id="my_modal_6" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box">
          <h3 className="text-lg font-bold">Are you sure you want to logout?</h3>
          <p className="py-4">Click the button below to confirm</p>
          <div className="modal-action">
            <h1 className="btn bg-red-500" onClick={logout}>Logout</h1>
            <label htmlFor="my_modal_6" className="btn">
              Close!
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export const LogoutOpener = () => {
  return (
    <>
      <label htmlFor="my_modal_6" className="btn">
        Logout
      </label>
    </>
  );
};
