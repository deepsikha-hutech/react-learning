import { useState } from 'react';
import './App.css'
import HelloWorld from './components/HelloWorld'
import NameList from './components/NameList';
import Person from './components/Person';
import StyleSheet from './components/StyleSheet';
function App() {
  const [count, setCount] = useState(0)



  return (
     <div>
      <HelloWorld/>
      <NameList/>
      <Person />
      <StyleSheet/>


      </div>  
    
  )
}

export default App
