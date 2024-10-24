import React, { useState } from "react";
import TableCheckList from "./TableCheckList";

// const [data, setData] = useState({ id: " ", data: " " });
// const [selectedRows, setSelectedRows] = useState([]);

// const handleCheckboxChange = (id, index) => {
//   if (selectedRows.includes(index)) {
//     setSelectedRows(selectedRows.filter((rowIndex) => rowIndex !== id));
//   } else {
//     setSelectedRows([...selectedRows, id]);
//   }
// };

function TableCheckbox() {
  return (
    <div>
      <h1> Table Check Box</h1>

      <TableCheckList />
    </div>
  );
}

export default TableCheckbox;
