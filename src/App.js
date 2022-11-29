import logo from './logo.svg';
import './App.css';
import NavBar from './components/navBar';
import Banner from './components/banner';
import Customers from './components/customers';
import Business from './components/business';

function App() {
  return (
    <>
      <NavBar />
      <Banner />
      <Customers />
      <Business />
    </>
  );
}

export default App;
