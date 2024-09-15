import { checkEnvironment } from "../config/apiUrl";

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

// export const getSingleCourse = (id: number) => {
//   fetch(checkEnvironment() + `/courses/${id}`)
//     .then((response) => response.json())
//     .then((data) => console.log(data));
// };
