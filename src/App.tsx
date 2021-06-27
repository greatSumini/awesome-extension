import { useActiveTabUrl } from './hooks/chrome.hook';

function App() {
  const url = useActiveTabUrl();

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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
      {url}
    </div>
  );
}

export default App;
