import { checkError, client } from './client';

export async function fetchDogs() {
  const resp = await client.from('dogs').select('*');
  return checkError(resp);
}

export async function fetchDogById(id) {
  const resp = await client.from('dogs').select('*').eq('id', id).single();
  return checkError(resp);
}

export async function updateDog(id, name, breed, age, image, bio) {
  const resp = await client.from('dogs').update({ name, breed, age, image, bio }).eq('id', id);
  return checkError(resp);
}
