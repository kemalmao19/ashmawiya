import { useReducer } from "react";
import { StateContext } from "../../state/context";
import { reducer, initialState } from "../../state/state";
import { Layout } from "../Layout/Layout";
import { Main } from "./main/Main";
import { LogoutModal } from "../Modal/LogoutModal";
import { Courses } from "./courses/Courses";
import { Resources } from "./resources/Resources";
import { useParams } from "react-router-dom";
import { capitalizeFirstLetter } from "../../lib/capitalizedFirst";

const showPanel = (panel: Panel["type"]) => (params: string) => {
  switch (panel && capitalizeFirstLetter(params)) {
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
  const params = useParams();

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      <Layout>{showPanel(state.panel.type)(params["*"] as string)}</Layout>
      <LogoutModal />
    </StateContext.Provider>
  );
}

export default Dashboard;
