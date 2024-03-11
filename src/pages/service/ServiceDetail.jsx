import React, { useEffect, useContext } from "react";
import { LanguageContext } from "../../LanguageContext";

import { useLocation } from "react-router-dom";

const headingStyle = {
    textAlign: 'center',
    marginTop: '25px',
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
    marginLeft: '15px',
    marginTop: '5px',
    fontSize: '20px'
}

const date_style = {
    marginLeft: '320px',
    marginTop: '5px',
    fontSize: '14px'
}

const image = {
    marginTop: '20px',
    marginLeft: '15px',
    objectFit: 'cover', 
    width: '390px',
    height: '175px',
    border: '5.29px linear-gradient(#1746A2, #FFFFFF) solid',
    borderRadius: '5px',
    overflow: 'hidden',
}

const blog_content = {
    position: 'absolute',
    top: '40%',
    left: '15px',
    textIndent: '50px',
    textAlign: 'justify',
    width: '390px',
    height: '55%',
    overflow: 'auto',
    fontSize: '12px'
}

const ServiceDetail = () => {
    const { t, changeLanguage } = useContext(LanguageContext);
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const data = Object.fromEntries(queryParams.entries());

    useEffect(() => {
        changeLanguage(localStorage.getItem("language"));
      }, []);

    return (
        <div className="text-black-500 text-lg">
            <a style={iconStyle} href="/servicelist">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>
            </a>
            <h1 style={headingStyle}>{t('services')}</h1>
            <img style={image} src={data.image} alt="service" />
            <div style={title_style}>{data.title}</div>
            <div style={date_style}>{data.price}</div>
            <div style={blog_content} className="no-scrollbar">
                {data.description}
            </div>
        </div>
    );
};

export default ServiceDetail;
