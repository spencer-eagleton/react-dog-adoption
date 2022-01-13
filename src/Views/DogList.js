import Dog from '../Components/Dog';
import { Link } from 'react-router-dom';
export default function DogList({ dogs }) {
  console.log(dogs);
  return (
    <div>
      {dogs.map((dog) => (
        <Link key={dog.id} to={`/dogs/${dog.id}`}>
          <Dog dog={dog} />
        </Link>
      ))}
    </div>
  );
}
