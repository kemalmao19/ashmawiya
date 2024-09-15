import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { StateContext } from "../../../../state/context";
import { checkEnvironment } from "../../../../config/apiUrl";

const updateData = async (endpoint: string, value) => {
  const url = checkEnvironment() + endpoint;
  try {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(value),
    });
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    // const json = await response.json();
    console.log("update done");
  } catch (error) {
    console.error(error);
  }
};

export const Course = () => {
  const { id } = useParams();
  const { state } = useContext(StateContext) as ContextType;

  const [start, setStart] = useState(false);
  const course = state.courses.value.find((course) => course.id === Number(id));

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

        <button>Mark as Done</button>
      </div>
    </div>
  );
};
