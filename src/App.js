import './App.css';
import { IconHolder } from './components/iconHolder';

import dataBattery from './assets/battery.json';

function App() {
  return (
    <div className="App">
      <IconHolder animationData={dataBattery}></IconHolder>
    </div>
  );
}

export default App;
