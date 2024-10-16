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
import Inline from "./components/Inline";
import styles from "./components/appStyles.module.css";
import "./components/appStyles.css";
import Form from "./components/Form.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1 className="error">Error</h1>
      <h1 className={styles.success}>Success</h1>
      <Form />

      {/*<Inline />
      {/*} <NameList />
      <Person />
      <StyleSheet primary={true} />
      {/*<WelcomeReact />
      <HelloWorld/>
      <FunctionClick/>
      <Counter/>
      <UserGreeetings/>
      <ClassClick/>
      <ParentComponent/>  */}
    </div>
  );
}

export default App;
