
import './App.css';
import  { NavBar} from './components/NavBar/NavBAr'
import { Home } from './components/Home/home'
import { ItemListContainer} from "../src/components/ItemListContainer/itemlistcontainer"

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home>
      <ItemListContainer  greeting={"Welcome!, we are in maintenance"} />
      </Home>
      
    </div>
  );
}

export default App;
