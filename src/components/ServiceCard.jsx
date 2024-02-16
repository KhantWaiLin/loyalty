import React from "react";
import './servicecard.css';

const ServiceCard = ({ data }) => {
    const url = "/service/";
    // const data = {
    //     name: name,
    //     img: img,
    //     price: price,
    //     description: description
    // };
    const queryParams = new URLSearchParams(data).toString();

    return (
        <a href={`${url}?${queryParams}`}>
            <div className="card">
                <img src={data?.image} alt={data?.title} className="card-image" />
                <div className="card-content">
                    <h2 className="card-title">{data?.title}</h2>
                    <span className="card-description">{data?.price}</span>
                </div>
            </div>
        </a>
    );
};

export default ServiceCard;
