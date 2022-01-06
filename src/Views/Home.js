import { fetchDogs } from '../services/doglist';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Dog from '../Components/Dog';

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
              <Link to={`../dogs/${dog.id}`}>
                <Dog key={dog.id} {...dog} />
              </Link>
            </>
          );
        })}
      </div>
    </div>
  );
}
