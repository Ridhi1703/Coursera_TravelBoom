// src/app/components/MyComponent.tsx
import { useEffect, useState } from 'react';
import { fetchData } from '../utils/travel_recommendation';
 const searchtext=getElementById(search);
const MyComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchDataAsync = async () => {
      const jsonData = await fetchData();
      if (jsonData) {
        setData(jsonData);
      }
    };

    fetchDataAsync();
  }, []);

  return (
    <div>
      <h1>Data from JSON:</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item.title}</li> // Assuming data.json has an array of objects with a 'title' field
        ))}
      </ul>
    </div>
  );
};

export default MyComponent;
