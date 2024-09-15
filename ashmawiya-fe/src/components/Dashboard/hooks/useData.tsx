import { useContext, useEffect } from "react";
import { StateContext } from "../../../state/context";
import { getAllCourses, getUserCourse } from "../../../utils/fetchHandler";

const userId: number = JSON.parse(localStorage.getItem("user") || "{}").id;

const useData = () => {
  const { state, dispatch } = useContext(StateContext) as ContextType;

  useEffect(() => {
    getUserCourse(userId)(dispatch);
    getAllCourses(dispatch);
  }, []);

  return {
    state,
  };
};

export default useData;
