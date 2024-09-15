import { useReducer } from "react";
import { StateContext } from "../../state/context";
import { reducer, initialState } from "../../state/state";
import { Layout } from "../Layout/Layout";
import { Main } from "./main/Main";
import { LogoutModal } from "../Modal/LogoutModal";
import { Courses } from "./courses/Courses";
import { Resources } from "./resources/Resources";

const showPanel = (panel: Panel["type"]) => {
  switch (panel) {
    case "Dashboard":
      return <Main />;
    case "Courses":
      return <Courses />;
    case "Resources":
      return <Resources />;
    default:
      return <Main />;
  }
};

function Dashboard() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StateContext.Provider value={{ state, dispatch }}>
      <Layout>{showPanel(state.panel.type)}</Layout>
      <LogoutModal />
    </StateContext.Provider>
  );
}

export default Dashboard;
