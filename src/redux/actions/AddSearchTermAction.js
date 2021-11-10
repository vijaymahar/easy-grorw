import ActionTypes from "../actionTypes/ActionTypes";
const AddSearchTermAction = (term) => {
  return {
    type: ActionTypes.ADD_SEARCH_TERM,
    payload: term,
  };
};
export default AddSearchTermAction;
