import logo from './logo.svg';
import './App.css';
import TestComponent from './components/test_component';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="text-4xl font-bold mb-4">Testing Tailwind CSS</h1>
        <TestComponent />
      </header>
    </div>
  );
}

export default App;
