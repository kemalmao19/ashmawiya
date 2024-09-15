import useData from "../../hooks/useData";
import { Link } from "react-router-dom";

export const Cards = () => {
  const { state } = useData();
  const groupping = (state: State): tagGroup => ({
    wudu: state.courses.value.filter((x) => x.tag === "wudu"),
    ghusl: state.courses.value.filter((x) => x.tag === "ghusl"),
    tayammum: state.courses.value.filter((x) => x.tag === "tayammum"),
    salaat: state.courses.value.filter((x) => x.tag === "salaat"),
    siyam: state.courses.value.filter((x) => x.tag === "siyam"),
  });
  const group = groupping(state);

  return (
    <div className="text-black space-y-4">
      {Object.keys(group).map((tag: string, i: number) => {
        return (
          <div key={i.toString()} className="space-y-4">
            <div className="text-xl font-bold border-b-2 p-1">
              {tag.toUpperCase()}
            </div>
            <div className="grid grid-cols-3 gap-6">
              {group[tag].map((item: Course, index: number) => (
                <Link
                  to={`/courses/${item.id}`}
                  key={index.toString()}
                  className="flex items-center gap-6 p-6 bg-white hover:bg-cyan-300 transition-all delay-100 rounded-lg shadow-md"
                >
                  <div className="text-xl py-2 px-4 bg-gray-300 rounded-md ">
                    {item.id}
                  </div>
                  <h1 className="text-lg">{item.title}</h1>
                </Link>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};
