import React, { memo, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "../assets/Sidebar.css";
import { IoAdd } from "react-icons/io5";
import { MdCancel } from "react-icons/md";
import SearchTermAction from "../redux/actions/SearchTermAction";
import AddSearchTermAction from "../redux/actions/AddSearchTermAction";
const HistoryPage = ({ searchHistory, search }) => {
  const [searchTerm, setSearchTerm] = useState([]);
  const dispatch = useDispatch();
  const removeSearchItem = (id) => {
    const data = searchHistory.filter((item) => item.id !== id);
    dispatch(SearchTermAction(data));
  };

  const AddSearchTerm = (term) => {
    dispatch(AddSearchTermAction(term));
  };
  console.log("search term:", searchTerm);
  return (
    <div>
      {searchHistory.length > 0 &&
        searchHistory.map((item) => {
          return (
            <div id="history_btn" key={item.id}>
              <button id="add_btn" onClick={() => AddSearchTerm(item.search)}>
                {/* <IoAdd id="io_add" /> */}
                <i className="fas fa-plus" id="io_add"></i>
              </button>
              <span>{item.search}</span>
              <button id="remove_btn" onClick={() => removeSearchItem(item.id)}>
                {/* <MdCancel id="md_cancel" /> */}
                <i className="fas fa-times" id="md_cancel"></i>
              </button>
            </div>
          );
        })}
    </div>
  );
};

export default memo(HistoryPage);
