import { useState } from 'react';
import './App.css'
import HelloWorld from './components/HelloWorld'
function App() {
  const [count, setCount] = useState(0)



  return (
     <div>
      <HelloWorld/>
      </div>  
    
  )
}

export default App
