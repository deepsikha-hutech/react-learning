import { useState } from "react";
import "./App.css";
import HelloWorld from "./components/HelloWorld";
import NameList from "./components/NameList";
import Person from "./components/Person";
import StyleSheet from "./components/StyleSheet";
import WelcomeReact from "./components/WelcomeReact";
import Counter from "./components/Counter";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import EventBind from "./components/EventBind";
import ParentComponent from "./components/ParentComponent";
import UserGreeetings from "./components/UserGreetings";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <NameList />
      <Person />
      <StyleSheet />

      <HelloWorld />
      <Counter />
      <FunctionClick />
      <WelcomeReact />
      <ClassClick />
      <EventBind />
      <ParentComponent />
      <UserGreeetings />
    </div>
  );
}

export default App;
