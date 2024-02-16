import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Loader from "../../components/loader/Loader";
import api from "../../api/api";
import { api_routes } from "../../utils/apiRoute";

const headingStyle = {
    marginLeft: '200px',
    marginTop: '30px',
    fontSize: '16px'
  };
  
  const iconStyle = {
    position: 'absolute',
    left: '17px',
    top: '25px',
    backgroundColor: '#FAFAFA',
    padding: '8px',
    border: '1px',
    borderRadius: '5px',
  };

const title_style = {
    position: 'absolute',
    left: '15px',
    top: '30%',
    fontSize: '20px'
}

const date_style = {
    position: 'absolute',
    left: '320px',
    top: '30%',
    fontSize: '14px'
}

const image = {
    position: 'absolute',
    top: '80px',
    left: '15px',
    width: '390px',
    height: '175px',
    border: '5.29px linear-gradient(#1746A2, #FFFFFF) solid',
    borderRadius: '5px',
}

const blog_content = {
    position: 'absolute',
    top: '35%',
    left: '15px',
    textIndent: '50px',
    textAlign: 'justify',
    width: '390px',
    height: '65%',
    overflow: 'auto',
    fontSize: '12px'
}

const ServiceDetail = () => {

    const { id } = useParams();
    const [serviceDetail, setServiceDetail] = React.useState([]);

    const { service_detail } = api_routes;
    const [isLoading, setIsLoading] = useState(false);

    const [preData, setPreData] = React.useState({
        "keyword": "",
        "rowLimit": 10,
        "currentPage": 1,
        "sortBy": "",
        "isDesc": true,
        "categoryId": id,
        'subCategoryId': []
    });

    const serviceData = async () => {
        setIsLoading(true);
        await api
            .postByBody(service_detail, preData)
            .then((response) => {
                setServiceDetail(response.data.value.data.data[0][0]);
            });
        setIsLoading(false);
    };

    useEffect(() => {
        serviceData();
    }, []);

    if (isLoading) {
        return (
            <div className="reward-wrapper items-center flex flex-col justify-center">
                <Loader />
            </div>
        );
    }

    return (
        <div className="text-black-500 text-lg">
            <a style={iconStyle} href="/servicelist">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>
            </a>
            <h1 style={headingStyle}>Services</h1>
            <img style={image} src={serviceDetail.subCategoryImage} alt="image" />
            <div style={title_style}>{serviceDetail.subCategoryName}</div>
            <div style={date_style}>200000MMK</div>
            <div style={blog_content} className="no-scrollbar">
                {serviceDetail.subCategoryDescription}
            </div>
        </div>
    );
};

export default ServiceDetail;
