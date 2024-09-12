import { Progress } from "./components/Progress";
import { Recents } from "./components/Recents";
import useData from "./hooks/useData";

const userId: number = JSON.parse(localStorage.getItem("user") || "{}").id;

export const Main = () => {
  const { userCourse } = useData(userId);
  console.log(userCourse);
  return (
    <div className="flex flex-col p-16 gap-9">
      <Progress data={userCourse} />
      <Recents data={userCourse} />
      <div id="upcoming">upcoming</div>
    </div>
  );
};
