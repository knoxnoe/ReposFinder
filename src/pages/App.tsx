import Repos from "./Repos";
import Header from "./shared/header";

function App() {
  return (
    <>
      <Header></Header>
      <div className="px-2">
        <Repos></Repos>
      </div>
    </>
  );
}

export default App;
