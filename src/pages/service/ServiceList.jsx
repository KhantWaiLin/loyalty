import React from "react";
import axios from 'axios';

const ServiceList = () => {
    const [token, setToken] = React.useState(null);
    const [tempData, setPostData] = React.useState({
        "userName": "09422924858",
        "password": "jujuJu1",
        "userType": '2'
      });
    const [preData, setPreData] = React.useState({
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
          console.log(response.data);
        } catch (error) {
          console.error('Error submitting post:', error);
        }
      };
    
      React.useEffect(() => {
        sendPostData();
      }, []);

      if(token){
        serviceData();
      }

    return (
        <div className="text-black-500 text-lg">
            ServiceList
        </div>
    );
};

export default ServiceList;
