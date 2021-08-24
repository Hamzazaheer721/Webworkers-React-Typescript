import styled from 'styled-components'

export const TableWrapper = styled.div`
  background: linear-gradient(45deg, #2193b0, #5f2c82);
  margin-top: 50px;
  flex:0.7;
  min-height: 500px;
  height: 600px;
  width: 800px;
  border-radius: 5px;
  margin-left: 20px; 
  align-self: center;
`
export const Table = styled.table`
  width: 100%;
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
