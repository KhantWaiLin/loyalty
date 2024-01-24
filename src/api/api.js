import axios from "axios";

const api = {
  get: async (url, data) => {
    try {
      const response = await axios.get(url, {
        headers,
        params: data,
      });

      return { data: response.data, status: response.status };
    } catch (error) {
      console.log(error);
    }
  },
  post: async (url, data) => {
    try {
      const response = await axios.post(
        url,
        {},
        {
          headers,
          params: data,
        }
      );

      return { data: response.data, status: response.status };
    } catch (error) {
      console.log(error);
    }
  },
  postByBody: async (url, data) => {
    try {
      const response = await axios.post(url, data, {
        headers,
      });

      return { data: response.data, status: response.status };
    } catch (error) {
      console.log(error);
    }
  },
};

export default api;
