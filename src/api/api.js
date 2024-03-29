import axios from "axios";

const api_url = process.env.REACT_APP_API_URL;

const api = {
  checkToken: (response) => {
    if (response?.data?.code === 401 || response.status === 401) {
      return (window.location.href = "/");
    }
    return;
  },
  getToken: () => {
    const auth_data = localStorage.getItem("authenticate_data");
    if (auth_data) {
      const parsed_data = JSON.parse(auth_data);
      return parsed_data?.token;
    }
    return null;
  },
  get: async (url, data) => {
    const token = api.getToken();
    try {
      const URL = api_url + url;
      const response = await axios.get(URL, {
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + token,
        },
        params: data,
      });
      api.checkToken(response);

      return { data: response.data, status: response.status };
    } catch (error) {
      console.log(error);
    }
  },
  postOtp: async (url, data) => {
    const token =
      "r5RrLgGn6vpdE9W2Oqv5XFiZrYh5rzN5BgGAxQY33oYuNTM56OuncOqiLYbkDeXrZ43YGYJWfmbTHil0MVdkamsTuMZj4tty8C7pPQ14mdlsfgPVhyl19fqierBVPUcO";
    const URL = api_url + url;
    try {
      const response = await axios.post(
        URL,
        data,
        {
          headers: {
            "Content-Type": "application/json",
            "Authorization": token,
          },
        }
      );
      return { data: response.data, status: response.status };
    } catch (error) {
      console.log(error);
    }
  },
  post: async (url, data) => {
    const token = api.getToken();
    const URL = api_url + url;
    try {
      const response = await axios.post(
        URL,
        {},
        {
          headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + token,
          },
          params: data,
        }
      );
      api.checkToken(response);
      return { data: response.data, status: response.status };
    } catch (error) {
      console.log(error);
    }
  },
  postByBody: async (url, data) => {
    const token = api.getToken();
    const URL = api_url + url;
    try {
      const response = await axios.post(URL, data, {
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + token,
        },
      });
      api.checkToken(response);

      return { data: response.data, status: response.status };
    } catch (error) {
      console.log(error);
    }
  },
  postByFile: async (url, data) => {
    const token = api.getToken();
    const URL = api_url + url;
  
    try {
        
      const response = await axios.post(URL, data, {
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + token,
        },
      });
  
      api.checkToken(response);
  
      return { data: response.data, status: response.status };
    } catch (error) {
      console.error("Error in postByBody:", error);
    }
  },
  
  
};

export default api;
