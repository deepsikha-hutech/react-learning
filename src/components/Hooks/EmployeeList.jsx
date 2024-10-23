import React, { useState } from "react";

function EmployeeList(props) {
  const [selectedEmployeeIds, setSelectedEmployeeIds] = useState([]);

  const handleCheckboxChange = (isSelected, index) => {
    if (isSelected) {
      setSelectedEmployeeIds([...selectedEmployeeIds, index]);
    } else {
      const finalSelectedEmployeeIds = selectedEmployeeIds.filter(
        (empId) => empId !== index
      );
      setSelectedEmployeeIds(finalSelectedEmployeeIds);
    }

    console.log(JSON.stringify);
  };

  const handleCheckBoxSelectAll = (isSelected) => {
    if (isSelected) {
      const allEmployeeIds = props.employees.map((emp, index) => index);
      setSelectedEmployeeIds(allEmployeeIds);
    } else {
      setSelectedEmployeeIds([]);
    }

    // alert("ischecked" + index);
    // console.log([...Array(100).keys()]);
  };

  return (
    <div style={{ backgroundColor: "lightgreen" }}>
      <h2 style={{ color: "purple", padding: "10px", margin: "10px" }}>
        Employee Data list
      </h2>
      {/* {JSON.stringify({ selectedEmployeeIds })} */}
      {/* {JSON.stringify({ ssss: props.employees })} */}
      <h3 align="right">
        <button
          onClick={() => {
            props.deleteBulkEmployees(selectedEmployeeIds);
            setSelectedEmployeeIds([]);
            // ("delete all");
          }}
          style={{ backgroundColor: "lightgray" }}
        >
          Delete All
        </button>
      </h3>

      <table
        border={"1px black solid"}
        cellPadding="10px"
        cellSpacing="5px"
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
            <th>
              <input
                type="checkbox"
                checked={
                  selectedEmployeeIds?.length === props?.employees?.length &&
                  props?.employees?.length > 0
                }
                onChange={(e) => handleCheckBoxSelectAll(e.target.checked)}
              ></input>
            </th>

            <th>SL No.</th>

            <th textcolor="black" textalign="center" padding="10px" width="80%">
              Name
            </th>
            <th>Age</th>
            <th>Header Action</th>
          </tr>
        </thead>
        <tbody>
          {props?.employees?.map((employee, index) => (
            <tr key={index}>
              <td>
                <input
                  id={index}
                  type="checkbox"
                  checked={selectedEmployeeIds.includes(index)}
                  onChange={(e) =>
                    handleCheckboxChange(e.target.checked, index)
                  }
                ></input>
              </td>
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
