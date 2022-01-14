import AdminForm from '../Components/AdminForm';
import { useState } from 'react';
import { createDog } from '../services/doglist';

export default function Admin() {
  const [name, setName] = useState('');
  const [breed, setBreed] = useState('');
  const [age, setAge] = useState('');
  const [image, setImage] = useState('');
  const [bio, setBio] = useState('');
  const [errors, setErrors] = useState({ name: '', bio: '' });

  const submit = async (e) => {
    e.preventDefault();
    if (name.length === 0) {
      setErrors((prevValue) => ({ ...prevValue, name: 'Enter a name to continue' }));
    } else {
      await createDog(name, breed, age, image, bio);
    }
  };

  return (
    <AdminForm
      errors={errors}
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
