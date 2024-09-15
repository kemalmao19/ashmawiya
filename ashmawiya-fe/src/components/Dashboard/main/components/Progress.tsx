import { Eye, CircleCheckBig, CircleHelp } from "lucide-react";

const { username } = JSON.parse(localStorage.getItem("user") || "{}");

export const Progress = ({ data }: { data?: UserCourse[] }) => {
  const totalCompleted = data?.reduce(
    (acc, course) => acc + (course.isComplete ? 1 : 0),
    0,
  );
  const totalDuration = data?.reduce(
    (acc, d) => (d.isComplete ? acc + d.course.videoDuration : acc),
    0,
  );

  const progress = [
    {
      title: "Total Watched",
      icon: <Eye />,
      number: totalDuration + "m",
    },
    {
      title: "Completed",
      icon: <CircleCheckBig />,
      number: totalCompleted,
    },
    {
      title: "Quiz Score",
      icon: <CircleHelp />,
      number: 1000,
    },
  ];
  return (
    <div id="section1" className="flex flex-col space-y-6">
      <div id="head" className="text-black">
        <h1 className="text-lg">{`Welcome back ${username}!`}</h1>
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
