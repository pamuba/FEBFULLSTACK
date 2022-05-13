import './App.css';
import NavBar from './components/NavBar';
import {routes} from './routes'
import {useRoutes} from 'react-router'


function App() {
  const element = useRoutes(routes)
  return (
    <div>
      <NavBar/>
      {element}
      {/* <Login/> */}
      {/* <Signup/> */}
      {/* <Profile/> */}
      {/* <CreateQuote/> */}
      {/* <Home/> */}
    </div>
  );
}

export default App;
