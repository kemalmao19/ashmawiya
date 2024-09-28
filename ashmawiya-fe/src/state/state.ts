export const initialState: State = {
  panel: { t: "Dashboard" },
  user: { t: "UserCourse", value: [] },
  courses: { t: "AllCourses", value: [] },
};

export const reducer = (state: State, action: Action) => {
  switch (action.t) {
    case "Dashboard":
    case "Resources":
    case "Courses":
      return setPanel(state, { t: action.t });

    case "UserCourse":
      return setUserCourse(state, { ...action, value: action.value });

    case "AllCourses":
      return setAllCourses(state, { ...action, value: action.value });
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
