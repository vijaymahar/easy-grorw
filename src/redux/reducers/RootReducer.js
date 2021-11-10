import { combineReducers } from "redux";
import RemoveSearchTerm from "./RemoveSearchTerm";
import AddSearchTerm from "./AddSearchTerm";
import OverviewReducer from "./OverviewReducer";
const RootReducer = combineReducers({
  RemoveSearchTerm,
  AddSearchTerm,
  OverviewReducer,
});
export default RootReducer;
