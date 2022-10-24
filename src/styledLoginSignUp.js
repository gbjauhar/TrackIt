import styled from "styled-components";


export const Main = styled.main`
display:flex;
flex-direction: column;
margin-top: 60px;
align-items: center;
margin-left: auto;

img{
    height: 138px;
    width: 180px;
    margin-bottom: 30px;
}

form{
    display: flex;
    flex-direction: column;
    align-items: center;
}

input{ 
    width: 303px;
height: 45px;
margin-top: 10px;
border: 1px solid #d4d4d4;
border-radius: 5px;
color: #d4d4d4;

}
input::placeholder{ 
    width: 54px;
height: 25px;
left: 47px;
top: 288px;

font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 19.976px;
line-height: 25px;

color: #dbdbdb;
}

button{
    width: 303px;
    height: 45px;
    background: #52B6FF;
    border-radius: 4.63636px;
    margin-top: 5%;
    margin-bottom: 5%;
    display: flex;
    justify-content: center;
    align-items: center;
}
`

export const ButtonText = styled.h1` 
    font-family: 'Lexend Deca';
font-size: 20.976px;
color: #FFFFFF;
display:${props => props.visible ? '' : 'none'};

`
export const SignUp = styled.div`
width: 232px;
height: 17px;
left: 74px;
top: 451px;

font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 13.976px;
line-height: 17px;
text-align: center;
text-decoration-line: underline;

color: #52B6FF;
`