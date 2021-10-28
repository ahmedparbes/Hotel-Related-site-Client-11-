import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Switch, Route, } from 'react-router';
import Header from './Shared/Header/Header';
import { BrowserRouter } from 'react-router-dom';
import Home from './Components/Home/Home';
import AddHotel from './Pages/AddHotel/AddHotel';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/hotel">
            <AddHotel></AddHotel>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
