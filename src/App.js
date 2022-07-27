import './App.css';
import Button from './components/Button';

function App() {

  const click = () => {
    console.log("clicked");
  }

  return (
    <div className="App">
      <h1>Hello</h1>
      <Button colour="primary" borderRadius onClick={click}>Test</Button>
    </div>
  );
}

export default App;
