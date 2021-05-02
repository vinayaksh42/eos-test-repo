import './App.css';
import { EOSIconsAbstract } from './components/index';
import Adapter from './components/adapter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          This app is using EOS Icons
        </p>
        <Adapter svg={EOSIconsAbstract} size={50}/>
      </header>
    </div>
  );
}

export default App;
