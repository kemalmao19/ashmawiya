import { useParams } from "react-router-dom";
import useData from "../../hooks/useData";
import { useState } from "react";

export const Course = () => {
  const { id } = useParams();
  const { state } = useData();
  const [start, setStart] = useState(false);
  const course = state.courses.value.find((course) => course.id === Number(id));
  console.log(course);
  return (
    <div className="flex justify-center items-center my-16">
      <div>
        <h1 className="text-xl text-black">{course?.title.toUpperCase()}</h1>
        <div className="relative w-[720px] h-[405px]">
          <iframe
            className="absolute inset-0 w-full h-full"
            src={`${course?.url}?autoplay=1&mute=0`}
            allowFullScreen
          ></iframe>

          {!start ? (
            <button
              className="absolute inset-0 flex items-center justify-center bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-700"
              onClick={() => setStart(!start)}
            >
              Start Learning
            </button>
          ) : null}
        </div>

        <h1>Mark as Done</h1>
      </div>
    </div>
  );
};
