import { useReducer } from "react";
import { StateContext } from "../../state/context";
import { reducer, initialState } from "../../state/state";
import { Layout } from "../Layout/Layout";
import { LogoutModal } from "../Modal/LogoutModal";
import { AuthCheck } from "../../middleware";
import { getAllCourses, getUserCourse } from "../../utils/fetchHandler";
import React from "react";
const userId: number = JSON.parse(localStorage.getItem("user") || "{}").id;

function Dashboard({
  children,
  direction,
}: { children: React.ReactNode; direction?: string }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  React.useEffect(() => {
    getUserCourse(userId)(dispatch);
    getAllCourses(dispatch);
  }, [dispatch]);

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      <AuthCheck direction={direction}>
        <Layout>{children}</Layout>
      </AuthCheck>
      <LogoutModal />
    </StateContext.Provider>
  );
}

export default Dashboard;
