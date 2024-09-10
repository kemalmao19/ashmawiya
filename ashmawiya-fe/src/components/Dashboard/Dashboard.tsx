import { useReducer, createContext } from "react";
import { reducer, initialState } from "../../state/state";
import { Layout } from "../Layout/Layout";
import { Main } from "./main/Main";
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

export const StateContext = createContext<ContextType|undefined>(undefined);

function Dashboard() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      <Layout>{showPanel(state.panel.type)}</Layout>
    </StateContext.Provider>
  );
}

export default Dashboard;
