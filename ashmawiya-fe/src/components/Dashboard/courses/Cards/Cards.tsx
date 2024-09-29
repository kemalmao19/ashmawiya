import useData from "../../hooks/useData";
import { Link } from "react-router-dom";

const coursePredicate = (state: State) => (str: string) =>
  state.courses.value.filter((x) => x.tag === str);

export const Cards = () => {
  const { state } = useData();
  const groupPredicate = coursePredicate(state);
  const groupping = (): tagGroup => ({
    wudu: groupPredicate("wudu"),
    ghusl: groupPredicate("ghusl"),
    tayammum: groupPredicate("tayammum"),
    salaat: groupPredicate("salaat"),
    siyam: groupPredicate("siyam"),
  });
  const group = groupping();

  return (
    <div className="text-black space-y-4">
      {Object.keys(group).map((tag: string, i: number) => {
        return (
          <div key={i.toString()} className="space-y-4">
            <div className="text-xl font-bold border-b-2 border-accent p-1 text-base-content">
              {tag.toUpperCase()}
            </div>
            <div className="grid grid-cols-3 gap-6">
              {group[tag].map((item: Course, index: number) => (
                <Link
                  to={`/dashboard/courses/${item.id}`}
                  key={index.toString()}
                  className="flex items-center gap-6 p-6 bg-white hover:bg-accent transition-all delay-100 rounded-lg shadow-md"
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
