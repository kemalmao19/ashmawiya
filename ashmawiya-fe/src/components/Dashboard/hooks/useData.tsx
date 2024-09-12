import { useContext, useEffect } from "react";
import { checkEnvironment } from "../../../config/apiUrl";
import { StateContext } from "../Dashboard";

export const getUserCourse = (id: number) => (dispatch: (data: Usercourse) => void) => {
  fetch(checkEnvironment() + `/usercourse/${id}`)
    .then((response) => response.json())
    .then((data) => dispatch({type: "UserCourse", value: data}));
};

const useData = (id: number) => {
  const {state, dispatch} = useContext(StateContext) as stateContext;

  useEffect(() => {
    getUserCourse(id)(dispatch);
  }, []);

  return {
    state,
  };
};

export default useData;
