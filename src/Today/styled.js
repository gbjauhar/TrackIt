import styled from "styled-components";


export const Main = styled.main`
display: flex;
flex-direction: column;
margin-left: 18px;
margin-right: 18px;
`

export const Top = styled.div`
display: flex;
flex-direction: column;
margin-top: 200px;
justify-content: flex-start;
h1{ 
    width: 172px;
height: 29px;

font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 22.976px;
line-height: 29px;
/* identical to box height */


color: #126BA5;

}
h2{
    width: 278px;
height: 22px;

font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 17.976px;
line-height: 22px;

color: #BABABA;

}

`

export const Habit = styled.div`
width: 340px;
height: 94px;
left: 18px;
margin-top: 28px;
display:flex;
background: #FFFFFF;
border-radius: 5px;
input{
    width: 69px;
height: 69px;
left: 276px;
top: 190px;
background: #EBEBEB;
border: 1px solid #E7E7E7;
border-radius: 5px;
}
`

export const Text = styled.div`
display:flex;
flex-direction: column;
h1{
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 19.976px;
line-height: 25px;
color: #666666;
}
p{
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 12.976px;
line-height: 16px;
color: #666666;
}
`