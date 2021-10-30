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
import AllOrders from './Pages/AllOrders/AllOrders';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';

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
            <PrivateRoute path="/book/:id">
              <BookService></BookService>
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <Admin></Admin>
            </PrivateRoute>
            <PrivateRoute path="/hotel">
              <AddHotel></AddHotel>
            </PrivateRoute>
            <PrivateRoute path="/my-order">
              <MyOrder></MyOrder>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/all-hotels">
              <HotelDetails></HotelDetails>
            </Route>
            <PrivateRoute path="/all-orders">
              <AllOrders></AllOrders>
            </PrivateRoute>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            {/* <Route path="/book/:id">
              <BookService></BookService>
            </Route> */}
          </Switch>
        </BrowserRouter>
        <Footer></Footer>
      </AuthProvider>
    </div>
  );
}

export default App;
