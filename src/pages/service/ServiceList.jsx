import React, { useEffect, useState } from "react";
import ServiceCard from "../../components/ServiceCard";

import Loader from "../../components/loader/Loader";
import api from "../../api/api";
import { api_routes } from "../../utils/apiRoute";
import { getUserBrandMemberId } from "../../utils/getBrandUserId";

const ServiceList = () => {
  const [serviceList, setServiceList] = useState(null);

  const { service_list } = api_routes;
  const [isLoading, setIsLoading] = useState(false);

  const serviceData = async () => {
    setIsLoading(true);
    const { brand_id } = getUserBrandMemberId();
    await api
      .postByBody(service_list, { brandId: brand_id })
      .then((response) => {
        setServiceList(response?.data?.value?.data?.data[0].catList);
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
              link={service.cateGoryId}
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
