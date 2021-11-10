import ActionTypes from "../actionTypes/ActionTypes";
const initialState = { actionStatus: "successful" };
const RemoveSearchTerm = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.REMOVE_SEARCH_TERM:
      return { status: state, updatedSearches: payload };
    default:
      return state;
  }
};
export default RemoveSearchTerm;
