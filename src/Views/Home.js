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

  return (
    <div className="dog-list">
      <div className="dog-card">
        {dogs.map((dog) => {
          return (
            <>
              <h1 key={dog.id}>{dog.name}</h1>
              <img src="http://placedog.net/500?id=" />
            </>
          );
        })}
      </div>
    </div>
  );
}
