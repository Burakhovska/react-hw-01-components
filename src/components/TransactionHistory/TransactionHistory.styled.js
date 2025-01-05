import styled from 'styled-components'


export const  TransactionTable= styled.table`
width: 300px;
  background-color:rgb(107, 104, 106);

tbody tr:nth-child(odd) {
  background-color:rgb(248, 209, 238);
}

tbody tr:nth-child(even) {
  background-color:rgb(201, 200, 201);
}

tbody tr {
  background-image: url(noise.png);
}


`