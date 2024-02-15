import React from "react";
import './servicecard.css';

const ServiceCard = ({ name, img, link, price, description }) => {
    const url = "/service/";
    const data = {
        name: name,
        img: img,
        price: price,
        description: description
    };
    const queryParams = new URLSearchParams(data).toString();

    return (
        <a href={`${url}?${queryParams}`}>
            <div className="card">
                <img src={img} alt={name} className="card-image" />
                <div className="card-content">
                    <h2 className="card-title">{name}</h2>
                    <span className="card-description">{price}</span>
                </div>
            </div>
        </a>
    );
};

export default ServiceCard;
