import logo from './logo.svg';
import './App.css';
import './Anshika.css';
import Button from './Button';

function App() {
  return (
    <div className="First">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>Hey Hi Everyone, Welcome to Devtown !!!</h1>
        <div>
          Devtown Classes
        </div>
        <Button />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
