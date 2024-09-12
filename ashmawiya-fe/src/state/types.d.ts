type Dashboard = { type: "Dashboard" };
type Courses = { type: "Courses" };
type Resources = { type: "Resources" };
type Panel = Dashboard | Courses | Resources;

type Usercourse = {type: "UserCourse", value: UserCourse[]};

type State = {
  panel: Panel;
  user: Usercourse;
};

type ContextType = {
  state: State;
  dispatch: React.Dispatch<Action>;
};

type Action = Panel | Usercourse;

type Dispatch = (action: Action) => void

type stateContext = {
  state: State;
  dispatch: Dispatch}