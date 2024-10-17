import React, { useState } from "react";

function EmployeeFunctionComp() {
  const [employeeData, setEmployeeData] = useState({ name: "", salary: 0 });
  const [employees, setEmployees] = useState([""]);
  const [salary, setSalary] = useState("");

  const getEmployeeData = () => {
    setEmployeeData({ name: " ", salary: " " });
    setEmployees([{ ...employees, ...employeeData }]);
  };

  //   const jsonString = JSON.stringify({ ...employeeData, name, salary });
  //   console.log(jsonString);

  return (
    <div>
      {JSON.stringify(employeeData)}
      {JSON.stringify(employees)}

      <table>
        <thead>
          <tr>
            <th>Name</th>
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

      <h1 style={{ color: "green" }}>Employee Data</h1>
      <label>Name :</label>
      <input
        type="text"
        value={employeeData.name}
        onChange={(e) => {
          setEmployeeData({ ...employeeData, name: e.target.value });
        }}
      />
      <label> Salary :</label>
      <input
        type="text"
        value={employeeData.salary}
        onChange={(e) => {
          setEmployeeData({ ...employeeData, salary: e.target.value });
        }}
      />
      <button onClick={getEmployeeData}>Get Employee Data</button>
    </div>
  );
}

export default EmployeeFunctionComp;
