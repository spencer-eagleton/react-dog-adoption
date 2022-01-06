export default function Dog({ name, image }) {
  return (
    <>
      {' '}
      <h1>{name}</h1>
      <img src={image} />
    </>
  );
}
