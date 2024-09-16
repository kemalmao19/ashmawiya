import { checkEnvironment } from "../config/apiUrl";

export const getUserCourse =
  (id: number) => (dispatch: (data: Usercourse) => void) => {
    fetch(checkEnvironment() + `/usercourse/user/${id}`)
      .then((response) => response.json())
      .then((data) => dispatch({ type: "UserCourse", value: data }));
  };

export const getAllCourses = (dispatch: (data: AllCourses) => void) => {
  fetch(checkEnvironment() + `/courses`)
    .then((response) => response.json())
    .then((data) => dispatch({ type: "AllCourses", value: data }));
};

export const addUserCourse = (userId: number) => (courseId: number) => {
  return fetch(checkEnvironment() + `/usercourse`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({ userId, courseId }),
  }).then((response) => {
    if (!response.ok) {
      // Handle non-OK responses
      return Promise.reject(`Error: ${response.statusText}`);
    }
    return response.json(); // Parse the response if successful
  }).then((result) => {
    console.log("Add successful:", result);
    return result; // Return the result to allow further handling
  }).catch((error) => {
    console.error("Error adding course:", error);
    throw new Error("Failed to add course. Please try again.");
  })
  }

export const updateUserCourse = (id: string) => async (data: { isComplete: boolean }) => {
  return fetch(`${checkEnvironment()}/usercourse/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data), // Send the update data
  })
    .then((response) => {
      if (!response.ok) {
        // Handle non-OK responses
        return Promise.reject(`Error: ${response.statusText}`);
      }
      return response.json(); // Parse the response if successful
    })
    .then((result) => {
      console.log("Update successful:", result);
      return result; // Return the result to allow further handling
    })
    .catch((error) => {
      console.error("Error updating completion status:", error);
      throw new Error("Failed to update course status. Please try again.");
    });
};