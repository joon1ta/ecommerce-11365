
import './App.css';
import  { NavBar} from './components/NavBar/NavBAr'
import {Home} from "./components/Home/home"
import { BrowserRouter as Router,Switch,Route} from "react-router-dom";
import ItemDetailContainer from './components/ItemDetailContainer/itemdetailcontainer'
import Quienes from './components/AboutUS/aboutUs'

function App() {
  return (
    <div className="App">
<Router>
    <NavBar />
     
   
    <Switch>
         
          <Route path="/itemDetail/:productId">
          <ItemDetailContainer />
          </Route>

          <Route path="/aboutUs">
            <Quienes />
          </Route>

          <Route path="/categorias">

          </Route>
          <Route path="/contacto">

          </Route>

          <Route path="/carrito">
          </Route>
          <Route exact path="/">

          <Home />
          </Route>


    </Switch>
     
</Router>     
      
    </div>
  );
}

export default App;
