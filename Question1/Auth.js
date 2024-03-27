const API_URL = "http://your-test-server-url/api"; // Replace with actual URL

export const register = async (rollNumber, email) => {
  const response = await axios.post(`${API_URL}/register`, {
    rollNumber,
    email,
  });
  return response.data;
};

export const fetchProducts = async (accessToken, category, company) => {
  const response = await axios.get(`${API_URL}/products`, {
    params: { category, company },
    headers: { Authorization: `Bearer ${accessToken}` },
  });
  return response.data;
};
