import styled from 'styled-components'


export const Profile = styled.div`
background-color: white;
width: 300px;
border: 2px;
border-style: ridge;
border-color: gray;

.description {
width: 200px;
  /* height: 200px; */
  margin: 0 auto;
  overflow: hidden;

}
`

export const Photo = styled.img`
 border-radius: 50%;
 width: 100%;
  max-width: 100%;
  height: 100%;
  margin: 0 auto;
  background-color: lightgray;
`

export const UserName = styled.p`
font-size: 20px;
font-weight: bold;
text-align: center;
`
export const UserDescription = styled.p`
font-size: 16px;
color: darkgray;
text-align: center;
`

export const StatsList = styled.ul`
padding: 0;
margin: 0;
height: 80px;
list-style: none;
display: flex;
align-items: center;
justify-content: space-around;
background-color: lightgray;
`

export const StatsLi = styled.li`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
border: 1px;
border-style: ridge;
border-color: gray;
width: 100%;
height: 100%;
.quantity {
font-size: 16px;
font-weight: bold;
}
`