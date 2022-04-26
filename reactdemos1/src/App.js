import './App.css';
import Counter from './components/Counter';
import EventBind from './components/EventBind';
import Greet from './components/Greet'
import Greetings from './components/Greetings';
import Message from './components/Message';

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

       <EventBind />

      </header>
    </div>
  );
}

export default App;


