export default function AdminForm() {
  return (
    <>
      <div>Add a new pupperoo</div>
      <form>
        <label>
          Name:
          <input type="text" />
        </label>
        <label>
          Breed:
          <input type="text" />
        </label>
        <label>
          Age:
          <input type="text" />
        </label>
        <label>
          Image:
          <input type="text" />
        </label>
        <label>
          Bio:
          <input type="text" />
        </label>
        <button>Update Puppers</button>
      </form>
    </>
  );
}
