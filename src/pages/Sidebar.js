import React from "react";
import "../assets/Sidebar.css";
import SidebarData from "../data/SidebarData";
const Sidebar = () => {
  return (
    <div id="sidebar_pages">
      <ul type="none">
        {SidebarData.map((item, index) => {
          return (
            <li key={item.id}>
              <a href={item.link}>{item.name}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
