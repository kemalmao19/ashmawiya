import { Progress } from "./components/Progress";
import { Recents } from "./components/Recents";
import React from "react";
import { StateContext } from "../../../state/context";

export const Main = () => {
  const { state } = React.useContext(StateContext) as ContextType;

  return (
    <div className="flex flex-col p-16 gap-9">
      <Progress data={state.user.value} />
      <Recents data={state.user.value} />
      <div id="upcoming">upcoming</div>
    </div>
  );
};
