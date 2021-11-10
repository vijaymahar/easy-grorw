import { combineReducers } from "redux";
import RemoveSearchTerm from "./RemoveSearchTerm";
import AddSearchTerm from "./AddSearchTerm";
const RootReducer = combineReducers({
  RemoveSearchTerm,
  AddSearchTerm,
});
export default RootReducer;
