// src/app/utils/fetchData.js
export const fetchData = async () => {
    try {
      const response = await fetch('/app/data/data.json'); // Adjust the path if needed
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const jsonData = await response.json();
      return jsonData;
    } catch (error) {
      console.error('Error fetching data:', error);
      return null;
    }
  };
  