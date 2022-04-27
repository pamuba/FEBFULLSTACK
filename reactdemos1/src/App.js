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

      <ClickCounter/>
      <HoverCounter/>
      </header>
    </div>
  );
}

export default App;


