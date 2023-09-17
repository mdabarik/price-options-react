
import DaisyNav from './components/DaisyNav/DaisyNav';
import NavBar from './components/NavBar/NavBar';
import PriceOptions from './components/PriceOptions/PriceOptions';

import './App.css';

const App = () => {
  return (
    <div>
      <NavBar></NavBar>
      <DaisyNav></DaisyNav>
      <PriceOptions></PriceOptions>
    </div>
  );
};

export default App;

