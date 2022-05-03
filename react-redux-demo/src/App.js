import { Provider } from 'react-redux'
import './App.css';
import store from './redux/store'
import CakeContainer from './components/CakeContainer';
import HooksContainer from './components/HooksContainer';
import IceCreamContainer from './components/IceCreamContainer';
import NewCakeContainer from './components/NewCakeContainer';
import ItemContainer from './components/ItemContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          {/* <CakeContainer/>
          <HooksContainer/>
          <IceCreamContainer/>
          <NewCakeContainer/> */}
          <ItemContainer cake />
          <ItemContainer />
        </header>
      </div>
    </Provider>
    
  );
}

export default App;
