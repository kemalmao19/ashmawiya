import { useContext, useEffect } from "react";
import { checkEnvironment } from "../../../config/apiUrl";
import { StateContext } from "../../../state/context";

const userId: number = JSON.parse(localStorage.getItem("user") || "{}").id;

export const getUserCourse =
  (id: number) => (dispatch: (data: Usercourse) => void) => {
    fetch(checkEnvironment() + `/usercourse/${id}`)
      .then((response) => response.json())
      .then((data) => dispatch({ type: "UserCourse", value: data }));
  };

export const getAllCourses = (dispatch: (data: AllCourses) => void) => {
  fetch(checkEnvironment() + `/courses`)
    .then((response) => response.json())
    .then((data) => dispatch({ type: "AllCourses", value: data }));
};

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
