import logo from './logo.svg';
import './App.css';

function App({saludo}) {
  let styles = {
    color: 'red'
  }
  
  return (
    <div className="App my-class">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p style={styles} className="test">
          {saludo}, Edite <code>src/App.js</code> y guarde para recargar.
        </p>
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
