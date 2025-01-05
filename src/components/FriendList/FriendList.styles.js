import styled from 'styled-components'


export const FriendListSection = styled.ul`

background-color: gray;
width: 300px;
border: 2px;
border-style: ridge;
border-color: gray;
margin-top:50px;
list-style: none;
padding: 0;
`

export const FriendLi = styled.li`
display: flex;
justify-content: space-around;
align-items: center;
background-color: white;
border: 2px;
border-style: ridge;
border-color: gray;
margin-bottom: 10px;
padding: 10px;

.status{
    display: inline-block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    margin-right: 5px;
    background-color: ${({isOnline}) => (isOnline ? 'green' : 'red')};
}

.avatar {
background-color: white;
border: 2px;
border-style: ridge;
border-radius: 20%;
}

`