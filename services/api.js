import axios from "axios";

const API_URL = "https://6a1eb869b79eec0d6cefe97d.mockapi.io";

const apiService = {
  getSports: async () => {
    try {
      const response = await axios.get(`${API_URL}/sports`);

      console.log("API DATA:", response.data);

      return response.data;
    } catch (error) {
      console.log("API ERROR:", error.response?.data);
      console.log("STATUS:", error.response?.status);
      throw error;
    }
  },
};

export default apiService;