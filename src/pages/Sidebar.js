import React from "react";
import "../assets/Sidebar.css";
import SidebarData from "../data/SidebarData";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div id="sidebar_pages">
      <ul type="none">
        {SidebarData.map((item, index) => {
          return (
            <li key={item.id}>
              <Link to={item.link} id="page_links">
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
