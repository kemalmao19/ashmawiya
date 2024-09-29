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

  type progressType = {
    title: string;
    icon: JSX.Element;
    number: number | string;
  };

  const progress: progressType[] = [
    {
      title: "Total Watched",
      icon: <Eye />,
      number: totalDuration + "m",
    },
    {
      title: "Completed",
      icon: <CircleCheckBig />,
      number: totalCompleted as number,
    },
    {
      title: "Quiz Score",
      icon: <CircleHelp />,
      number: 1000,
    },
  ];
  return (
    <div id="section1" className="flex flex-col space-y-6">
      <div id="head" className="text-base-content">
        <h1 className="text-lg">{`Welcome back ${username}!`}</h1>
        <p className="text-sm">Here overview of your course</p>
      </div>
      <div id="progress" className="grid grid-cols-3 gap-6">
        {progress.map((progres, i) => {
          const progressNum = ((progres.number as number) / 14) * 100;
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
              <div className="flex items-center gap-2">
                {progres.title === "Completed" ? (
                  <progress
                    className="progress progress-info w-full"
                    value={progressNum}
                    max="100"
                  ></progress>
                ) : (
                  <></>
                )}
                <p className="text-sm">{progres.number}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
