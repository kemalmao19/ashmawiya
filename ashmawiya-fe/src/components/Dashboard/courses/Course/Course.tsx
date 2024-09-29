import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { StateContext } from "../../../../state/context";
import { useFetch, doesCourseExist } from "./hooks/useHooks";
import { Note } from "./Note/Note";
export const Course = () => {
  const { id } = useParams(); // course id
  const { state } = useContext(StateContext) as ContextType;
  const { handleDone, handleAddCourse } = useFetch();

  const userId = JSON.parse(localStorage.getItem("user") || "{}").id; // user id
  const [start, setStart] = useState(false);

  const [done, setDone] = useState(false);

  const course = state.courses.value.find((course) => course.id === Number(id)); // course data

  const userCourse = state.user.value.find(
    (course) => course.courseId === Number(id),
  ); // user course data

  useEffect(() => {
    setStart(doesCourseExist(state, Number(id), userId));
  }, [state, id, userId]);

  console.log(userCourse);

  return (
    <div className="flex justify-center items-center py-16 bg-base-100">
      <div className="flex flex-col gap-4">
        <h1 className="text-xl text-black">{course?.title.toUpperCase()}</h1>
        <div className="relative w-[720px] h-[405px]">
          <iframe
            className="absolute inset-0 w-full h-full"
            src={`${course?.url}?autoplay=1&mute=0`}
            allowFullScreen
          ></iframe>

          {!start ? (
            <button
              className="absolute inset-0 flex items-center justify-center bg-cyan-500 text-white text-2xl font-bold py-2 px-4 hover:bg-cyan-700"
              onClick={() =>
                handleAddCourse({ start, setStart })(userId, Number(id))
              }
            >
              Start Learning
            </button>
          ) : null}
        </div>

        {start ? (
          <button
            className={`${userCourse?.isComplete || done
                ? "bg-cyan-700 opacity-50 cursor-not-allowed"
                : "bg-cyan-500"
              } hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded-md inline-block`}
            onClick={() => handleDone({ done, setDone })(userCourse!.id)}
          >
            {userCourse?.isComplete || done ? "Completed" : "Mark as Complete"}
          </button>
        ) : null}

        {userCourse ? <Note data={userCourse!} /> : <></>}
      </div>
    </div>
  );
};
