export default function AdminForm({
  name,
  setName,
  breed,
  setBreed,
  age,
  setAge,
  image,
  setImage,
  bio,
  setBio,
  handleSubmit,
  errors,
}) {
  return (
    <>
      <div>Add a new pupperoo</div>
      <form>
        <label>
          Name:
          <input
            placeholder="Enter Name"
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </label>
        <p>{errors.name}</p>
        <label>
          Breed:
          <input
            placeholder="Enter Breed"
            type="text"
            value={breed}
            onChange={(e) => {
              setBreed(e.target.value);
            }}
          />
        </label>
        <label>
          Age:
          <input
            placeholder="Enter Age"
            type="text"
            value={age}
            onChange={(e) => {
              setAge(e.target.value);
            }}
          />
        </label>
        <label>
          Image:
          <input
            placeholder="Image URL"
            type="text"
            value={image}
            onChange={(e) => {
              setImage(e.target.value);
            }}
          />
        </label>
        <label>
          Bio:
          <textarea
            placeholder="Enter Bio"
            value={bio}
            onChange={(e) => {
              setBio(e.target.value);
            }}
          />
        </label>
        <button onClick={handleSubmit}>Update Puppers</button>
      </form>
    </>
  );
}
