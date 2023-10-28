import Person from './Person';
import { persons } from './data';

function App() {
  return (
    <main>
      <div className='container'>
        <h2>5 Birthdays Today</h2>
        {persons.map((person) => (
          <Person key={person.id} {...person} />
        ))}
        <button>clear all</button>
      </div>
    </main>
  );
}

export default App;
