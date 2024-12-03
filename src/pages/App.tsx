
import { Button } from "@/components/ui/button"
import Home from "./Home"
import Header from "./shared/header"

function App() {

  return (
    <>
      <Header></Header>
      <div className="px-2">
              <Home></Home>
              <Button>click</Button>
      </div>

    </>
  )
}

export default App
