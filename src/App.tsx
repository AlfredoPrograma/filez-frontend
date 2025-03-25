import { Button } from "@mui/joy"

function App() {
  const name = "Alfredo"

  const handleGreet = () => {
    console.log("Working")
  }

  return <Button onClick={handleGreet}>Hello! {name}</Button>
}

export default App
