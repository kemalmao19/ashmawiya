import {
  updateUserCourse,
  addUserCourse,
  getNote,
} from "../../../../../utils/fetchHandler";

export const useFetch = () => {
  const handleDone =
    (state: { done: boolean; setDone: (b: boolean) => void }) =>
    (id: number) => {
      const { done, setDone } = state;
      setDone(!done);

      const update = updateUserCourse(id);
      update({ isComplete: !done })
        .then(() => {
          console.log("Course update was successful.");
        })
        .catch((error) => {
          // Revert state change if the request fails
          setDone(done);
          alert(error.message);
        });
    };
  const handleAddCourse =
    (state: { start: boolean; setStart: (value: boolean) => void }) =>
    (userId: number, courseId: number) => {
      const { start, setStart } = state;
      setStart(!start);
      const add = addUserCourse(userId);
      add(courseId)
        .then(() => {
          console.log("Course add was successful.");
        })
        .then((_) => window.top?.location.reload())
        .catch((error) => {
          // Revert state change if the request fails
          setStart(start);
          alert(error.message);
        });
    };

  const getUserNote = async (userId: number, data: UserCourse) => {
    return getNote(userId, data).catch((error) => console.log(error.message));
  };

  const handleUpdateNote = (
    userCourseId: number,
    updateValue: Record<string, any>
  ) => {
    const update = updateUserCourse(userCourseId);
    update(updateValue)
      .then(() => {
        console.log("Note update was successful.");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return { handleDone, handleAddCourse, getUserNote, handleUpdateNote };
};

export const doesCourseExist = (
  userData: State,
  courseId: number,
  userId: number
): boolean => {
  return userData.user.value.some(
    (entry) => entry.courseId === courseId && entry.userId === userId
  );
};
