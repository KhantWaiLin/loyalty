import React, { useState } from "react";
import "./TabNavigation.css";

const navstyle = {
  width: '50%',
  textAlign: 'center',
};

const TabNavigation = ({ savedorliked }) => {
  const [activeTab, setActiveTab] = useState("saved");

  const handleTabClick = (tabName, event) => {
    event.preventDefault();
    savedorliked(tabName);
    setActiveTab(tabName);
  };

  return (
    <div className="tab-navigation">
      <button
        style={navstyle}
        className={`tab-item ${activeTab === "saved" ? "active" : ""}`}
        onClick={(e) => handleTabClick("saved", e)}
      >
        Saved
      </button>

      <button
        style={navstyle}
        className={`tab-item ${activeTab === "liked" ? "active" : ""}`}
        onClick={(e) => handleTabClick("liked", e)}
      >
        Liked
      </button>
    </div>
  );
};

export default TabNavigation;
