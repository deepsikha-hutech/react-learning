import React, { useState } from "react";

function EmployeeFunctionComp() {
  const [employeeData, setEmployeeData] = useState({ name: "", salary: 0 });
  const [employees, setEmployees] = useState([]);
  const [salary, setSalary] = useState("");

  const getEmployeeData = () => {
    setEmployees([...employees, employeeData]);
    setEmployeeData({ name: " ", salary: " " });
  };

  //   const jsonString = JSON.stringify({ ...employeeData, name, salary });
  //   console.log(jsonString);

  return (
    <div
      style={{
        backgroundColor: "lightgray",
        padding: "50px",
        margin: "10px",
        border: "20px black double",
        borderColor: "purple",
      }}
    >
      <h1
        style={{
          color: "green",
          backgroundColor: "lightgray  ",
        }}
      >
        Employee Data
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
      <br></br>
      <br></br>
      <label> Salary : </label>
      <input
        type="text"
        padding="20px"
        value={employeeData.salary}
        onChange={(e) => {
          setEmployeeData({ ...employeeData, salary: e.target.value });
        }}
      />
      <br></br>
      <br></br>
      <button
        onClick={getEmployeeData}
        padding="20px"
        margin="20px"
        style={{ backgroundColor: "lightblue" }}
        align="center"
      >
        Add Employee
      </button>
      <br></br>
      <br></br>
      <div style={{ backgroundColor: "lightgray" }}>
        <h2 style={{ color: "blue", padding: "10px", margin: "10px" }}>
          Employee Data list
        </h2>
        <br></br>
        <table border={"1px black solid"} cellpadding="10px" cellspacing="5px">
          <thead>
            <tr
              align="left"
              margin="10px"
              textalign="left"
              tablewidth="100%"
              padding="10px"
            >
              <th textcolor="red" textalign="left" padding="10px" width="80%">
                Name
              </th>
              <th>Salary</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee, index) => (
              <tr key={index}>
                <td>{employee.name}</td>
                <td>{employee.salary}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default EmployeeFunctionComp;
