import { fetchDogs } from '../services/doglist';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Dog from '../Components/Dog';

export default function Home() {
  const [dogs, setDogs] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchDogs();
      setDogs(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) return <h1>Loading</h1>;

  return (
    <>
      <div className="dog-list">
        <div className="dog-card">
          {dogs.map((dog) => (
            <Link key={dog.id} to={`/dogs/${dog.id}`}>
              <Dog dog={dog} />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
