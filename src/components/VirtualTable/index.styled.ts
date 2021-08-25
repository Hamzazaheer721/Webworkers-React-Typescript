import styled from 'styled-components'
import { Table } from 'antd'

const TableAnt = styled(Table)`
  table{
    background: linear-gradient(45deg, #2193b0, #5f2c82);
    margin-top: 50px;
    margin-bottom: 20px;
    border-radius: 5px;
    margin-left: 20px; 
    align-self: center;
    overflow-y: auto;
  //   &::-webkit-scrollbar-track{
  //     -webkit-box-shadow: inset 10px 10px 18px rgba(0,0,0,0.3);
  //     border-radius: 10px;
  //     background: #fff;
  //   }

  //   &::-webkit-scrollbar{
  //     width: 16px;
  //     background: #fff;
  //     border-radius: 2px;
  //   }

  //   &::-webkit-scrollbar-thumb{
  //     border-radius: 10px;
  //     -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
  //     background-color: #555;
      
  //   }
  // }
  .ant-table-cell{
    padding: 40px;
  }

`
export default TableAnt;
