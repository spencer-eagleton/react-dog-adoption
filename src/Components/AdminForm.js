export default function AdminForm({ name, breed, age, image, bio }) {
  return (
    <>
      <div>Add a new pupperoo</div>
      <form>
        <label>
          Name:
          <input placeholder="Enter Name" type="text" value={name} />
        </label>
        <label>
          Breed:
          <input placeholder="Enter Breed" type="text" value={breed} />
        </label>
        <label>
          Age:
          <input placeholder="Enter Age" type="text" value={age} />
        </label>
        <label>
          Image:
          <input placeholder="Image URL" type="text" value={image} />
        </label>
        <label>
          Bio:
          <input placeholder="" type="text-area" value={bio} />
        </label>
        <button>Update Puppers</button>
      </form>
    </>
  );
}
