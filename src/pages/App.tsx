import Home from "./Home";
import Header from "./shared/header";

function App() {
  return (
    <>
      <Header></Header>
      <div className="px-2">
        <Home></Home>
      </div>
    </>
  );
}

export default App;
