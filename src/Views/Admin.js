import AdminForm from '../Components/AdminForm';
import { useState } from 'react';
import { createDog } from '../services/doglist';

export default function Admin() {
  const [name, setName] = useState('');
  const [breed, setBreed] = useState('');
  const [age, setAge] = useState('');
  const [image, setImage] = useState('');
  const [bio, setBio] = useState('');

  const submit = async (e) => {
    e.preventDefault();
    await createDog(name, breed, age, image, bio);
  };

  return (
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
      handleSubmit={submit}
    />
  );
}
