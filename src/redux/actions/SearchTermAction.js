import ActionTypes from "../actionTypes/ActionTypes";
const SearchTermAction = (data) => {
  return {
    type: ActionTypes.REMOVE_SEARCH_TERM,
    payload: data,
  };
};

export default SearchTermAction;
