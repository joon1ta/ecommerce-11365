
import './App.css';
import  { NavBar} from './components/NavBar/NavBAr'
import { Home } from './components/Home/home'
import ItemListContainer from '../ItemListContainer/itemListContainer'

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
