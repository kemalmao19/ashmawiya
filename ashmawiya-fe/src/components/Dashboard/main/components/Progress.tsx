import { Eye, CircleCheckBig, CircleHelp } from "lucide-react";
const user = "Kemal";

const progress = [
  {
    title: "Total Watched",
    icon: <Eye />,
    number: 1000 + "h",
  },
  {
    title: "Completed",
    icon: <CircleCheckBig />,
    number: 1000,
  },
  {
    title: "Quiz Score",
    icon: <CircleHelp />,
    number: 1000,
  },
];

export const Progress = () => {
  return (
    <div id="section1" className="flex flex-col space-y-6">
      <div id="head" className="text-black">
        <h1 className="text-lg">{`Welcome back ${user}!`}</h1>
        <p className="text-sm">Here overview of your course</p>
      </div>
      <div id="progress" className="grid grid-cols-3 gap-6">
        {progress.map((progres, i) => {
          return (
            <div
              key={i.toString()}
              className="flex flex-col gap-6 p-6 bg-white rounded-lg shadow-md"
            >
              <div id="title" className="flex justify-between">
                <h1 className="text-black">{progres.title}</h1>
                <div className="bg-black p-1 rounded-md text-white">
                  {progres.icon}
                </div>
              </div>
              <p className="text-sm">{progres.number}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
