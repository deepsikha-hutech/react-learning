import { useState } from 'react';
import './App.css'
import HelloWorld from './components/HelloWorld'
import WelcomeReact from './components/WelcomeReact';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
function App() {
  const [count, setCount] = useState(0)



  return (
     <div>
      <HelloWorld/>
      <WelcomeReact/>
      <Counter/>
      <FunctionClick/>
      <ClassClick/>
      </div>  
    
  )
}

export default App
