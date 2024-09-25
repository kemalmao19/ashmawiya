import { useReducer } from "react";
import { StateContext } from "../../state/context";
import { reducer, initialState } from "../../state/state";
import { Layout } from "../Layout/Layout";
import { LogoutModal } from "../Modal/LogoutModal";
import { AuthCheck } from "../../middleware";

function Dashboard({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      <AuthCheck>
        <Layout>{children}</Layout>
      </AuthCheck>
      <LogoutModal />
    </StateContext.Provider>
  );
}

export default Dashboard;
