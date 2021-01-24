
import './App.css';
import  { NavBar} from './components/NavBar/NavBAr'
import {Home} from "./components/Home/home"
import { BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import {ItemDetailContainer} from './components/ItemDetailContainer/itemdetailcontainer'

function App() {
  return (
    <div className="App">
<Router>
    <NavBar />
     
   
    <Switch>
          <Route exact path="/">
          <Home />
          </Route>
          <Route path="/itemDetail">
          <ItemDetailContainer />
          </Route>
    </Switch>
     
</Router>     
      
    </div>
  );
}

export default App;
