import { Link } from "react-router-dom";

export const Recents = ({ data }: { data?: UserCourse[] }) => {
  if (!data) {
    return <div>No data</div>;
  }

  console.log(data);

  return (
    <div id="recents" className="grid lg:grid-cols-3 text-black gap-6">
      <div className="col-span-2">
        <h1 className="text-lg">Recent Watched Course</h1>
        <div className="grid grid-cols-2 gap-6">
          {data.map((x, i) => {
            return (
              i < 2 && (
                <Link
                  to={`/dashboard/courses/${x.course.id}`}
                  key={x.course.id.toString()}
                  className="flex items-center gap-6 p-6 bg-white hover:bg-cyan-300 transition-all delay-100 rounded-lg shadow-md cursor-pointer"
                >
                  <div className="text-xl text-black py-2 px-4 bg-gray-300 rounded-md ">
                    {i + 1}
                  </div>
                  <h1 className="text-black text-lg">{x.course.title}</h1>
                </Link>
              )
            );
          })}
        </div>
      </div>
      <div className="flex flex-col gap-1 p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-lg">Daily Progress</h1>
        {data.map((x, i) => {
          return (
            i < 3 && (
              <div
                key={x.course.id.toString()}
                className="flex items-center gap-2 p-1 hover:bg-gray-200 cursor-pointer"
              >
                <div className="text-lg text-black">{i + 1}</div>
                <h1 className="text-black text-lg">{x.course.title}</h1>
              </div>
            )
          );
        })}
      </div>
    </div>
  );
};
