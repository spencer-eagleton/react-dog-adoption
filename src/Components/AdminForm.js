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
              setName('name', e.target.value);
            }}
          />
        </label>
        <label>
          Breed:
          <input
            placeholder="Enter Breed"
            type="text"
            value={breed}
            onChange={(e) => {
              setBreed('breed', e.target.value);
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
              setAge('age', e.target.value);
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
              setImage('image', e.target.value);
            }}
          />
        </label>
        <label>
          Bio:
          <textarea
            placeholder="Enter Bio"
            value={bio}
            onChange={(e) => {
              setBio('bio', e.target.value);
            }}
          />
        </label>
        <button>Update Puppers</button>
      </form>
    </>
  );
}
