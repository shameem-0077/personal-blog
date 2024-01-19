// utils/fetchConfig.js
const fetchConfig = async (url, options = {}, method = 'GET') => {
    try {
      const response = await fetch(url, {
        method,
        ...options,
      });
      const data = await response.json();
  
      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong');
      }
  
      return data;
    } catch (error) {
      console.error('Fetch error:', error.message);
      throw error;
    }
  };
  
  export default fetchConfig;
  