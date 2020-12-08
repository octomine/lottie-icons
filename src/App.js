import './App.css';
import { Icon } from './components/icon';

import dataBattery from './assets/battery.json';
import dataMountains from './assets/mountains.json';
import dataIsland from './assets/island.json';
import dataFurTree from './assets/fur-tree.json';

function App() {
  return (
    <div className="App">
      <Icon animationData={dataBattery}></Icon>
      <Icon animationData={dataMountains}></Icon>
      <Icon animationData={dataIsland}></Icon>
      <Icon animationData={dataFurTree}></Icon>
    </div>
  );
}

export default App;
