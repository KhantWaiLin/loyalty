import React, { useEffect, useState } from "react";
import axios from 'axios';
import ServiceCard from "../../components/ServiceCard";

const ServiceList = () => {
  const [token, setToken] = useState(null);
  const [serviceList, setServiceList] = useState(null);
  const [tempData, setPostData] = useState({
    "userName": "09422924858",
    "password": "jujuJu1",
    "userType": '2'
  });
  const [preData, setPreData] = useState({
    "keyword": "",
    "rowLimit": 10,
    "currentPage": 1,
    "sortBy": "",
    "isDesc": true,
    "brandId": "265f0dff-a30a-11ed-b26e-6045bdd63acb"
  });

  const sendPostData = async () => {
    try {
      const response = await axios.post('https://loyaltybim.azurewebsites.net/api/Authentication/Authenticate', tempData);
      setToken(response.data.data.token);
    } catch (error) {
      console.error('Error submitting post:', error);
    }
  };

  const serviceData = async () => {
    try {
      const response = await axios.post('https://loyaltybim.azurewebsites.net/api/Customer/GetCategoryListByCustomer', preData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data.value.data.data[0].catList)
      setServiceList(response.data.value.data.data[0].catList);
    } catch (error) {
      console.error('Error submitting post:', error);
    }
  };

  useEffect(() => {
    sendPostData();
  }, []);

  useEffect(() => {
    if (token) {
      serviceData();
    }
  }, [token]);

  const renderServiceRows = () => {
    const rows = [];
    for (let i = 0; i < serviceList.length; i += 2) {
      rows.push(serviceList.slice(i, i + 2));
    }
    return rows.map((row, index) => (
      <div key={index} className="flex space-x-4">
        {row.map((service) => (
          <div key={service.name} className="w-[185px] h-[150px] cursor-pointer">
            <ServiceCard
              name={service.categoryName}
              img={service.categoryImage}
              link = {service.cateGoryId}
            />
          </div>
        ))}
      </div>
    ));
  };

  return (
    <div className="text-black-500 text-lg">
      {serviceList && renderServiceRows()}
    </div>
  );
};

export default ServiceList;
