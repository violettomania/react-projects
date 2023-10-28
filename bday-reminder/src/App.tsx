import { persons } from './data';

function App() {
  return (
    <main>
      <div className='container'>
        <h2>5 Birthdays Today</h2>
        {persons.map((person) => {
          return (
            <div key={person.id} className='person'>
              <img src={person.image} alt='person of a person' />
              <div>
                <h4>{person.name}</h4>
                <p>{`${person.age} years old`}</p>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}

export default App;
