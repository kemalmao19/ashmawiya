import { Cards } from "./Cards/Cards";

export const Courses = () => {
  return (
    <div className="flex flex-col p-16 gap-9 bg-base-100">
      <div id="head" className="text-base-content">
        <h1 className="text-lg">Courses</h1>
        <p className="text-sm">Here are all ashamawiya courses available</p>
      </div>
      <Cards />
    </div>
  );
};
