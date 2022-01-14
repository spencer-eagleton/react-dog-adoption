import AdminForm from '../Components/AdminForm';
import { useState, useEffect } from 'react';
import { fetchDogById, updateDog } from '../services/doglist';
import { useHistory } from 'react-router-dom';
export default function Edit(props) {
  //   const [dog, setDog] = useState({});
  const [name, setName] = useState('');
  const [breed, setBreed] = useState('');
  const [age, setAge] = useState('');
  const [image, setImage] = useState('');
  const [bio, setBio] = useState('');
  const [error, setError] = useState('');
  const history = useHistory();

  const id = props.match.params.id;

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchDogById(id);
      //   setDog(data.dog);
      setName(data.name);
      setBreed(data.breed);
      setAge(data.age);
      setImage(data.image);
      setBio(data.bio);
    };
    fetchData();
  }, [id]);

  //   const updateDog = (key, value) => {
  //     dog[key] = value;
  //     setDog({ ...dog });
  //   };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateDog(id, name, breed, age, image, bio);
      setError('Dog updated!');
      setTimeout(() => {
        history.push(`/dogs/${id}`);
      }, 3000);
    } catch {
      setError('Didnt work!');
    }
  };

  return (
    <div>
      <p>{error}</p>
      <AdminForm
        name={name}
        setName={setName}
        breed={breed}
        setBreed={setBreed}
        age={age}
        setAge={setAge}
        image={image}
        setImage={setImage}
        bio={bio}
        setBio={setBio}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}
