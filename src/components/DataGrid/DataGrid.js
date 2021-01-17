import React from 'react';
import './DataGrid.scss';
import { Table } from 'antd';
import { SortAscendingOutlined, DownSquareOutlined } from '@ant-design/icons';
import fakePersonData from '../../services/data/fakeData';

const TableList = (props) => {
  const tableItems = fakePersonData.map((e, i) => (
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

const DataGrid = () => {
  return (
    <div className="table-wrapper">
      <div className="table-container">
        <table className="table">
          <thead className="table-header">
            <tr className="table-header__row">
              <th className="table-header__caption table-header__caption-sticky">First Name</th>
              <th className="table-header__caption">Last Name</th>
              <th className="table-header__caption">Status</th>
              <th className="table-header__caption">Age</th>
              <th className="table-header__caption">Profession</th>
              <th className="table-header__caption">Date</th>
              <th className="table-header__caption">Salary</th>
            </tr>
          </thead>
          <TableList />
        </table>
      </div>
    </div>
  );
};

export default DataGrid;

// const columns = [
//   {
//     title: 'First Name',
//     width: 100,
//     dataIndex: 'firstName',
//     key: 'firstName',
//     fixed: 'left',
//     sorter: {
//       compare: (a, b) => a.firstName - b.firstName,
//     },
//   },
//   {
//     title: 'Last Name',
//     width: 100,
//     dataIndex: 'lastName',
//     key: 'lastName',
//   },
//   {
//     title: 'Status',
//     dataIndex: 'status',
//     key: 'status',
//     width: 150,
//   },
//   {
//     title: 'Age',
//     dataIndex: 'age',
//     key: 'age',
//     width: 150,
//   },
//   {
//     title: 'Profession',
//     dataIndex: 'profession',
//     key: 'profession',
//     width: 150,
//   },
//   {
//     title: 'Date',
//     dataIndex: 'date',
//     key: 'date',
//     width: 150,
//   },
//   {
//     title: 'Salary',
//     dataIndex: 'salary',
//     key: 'salary',
//     width: 150,
//   },
// ];

{
  /* <Table
        columns={columns}
        dataSource={fakePersonData}
        scroll={{ x: 1100, y: '60vh' }}
        pagination={false}
        // expandable={{
        //   // eslint-disable-next-line react/display-name
        //   expandedRowRender: (record) => <p style={{ margin: 0 }}>{record.description}</p>,
        //   // eslint-disable-next-line react/display-name
        //   expandIcon: ({ expanded, onExpand, record }) =>
        //     expanded ? (
        //       <MinusCircleTwoTone onClick={(e) => onExpand(record, e)} />
        //     ) : (
        //       <PlusCircleTwoTone onClick={(e) => onExpand(record, e)} />
        //     ),
        // }}
      /> */
}
