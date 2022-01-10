import AdminForm from '../Components/AdminForm';
import { useState, useEffect } from 'react';
import { fetchDogById } from '../services/doglist';

export default function Edit(props) {
  //   const [dog, setDog] = useState({});
  const [name, setName] = useState('');
  const [breed, setBreed] = useState('');
  const [age, setAge] = useState('');
  const [image, setImage] = useState('');
  const [bio, setBio] = useState('');

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

  return (
    <div>
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
      />
    </div>
  );
}
