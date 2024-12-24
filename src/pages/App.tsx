import Repos from "./search-repos";
import Header from "./_shared/header";

function App() {
  return (
    <>
      <Header></Header>
      <div className="px-6">
        <Repos></Repos>
      </div>
    </>
  );
}

export default App;
