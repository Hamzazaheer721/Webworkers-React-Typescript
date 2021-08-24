import styled from 'styled-components'

export const TableWrapper = styled.div`
  background: linear-gradient(45deg, #2193b0, #5f2c82);
  margin-top: 50px;
  flex:0.8;
  margin-bottom: 20px;
  height: 100%;
  width: 800px;
  border-radius: 5px;
  margin-left: 20px; 
  align-self: center;
  overflow: auto;
  &::-webkit-scrollbar-track{
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    border-radius: 10px;
    background: linear-gradient(50deg, #5f2c82,#2193b0);
  }

  &::-webkit-scrollbar{
    width: 16px;
    background: #5f2c82;
    border-radius: 2px;
  }

  &::-webkit-scrollbar-thumb{
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
    background-color: #555;
    
  }


`
export const Table = styled.table`
  width: 100%;
  height: 100%;
  border-collapse: collapse;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(0,0,0,0.1);
  th{
    font-weight: bold;
  }
  td{
      font-weight: 100;
  }
  th,td {
    padding: 15px;
    background-color: rgba(255,255,255,0.2);
      color: #d8d8d8;
  }
  th {
    text-align: left;
  }
  thead > tr> th {
      background-color: #55608f;
  }
  tbody > tr:hover {
    background-color: rgba(255,255,255,0.3);
  }
`
