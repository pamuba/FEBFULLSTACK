import CreateQuote from './components/CreateQuote';
import Home from './components/Home';
import Login from './components/Login';
import Profile from './components/Profile';
import Signup from './components/Signup';

export const routes = [
    {path:'/', element:<Home/>},
    {path:'/create', element:<CreateQuote/>},
    {path:'/login', element:<Login/>},
    {path:'/signup', element:<Signup/>},
    {path:'/profile', element:<Profile/>},
]