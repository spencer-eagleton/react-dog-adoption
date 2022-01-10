import AdminForm from '../Components/AdminForm';
import { useState, useEffect } from 'react';
import { fetchDogById } from '../services/doglist';

export default function Edit(props) {
  const [dog, setDog] = useState({});

  const id = props.match.params.id;
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchDogById(id);
      setDog(data);
    };
    fetchData();
  }, [id]);

  return (
    <div>
      <AdminForm {...dog} />
    </div>
  );
}
