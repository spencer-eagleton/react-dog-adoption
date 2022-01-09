import { useEffect, useState } from 'react';
import { fetchDogById } from '../services/doglist';
import Dog from '../Components/Dog';

export default function DogDetail(props) {
  const [dog, setDog] = useState([]);
  const [loading, setLoading] = useState(true);

  const id = props.match.params.id;
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchDogById(id);
      console.log(data);
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
    </div>
  );
}
