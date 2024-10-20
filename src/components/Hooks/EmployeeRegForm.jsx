import React from "react";
import { useState } from "react";
import EmployeeList from "./EmployeeList";

function EmployeeRegForm(props) {
  const [employeeData, setEmployeeData] = useState({ name: "", age: 0 });
  const [employees, setEmployees] = useState([]);
  const [currEditIndex, setCurrEditIndex] = useState(-1);
  const getEmployeeData = () => {
    if (currEditIndex == -1) {
      setEmployees([...employees, employeeData]);
      setEmployeeData({ name: " ", age: " " });
    } else {
      const newEmployee = employees.map((employee, i) =>
        i === currEditIndex
          ? { ...employee, name: employeeData.name, age: employeeData.age }
          : employee
      );
      setEmployees(newEmployee);
      setEmployeeData({ name: " ", age: " " });
      setCurrEditIndex(-1);
    }
  };

  const deleteEmployee = (index) => {
    alert("delete" + index);
    const newEmployee = employees.filter((employee, i) => i !== index);
    setEmployees(newEmployee);
  };

  const handleEdit = (emp, index) => {
    setEmployeeData(emp);
    setCurrEditIndex(index);
  };

  const saveEdit = (index) => {
    const newEmployee = employees.map((employee, i) =>
      i === editIndex
        ? { ...employee, name: employeeData.name, age: employeeData.age }
        : employee
    );
    setEmployees(newEmployee);

    setEmployeeData({ name: " ", age: " " });
  };

  return (
    <div
      style={{
        backgroundColor: "lightgreen",
        margin: "50px",
        padding: "20px",
        borderRadius: "10px",
        border: "5px solid green",
      }}
    >
      <h1
        style={{
          color: "green",
          backgroundColor: "lightgreen ",
        }}
      >
        Employee Registration Form
      </h1>
      <label>Name : </label>
      <input
        type="text"
        padding="20px"
        value={employeeData.name}
        onChange={(e) => {
          setEmployeeData({ ...employeeData, name: e.target.value });
        }}
      />
      <br />
      <br></br>
      <label> Age : </label>
      <input
        type="text"
        padding="20px"
        value={employeeData.age}
        onChange={(e) => {
          setEmployeeData({ ...employeeData, age: e.target.value });
        }}
      />

      <br></br>
      <br></br>
      <button
        onClick={getEmployeeData}
        padding="20px"
        margin="50px"
        style={{ backgroundColor: "lightgray" }}
        align="center"
      >
        {currEditIndex >= 0 ? "Update Employee" : "Add Employee"}
      </button>
      <EmployeeList
        employees={employees}
        deletedEmployeeData={deleteEmployee}
        editEmployeeData={handleEdit}
        saveEdit={saveEdit}
      />
    </div>
  );
}
export default EmployeeRegForm;