import React from "react";

function TableCheckList() {
  return (
    <div>
      <h1> Employee data sheet</h1>

      <table>
        <thead>
          <tr>
            <th>Checkbox</th>
            <th>Sl.no </th>

            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={row.id}>
              <td>
                <input
                  type="checkbox"

                  //   checked={selectedRows.includes(row.id)}
                  //   onChange={() => handleCheckboxChange(row.id)}
                />
              </td>
              <td>{index + 1}</td>
              <td>{row.data}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableCheckList;
