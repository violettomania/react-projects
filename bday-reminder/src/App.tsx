import { useState } from 'react';

import Person from './Person';
import { data } from './data';

function App() {
  const [persons, setPersons] = useState(data);

  return (
    <main>
      <div className='container'>
        <h2>{`${persons.length} Birthdays Today`}</h2>
        {persons.map((person) => (
          <Person key={person.id} {...person} />
        ))}
        <button onClick={() => setPersons([])}>clear all</button>
      </div>
    </main>
  );
}

export default App;
