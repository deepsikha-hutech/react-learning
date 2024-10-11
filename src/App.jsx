import { useState } from 'react';
import './App.css'
import HelloWorld from './components/HelloWorld'
import WelcomeReact from './components/WelcomeReact';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
function App() {
  const [count, setCount] = useState(0)



  return (
     <div>
      <HelloWorld/>
      <WelcomeReact/>
      <Counter/>
      <FunctionClick/>
      </div>  
    
  )
}

export default App
