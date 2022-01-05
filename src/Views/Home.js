import { fetchDogs } from '../services/doglist';
import { useState, useEffect } from 'react';
export default function Home() {
  const [dogs, setDogs] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchDogs();
      setDogs(data);
    };
    fetchData();
  }, []);
  console.log(dogs);
  return <h1>Dog List</h1>;
}
