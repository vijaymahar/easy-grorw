const initialState = {
  status: "success",
};

const OverviewReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "OVERVIEW_ITEM":
      return { state, item: payload };

    default:
      return { status: "pending" };
  }
};
export default OverviewReducer;
