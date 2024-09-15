type Dashboard = { type: "Dashboard" };
type Courses = { type: "Courses" };
type Resources = { type: "Resources" };
type Panel = Dashboard | Courses | Resources;

type Usercourse = { type: "UserCourse"; value: UserCourse[] };
type AllCourses = { type: "AllCourses"; value: Course[] };

type State = {
  panel: Panel;
  user: Usercourse;
  courses: AllCourses;
};

type ContextType = {
  state: State;
  dispatch: React.Dispatch<Action>;
};

type Action = Panel | Usercourse | AllCourses;
