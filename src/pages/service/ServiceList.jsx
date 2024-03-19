import React, { useEffect, useState, useContext } from "react";
import ServiceCard from "../../components/ServiceCard";
import Loader from "../../components/loader/Loader";
import api from "../../api/api";
import { api_routes } from "../../utils/apiRoute";
import { getUserBrandMemberId } from "../../utils/getBrandUserId";
import { LanguageContext } from "../../LanguageContext";

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

const cardList = {
  position: 'absolute',
  left: '5%',
  top: '10%',
  width: '390px',
  height: '80%',
  overflow: 'auto',
}

const ServiceList = () => {
  const [serviceList, setServiceList] = useState(null);
  const { service_list } = api_routes;
  const [isLoading, setIsLoading] = useState(false);
  const { t, changeLanguage } = useContext(LanguageContext);
  
  const serviceData = async () => {
    
    setIsLoading(true);
    const { brand_id } = getUserBrandMemberId();
    try {
      const response = await api.postByBody(service_list, { brandId: brand_id });
      setServiceList(response?.data?.value?.data?.data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    serviceData();
    changeLanguage(localStorage.getItem("language"));
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
      <a style={iconStyle} href="/home">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
        </svg>
      </a>
      <h1 style={headingStyle}>{t('services')}</h1>
      <div style={cardList} className="no-scrollbar">
      {serviceList && renderServiceRows(serviceList)}
      </div>
    </div>
  );
};

const renderServiceRows = (serviceList) => {
  let x = 0;
  const rows = [];
  if (serviceList) {
    for (let i = 0; i < serviceList.length; i += 2) {
      rows.push(serviceList.slice(i, i + 2));
    }
  }
  return rows.map((row, index) => (
    <div key={x++} className="flex space-x-4">
      {row.map((service) => (
        <div key={service.name} className="w-[185px] h-[150px] cursor-pointer">
          <ServiceCard
            data = {service}
          />
        </div>
      ))}
    </div>
  ));
};

export default ServiceList;