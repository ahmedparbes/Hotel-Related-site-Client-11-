import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Switch, Route, } from 'react-router';
import Header from './Shared/Header/Header';
import { BrowserRouter } from 'react-router-dom';
import Home from './Components/Home/Home';
import AddHotel from './Pages/AddHotel/AddHotel';
import Footer from './Shared/Footer/Footer';
import AuthProvider from './Context/AuthProvider/AuthProvider';
import Login from './Authentication/Login/Login';
import BookService from './Pages/BookService/BookService';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import Admin from './Pages/Admin/Admin';
import MyOrder from './Pages/Admin/MyOrder/MyOrder';
import HotelDetails from './Pages/HotelDetails/HotelDetails';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <PrivateRoute path="/book">
              <BookService></BookService>
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <Admin></Admin>
            </PrivateRoute>
            <Route path="/hotel">
              <AddHotel></AddHotel>
            </Route>
            <Route path="/my-order">
              <MyOrder></MyOrder>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/all-hotels">
              <HotelDetails></HotelDetails>
            </Route>

          </Switch>
        </BrowserRouter>
        <Footer></Footer>
      </AuthProvider>
    </div>
  );
}

export default App;
