export const initialState: State = {
  panel: { type: "Dashboard" },
};

export const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "Dashboard":
    case "Resources":
    case "Courses":
      return setPanel(state, { type: action.type });
    default:
      return state;
  }
};

const setPanel = (state: State, panel: Panel): State => ({
  ...state,
  panel,
});
