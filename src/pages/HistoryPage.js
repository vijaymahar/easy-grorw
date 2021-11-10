import React, { memo, useEffect, useState } from "react";
import "../assets/Sidebar.css";
import { IoAdd } from "react-icons/io5";
import { MdCancel } from "react-icons/md";
const HistoryPage = ({ searchHistory, search }) => {
  const [searchTerm, setSearchTerm] = useState([]);
  useEffect(() => {
    setSearchTerm([...searchTerm, { id: Date.now(), serach: search }]);
  }, [search]);
  console.log(search);

  console.log("search term:", searchTerm);
  return (
    <div>
      {searchHistory.length > 0 &&
        searchHistory.map((item) => {
          return (
            <button id="history_btn" key={item.id}>
              <span>
                <IoAdd id="io_add" />
              </span>
              <span>{item.search}</span>
              <span>
                <MdCancel id="md_cancel" />
              </span>
            </button>
          );
        })}
    </div>
  );
};

export default memo(HistoryPage);
