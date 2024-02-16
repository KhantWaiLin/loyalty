import React, { useState, useEffect } from "react";
import "./TabNavigation.css";

const navstyle = {
  width: '50%',
  textAlign: 'center',
};

const TabNavigation = ({ savedorliked }) => {
  const [activeTab, setActiveTab] = useState(null);

  const handleTabClick = (tabName, event) => {
    event.preventDefault();
    setTimeout(() => {
      savedorliked(tabName);
      setActiveTab(tabName);
    }, 100); // Adjust the delay as needed
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
