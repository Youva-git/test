import axios from 'axios';
import './App.css';
import Listing from './Pages/Listing/Listing';

function App() {
  // cors policy isn't set to anywhere on the stockx server so this is a workaround
  axios.defaults.baseURL = "https://cors-anywhere.herokuapp.com/https://www.stockx.com/api";
  return (
    <main className="main">
      <Listing />
    </main>
  );
}

export default App;
