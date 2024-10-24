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
import styles from "./components/appStyles.module.css";
import "./components/appStyles.css";
import Form from "./components/Form.jsx";
import LifecycleA from "./components/LifecycleA.jsx";
import FragmentDemo from "./components/FragmentDemo.jsx";
import Table from "./components/Table.jsx";
import ParentComp from "./components/ParentComp.jsx";
import RefsDemo from "./components/RefsDemo.jsx";
import FunctionalCoponentExample from "./components/FunctionalCoponentExample.jsx";
import ClassComponentExample from "./components/ClassComponentExample.jsx";
import IncreaseAge from "./components/IncreaseAge.jsx";
import HooksStateFunctionalComponent from "./components/Hooks/HooksStateFunctionalComponent.jsx";
import EmployeeFunctionComp from "./components/Hooks/EmployeeFunctionComp.jsx";
import EmployeeRegForm from "./components/Hooks/EmployeeRegForm.jsx";
import TableCheckbox from "./components/Hooks/TableCheckbox.jsx";
import Login from "./components/Stocks/public/Login.jsx";
import Signup from "./components/Stocks/public/Signup.jsx";

function App() {
  return (
    <div className="App">
      {/* <h1 className="error">Error</h1>
      <h1 className={styles.success}>Success</h1> */}
      {/* <RefsDemo /> */}
      {/*} <ParentComp />
      {/*<Table />
      {/*<FragmentDemo />

      <LifecycleA />

      {/*<Form />

      <Inline />
       <NameList />
      <Person />
      <StyleSheet primary={true} />
      {/*<WelcomeReact />
      <HelloWorld/>
      <FunctionClick/>
      <Counter/>
      <UserGreeetings/>
      <ClassClick/>
      <ParentComponent/>  */}
      {/* <ClassComponentExample /> */}
      {/* <FunctionalCoponentExample />*/}
      {/* <IncreaseAge /> */}
      {/* <HooksStateFunctionalComponent /> */}
      {/* <EmployeeFunctionComp /> */}
      {/* <EmployeeRegForm /> */}
      {/* <TableCheckbox /> */}
      {/* <Login />
      <Signup /> */}
    </div>
  );
}

export default App;
