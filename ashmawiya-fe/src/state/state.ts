export const initialState: State = {
  panel: { type: "Dashboard" },
  user: { type: "UserCourse", value: [] },
  courses: { type: "AllCourses", value: [] },
};

export const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "Dashboard":
    case "Resources":
    case "Courses":
      return setPanel(state, { type: action.type });

    case "UserCourse":
      return setUserCourse(state, { type: action.type, value: action.value });

    case "AllCourses":
      return setAllCourses(state, { type: action.type, value: action.value });
    default:
      return state;
  }
};

const setPanel = (state: State, panel: Panel): State => ({
  ...state,
  panel,
});

const setUserCourse = (state: State, userCourse: Usercourse): State => ({
  ...state,
  user: userCourse,
});

const setAllCourses = (state: State, allCourses: AllCourses): State => ({
  ...state,
  courses: allCourses,
});
