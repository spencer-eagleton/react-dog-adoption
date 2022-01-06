import { useEffect } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { checkError } from '../services/client';
import { fetchDogById } from '../services/doglist';
import Dog from '../Components/Dog';
export default function DogDetail() {
  const params = useParams();
  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetchDogById(params.id);
      return checkError(resp);
    };
    fetchData();
  }, [params.id]);
  return (
    <>
      <h1>Dog Detail</h1>
      <Dog />
    </>
  );
}
