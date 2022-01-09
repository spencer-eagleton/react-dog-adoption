import AdminForm from '../Components/AdminForm';
import { useState } from 'react';

export default function Admin() {
  const [name, setName] = useState('');
  const [breed, setBreed] = useState('');
  const [age, setAge] = useState('');
  const [image, setImage] = useState('');
  const [bio, setBio] = useState('');
  return <AdminForm />;
}
