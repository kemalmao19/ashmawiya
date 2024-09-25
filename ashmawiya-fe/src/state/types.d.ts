type PanelAttr<T> = { type: T };

type Dashboard = PanelAttr<"Dashboard">;
type Courses = PanelAttr<"Courses">;
type Resources = PanelAttr<"Resources">;

type Panel = Dashboard | Courses | Resources;

type StateAttr<T, V> = { type: T; value: V };

type Usercourse = StateAttr<"UserCourse", UserCourse[]>;
type AllCourses = StateAttr<"AllCourses", Course[]>;
type UserNotes = StateAttr<"Notes", string[]>;

type State = {
  panel: Panel;
  user: Usercourse;
  courses: AllCourses;
  notes: UserNotes;
};

type Action = Panel | Usercourse | AllCourses | UserNotes;

type ContextType = {
  state: State;
  dispatch: React.Dispatch<Action>;
};
