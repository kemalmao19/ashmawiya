type Dashboard = { type: "Dashboard" };
type Courses = { type: "Courses" };
type Resources = { type: "Resources" };
type Panel = Dashboard | Courses | Resources;

type State = {
  panel: Panel;
};

type Action = Panel;
