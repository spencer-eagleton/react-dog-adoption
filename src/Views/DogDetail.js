import { useEffect, useState } from 'react';
import { fetchDogById } from '../services/doglist';
import Dog from '../Components/Dog';
import { Link } from 'react-router-dom';

export default function DogDetail(props) {
  const [dog, setDog] = useState([]);
  const [loading, setLoading] = useState(true);

  const id = props.match.params.id;
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchDogById(id);
      setDog(data);
      setLoading(false);
    };
    fetchData();
  }, [id]);

  if (loading) return <h1>loading... :3</h1>;

  return (
    <div>
      <h1>Dog Detail</h1>
      <Dog dog={dog} />
      <Link to={`/dogs/${id}/edit`}>Edit</Link>
    </div>
  );
}
