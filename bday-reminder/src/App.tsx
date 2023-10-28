import { portraits } from './data';

function App() {
  return (
    <main>
      <div className='container'>
        <h2>5 Birthdays Today</h2>
        <div className='person'>
          <img src={portraits[0].image} alt='portrait of a person' />
          <div>
            <h4>Bertie Yates</h4>
            <p>29 years</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
