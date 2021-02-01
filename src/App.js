
import './App.css';
import  { NavBar} from './components/NavBar/NavBAr'
import {Home} from "./components/Home/home"
import { BrowserRouter as Router,Switch,Route} from "react-router-dom";
import ItemDetailContainer from './components/ItemDetailContainer/itemdetailcontainer'
import Quienes from './components/AboutUS/aboutUs'
import Cart from './components/Cart/cart'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
<Router>
    <NavBar />
     
   
    <Switch>
         
          <Route path="/itemDetail/:id">
          <ItemDetailContainer />
          </Route>

          <Route path="/aboutUs">
            <Quienes />
          </Route>

          <Route path="/categorias/:descriptionType">
              <ItemListContainer />
          </Route>
          <Route path="/contacto">

          </Route>

          <Route path="/carrito">
            <Cart />
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
