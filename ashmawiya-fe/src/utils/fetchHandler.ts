import { urlApi } from "../config/apiUrl";

const urlUserCourse = urlApi("/usercourse/user/");
const urlUpdateUserCourse = urlApi("/usercourse/");
const urlCourses = urlApi("/courses/");

export const getUserCourse =
  (id: number) => (dispatch: (data: Usercourse) => void) => {
    fetch(urlUserCourse(id))
      .then((response) => response.json())
      .then((data) => dispatch({ type: "UserCourse", value: data }));
  };

export const getAllCourses = (dispatch: (data: AllCourses) => void) => {
  fetch(urlCourses())
    .then((response) => response.json())
    .then((data) => dispatch({ type: "AllCourses", value: data }));
};

export const addUserCourse = (userId: number) => async (courseId: number) => {
  return fetch(urlUpdateUserCourse(), {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({ userId, courseId }),
  })
    .then((response) => {
      if (!response.ok) {
        // Handle non-OK responses
        return Promise.reject(`Error: ${response.statusText}`);
      }
      return response.json(); // Parse the response if successful
    })
    .then((result) => {
      console.log("Add successful:", result);
      return result; // Return the result to allow further handling
    })
    .catch((error) => {
      console.error("Error adding course:", error);
      throw new Error("Failed to add course. Please try again.");
    });
};

export const updateUserCourse =
  (id: number) => async (data: Record<string, any>) => {
    if (!id) {
      return Promise.reject("Course ID is required");
    }
    return fetch(urlUpdateUserCourse(id), {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data: data }), // Send the update data
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

export const getNote = async (userId: number, data: UserCourse) => {
  return fetch(urlUserCourse(userId))
    .then((items) => items.json())
    .then((items) =>
      items.find((item: Record<string, any>) => item.id == data.id),
    );
};
