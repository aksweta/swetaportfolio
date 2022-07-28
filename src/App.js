import "./App.css"
import Button from "./components/Button"
import Textarea from "./components/Text/text"

function App() {
  const click = () => {
    console.log("clicked")
  }

  return (
    <div className="App">
      <h1>Hello</h1>
      <Button colour="primary" borderRadius onClick={click}>
        Test
      </Button>
      <Textarea type="text" label="Name" id="123" />
    </div>
  )
}
export default App
