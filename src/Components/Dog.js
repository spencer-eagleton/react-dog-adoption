export default function Dog({ dog }) {
  return (
    <>
      <h1 key={dog.id}>{dog.name}</h1>
      <img src={dog.image} />
      <p>{dog.bio}</p>
    </>
  );
}
