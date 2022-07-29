import "./App.css"
import Button from "./components/Button"
import Heading from "./components/Heading"
import Textarea from "./components/Text/text"

function App() {
  const click = () => {
    console.log("clicked")
  }

  return (
    <div className="container">
      <h1>Hello</h1>
      <Button colour="primary" borderRadius onClick={click}>
        Test
      </Button>
      <Textarea type="text" label="Name" id="123" />
      <Heading type="h6" colour="red">sweta godi</Heading>
    </div>
  )
}
export default App
