import { Progress } from "./components/Progress";
import { Recents } from "./components/Recents";
import useData from "../hooks/useData";

const userId: number = JSON.parse(localStorage.getItem("user") || "{}").id;

export const Main = () => {
  const { state } = useData(userId);
  console.log(state);
  return (
    <div className="flex flex-col p-16 gap-9">
      <Progress data={state.user.value} />
      <Recents data={state.user.value} />
      <div id="upcoming">upcoming</div>
    </div>
  );
};
