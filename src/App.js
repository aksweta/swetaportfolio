import "./App.css"
import Button from "./components/Button"
import Heading from "./components/Heading"
import Textarea from "./components/Text/text"
import Text from "./components/Paragraph"
import Link from "./components/Link"

function App() {
  const click = () => {
    console.log("clicked")
  }

  const clicked = () => {
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
      <Text type="p" colour="black" italic>akshit Gondo</Text>
      <Link href="https://mail.google.com/mail/u/2/?ogbl#inbox" onClick={clicked}>Gmail</Link>
    </div>
  )
}
export default App
