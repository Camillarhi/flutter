import './App.css';
import ApiDoc from './components/apiDoc';
import Banner from './components/banner';
import Business from './components/business';
import Commerce from './components/commerce';
import Customers from './components/customers';
import GlobalReach from './components/globalReach';
import NavBar from './components/navBar';
import Payments from './components/payments';
import VirtualCards from './components/virtualCards';

function App() {
  return (
    <>
      <NavBar />
      <Banner />
      <Customers />
      <Business />
      <Payments />
      <Commerce />
      <VirtualCards />
      <ApiDoc />
      <GlobalReach />
    </>
  );
}

export default App;
