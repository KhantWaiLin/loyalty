import React, { useState, useEffect } from "react";
import "./TabNavigation.css";
import PropTypes from 'prop-types';

const navstyle = {
  width: '50%',
  textAlign: 'center',
  marginTop: '24px'
};

const TabNavigation = ({ savedorliked }) => {
  TabNavigation.propTypes = {
    savedorliked: PropTypes.string
  };
  const [activeTab, setActiveTab] = useState('saved');

  const handleTabClick = (tabName, event) => {
    event.preventDefault();
    setTimeout(() => {
      savedorliked(tabName);
      setActiveTab(tabName);
    }, 100);
  };

  useEffect(() => {
    savedorliked('saved');
  }, []);

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
