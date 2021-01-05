import React, { useState } from 'react';
import { Table, Radio, Divider } from 'antd';


const App = (props) => {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
    },
  ];
  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
    },
    {
      key: '4',
      name: 'Disabled User',
      age: 99,
    },
  ]; // rowSelection object indicates the need for row selection

  const rows= {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: (record) => ({
      disabled: record.name === 'Disabled User',
    }),
  };

  return (
    <div>

      <Table
        rowSelection={{
          type: Radio,
          ...rows,
        }}
        columns={columns}
        dataSource={data}
      />
    </div>
  );
}

export default App;
