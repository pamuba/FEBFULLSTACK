import { Provider } from 'react-redux'
import './App.css';
import store from './redux/store'
import CakeContainer from './components/CakeContainer';
import HooksContainer from './components/HooksContainer';
import IceCreamContainer from './components/IceCreamContainer'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <CakeContainer/>
          <HooksContainer/>
          <IceCreamContainer/>
        </header>
      </div>
    </Provider>
    
  );
}

export default App;
