import { Progress } from "./components/Progress";
import { Recents } from "./components/Recents";
import useData from "./hooks/useData";

const userId: number = JSON.parse(localStorage.getItem("user") || "{}").id;

export const Main = () => {
  const { user } = useData(userId);
  console.log(user);
  return (
    <div className="flex flex-col p-16 gap-9">
      <Progress data={user.courses} />
      <Recents data={user.courses} />
      <div id="upcoming">upcoming</div>
    </div>
  );
};
