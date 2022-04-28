import './App.css';
import Counter from './components/Counter';
import EventBind from './components/EventBind';
import Form from './components/Form';
import Greet from './components/Greet'
import Greetings from './components/Greetings';
import Message from './components/Message';
import ParentComponent from './components/ParentComponent';
import ParentComp from './components/ParentComp';
import RefsDemo from './components/RefsDemo';
import Hero from './components/Hero';
import Errorboundary from './components/Errorboundary';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import UseStateCounter from './components/useStateCounter'
import UseStateCounterTwo from './components/useStateCounterTwo'
import HooCounterThree from './components/HooCounterThree'
import HooksCounterFour from './components/HooksCounterFour';
import UseEffectOne from './components/useEffectOne';
import UseEfffectTwo from './components/UseEfffectTwo';
import MouseContainer from './components/MouseContainer';
import UseEffectThree from './components/UseEffectThree';
import ComponentC from './components/ComponentC';
import { UserProvider } from './components/UserContext';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       {/* <Greet name="Bruce" heroName="Batman">
         <p>This is Childern Prop</p>
         <button>CLICK</button>
       </Greet>
       <Greet name="Clark" heroName="Superman"/>
       <Greet name="Diana" heroName="Wonder Women"/> */}
{/* 
       <Greetings name="Bruce" heroName="Batman">
         <p>This is Childern Prop</p>
         <button>CLICK</button>
       </Greetings>
       <Greetings name="Clark" heroName="Superman"/>
       <Greetings name="Diana" heroName="Wonder Women"/> */}
       {/* <Message/> */}

       {/* <Counter /> */}

       {/* <EventBind /> */}

       {/* <ParentComponent/> */}
       
       {/* <Form /> */}

       {/* <ParentComp/> */}

       {/* <RefsDemo/> */}

      {/* <Errorboundary>
       <Hero heroName="Superman"/>
      </Errorboundary>
      
      <Errorboundary> 
       <Hero heroName="Batman"/>
      </Errorboundary> 
      
      <Errorboundary>
       <Hero heroName="Ironman"/>
      </Errorboundary>
      
      <Errorboundary> 
       <Hero heroName="Joker"/>
      </Errorboundary>  */}

      {/* <ClickCounter/>
      <HoverCounter/> */}

      {/* <PostList/> */}
      {/* <PostForm /> */}
      {/* <UseStateCounter/> */}
      {/* <UseStateCounterTwo /> */}

      {/* <HooCounterThree></HooCounterThree> */}

      {/* <HooksCounterFour></HooksCounterFour> */}

      {/* <UseEffectOne/> */}
      {/* <UseEfffectTwo></UseEfffectTwo> */}

      {/* <UseEffectThree/> */}

      {/* <MouseContainer/> */}
      {/* </header> */}

       <UserProvider value="John">
        <ComponentC/>
       </UserProvider>
       </header>
    </div>
  );
}

export default App;


