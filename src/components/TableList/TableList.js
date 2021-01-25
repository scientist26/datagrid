import React from 'react';

// eslint-disable-next-line react/prop-types
const TableList = ({ personsDataStore }) => {
  // eslint-disable-next-line react/prop-types
  const tableItems = personsDataStore.map((e, i) => (
    <tr key={i} className="table-content__row">
      <td className="table-content__data table-content__data-sticky">{e.firstName}</td>
      <td className="table-content__data">{e.lastName}</td>
      <td className="table-content__data">{e.status}</td>
      <td className="table-content__data">{e.age}</td>
      <td className="table-content__data">{e.profession}</td>
      <td className="table-content__data">{e.date}</td>
      <td className="table-content__data">{e.salary}</td>
    </tr>
  ));
  return <tbody className="table-content">{tableItems}</tbody>;
};

export default TableList;
