import ActionTypes from "../actionTypes/ActionTypes";
const initialState = { status: "successfull" };
const AddSearchTerm = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.ADD_SEARCH_TERM:
      return { status: state, newTerm: payload };
    default:
      return state;
  }
};

export default AddSearchTerm;
