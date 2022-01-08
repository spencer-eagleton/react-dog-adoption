export default function Dog({ name, image }) {
  return (
    <>
      <h1 key={name}>{name}</h1>
      <img src={image} />
    </>
  );
}
