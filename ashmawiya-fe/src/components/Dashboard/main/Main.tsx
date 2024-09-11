import { Progress } from "./components/Progress";

const recentCourse = [
  {
    id: 1,
    name: "Nawaqid al wudu",
  },
  {
    id: 2,
    name: "Nawaqid al wudu2",
  },
  {
    id: 3,
    name: "Nawaqid al wudu3",
  },
];

export const Main = () => {
  return (
    <div className="flex flex-col p-16 gap-9">
      <Progress />
      <div id="recents" className="grid lg:grid-cols-3">
        <div className="col-span-2">
          <h1>Recent Watched Course</h1>
          <div className="grid grid-cols-2 gap-6">
            {recentCourse.map((course, i) => {
              return (
                i<2 && (
                  <div key={course.id.toString()} className="flex items-center gap-6 p-6 bg-white rounded-lg shadow-md">
                  <div className="text-xl text-black py-2 px-4 bg-gray-300 rounded-md ">
                    {i + 1}
                  </div>
                  <h1 className="text-black text-xl">{course.name}</h1>
                </div>
                )
              );
            })}
          </div>
        </div>
        <div>
          <h1>Daily Progress</h1>
        </div>
      </div>
      <div id="upcoming">upcoming</div>
    </div>
  );
};
