import './App.css';
import Banner from './components/banner';
import Business from './components/business';
import Customers from './components/customers';
import NavBar from './components/navBar';
import Payments from './components/payments';

function App() {
  return (
    <>
      <NavBar />
      <Banner />
      <Customers />
      <Business />
      <Payments />
    </>
  );
}

export default App;
