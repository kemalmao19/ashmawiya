import { useReducer } from "react";
import { StateContext } from "../../state/context";
import { reducer, initialState } from "../../state/state";
import { Layout } from "../Layout/Layout";
import { LogoutModal } from "../Modal/LogoutModal";
import { AuthCheck } from "../../middleware";

// const showPanel = (panel: Panel["type"]) => (params: string) => {
//   switch (panel && capitalizeFirstLetter(params)) {
//     case "Dashboard":
//       return <Main />;
//     case "Courses":
//       return <Courses />;
//     case "Resources":
//       return <Resources />;
//     default:
//       return <Main />;
//   }
// };

function Dashboard({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {/*<Layout>{showPanel(state.panel.type)(params["*"] as string)}</Layout>*/}
      <AuthCheck>
        <Layout>{children}</Layout>
      </AuthCheck>
      <LogoutModal />
    </StateContext.Provider>
  );
}

export default Dashboard;
