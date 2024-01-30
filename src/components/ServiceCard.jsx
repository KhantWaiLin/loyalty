import React from "react";
import './servicecard.css'

const ServiceCard = ({ name, img , link}) => {
    const url = "/service/";
    return (
        <a href={url+link}>
            <div className="card">
                <img src={img} alt={name} className="card-image" />
                <div className="card-content">
                    <h2 className="card-title">{name}</h2>
                </div>
            </div>
        </a>
    );
};

export default ServiceCard;
