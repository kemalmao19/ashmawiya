import { Progress } from "./components/Progress";

export const Main = () => {
  return (
    <div className="flex flex-col p-16 gap-9">
      <Progress />
      <div id="recents">
        <h1>Recent Watched Course</h1>
      </div>
      <div id="upcoming">upcoming</div>
    </div>
  );
};
