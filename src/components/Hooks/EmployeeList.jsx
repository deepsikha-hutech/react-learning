import React from "react";
function EmployeeList(props) {
  console.log({ props });
  return (
    <div style={{ backgroundColor: "lightgreen" }}>
      <h2 style={{ color: "purple", padding: "10px", margin: "10px" }}>
        Employee Data list
      </h2>
      {/* {JSON.stringify({ ssss: props.employees })} */}

      <table
        border={"1px black solid"}
        cellpadding="10px"
        cellspacing="5px"
        align="center"
      >
        <thead>
          <tr
            align="left"
            margin="10px"
            textalign="left"
            tablewidth="100%"
            padding="10px"
          >
            <th>SL No.</th>

            <th textcolor="black" textalign="center" padding="10px" width="80%">
              Name
            </th>
            <th>Age</th>
            <th>Header Action</th>
          </tr>
        </thead>
        <tbody>
          {props.employees.map((employee, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{employee.name}</td>
              <td>{employee.age}</td>
              <button
                onClick={() => {
                  props.deletedEmployeeData(index);
                }}
                style={{ backgroundColor: "lightgray" }}
              >
                Delete
              </button>
              <br></br>
              <br></br>

              <button
                onClick={() => {
                  props.editEmployeeData(employee, index);
                }}
                style={{ backgroundColor: "lightgray" }}
              >
                Edit
              </button>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeList;
