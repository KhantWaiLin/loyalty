import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./TabNavigation.css";

const navstyle = {
    width: '50%',
    textAlign: 'center',
}

const TabNavigation = () => {
    const [activeTab, setActiveTab] = useState("saved");

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    return (
        <div className="tab-navigation">
            <NavLink
                style={navstyle}
                to="#"
                className={`tab-item ${activeTab === "saved" ? "active" : ""}`}
                onClick={() => handleTabClick("saved")}
            >
                Saved
            </NavLink>

            <NavLink
                style={navstyle}
                to="#"
                className={`tab-item ${activeTab === "liked" ? "active" : ""}`}
                onClick={() => handleTabClick("liked")}
            >
                Liked
            </NavLink>
        </div>
    );
};

export default TabNavigation;
