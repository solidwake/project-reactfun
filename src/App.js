// import logo from './logo.svg';
// import './App.css';

function App() { // React components must use PascaleCase instead of camelCase
  return (
    <div className="App">
      <nav>
        <h1>Idris's React App</h1>
        <ul>
          <li>fuctions</li>
          <li>data</li>
          <li>objects</li>
        </ul>
      </nav>
      <header>This is a simple web page written in JSX.</header>
      <p>
        Remember that JSX only accepts one parent element.
      </p>
      <p>
        So all of this content should be placed inside a single div.
      </p>
      <h2>Let's place a local image and an image url here.</h2>
      <img src="./logo192.png" alt="React logo" />
      <img src="https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Trollface_non-free.png/220px-Trollface_non-free.png"
        alt="trollface"></img>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
