import styled from "styled-components";


export const Main = styled.main`
display: flex;
flex-direction: column;
align-items: center;
background-color: gray;
background-color: gray;
`

export const Top = styled.div`
display: flex;
margin-top: 80px;
justify-content: space-between;
p{ 
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 22.976px;
line-height: 29px;
color: #126BA5;
}
button{
    width: 40px;
height: 35px;
background: #52B6FF;
border-radius: 4.63636px;
display: flex;
justify-content: center;
position: relative;
}
h1{
    font-family: 'Lexend Deca';
font-style: normal;
display: flex;
margin: auto auto;
font-size: 27px;
color: #ffffff;
}
`

export const CreateHabit = styled.div`
width: 100%;
height: 180px;
left: 17px;

background: #ffffff;
border-radius: 5px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top:20px;
`

export const Text = styled.div`
margin-top: 30px;
width: 338px;
height: 74px;
left: 19px;
top: 356px;

font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 17.976px;
line-height: 22px;

color: #666666;

`

export const InputText = styled.input`
width: 303px;
height: 45px;
left: 36px;
top: 165px;

background: #FFFFFF;
border: 1px solid #D5D5D5;
border-radius: 5px;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 19.976px;
line-height: 25px;
margin-bottom: 8px;
/* identical to box height */


color: #DBDBDB;

`

export const InputDay = styled.input`
width: 30px;
height: 30px;
left: 36px;
top: 218px;

background: #FFFFFF;
border: 1px solid #D5D5D5;
border-radius: 5px;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 19.976px;
line-height: 25px;
/* identical to box height */


color: #DBDBDB;

`

export const InputsDays = styled.div`
display:flex;
justify-content: flex-start;
`

export const Save = styled.button`
width: 84px;
height: 35px;
left: 257px;
top: 277px;

background: #52B6FF;
border-radius: 4.63636px;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 15.976px;
line-height: 20px;
/* identical to box height */

text-align: center;

color: #FFFFFF;
`

export const Cancel = styled.div`
width: 69px;
height: 20px;
left: 165px;
top: 284px;

font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 15.976px;
line-height: 20px;
/* identical to box height */

text-align: center;

color: #52B6FF;
`

export const ButtonContainer = styled.div`
display:flex;
justify-content: flex-end;
align-items: center;
margin-top: 30px;
`
export const Habit = styled.div`
width: 340px;
height: 91px;
background: #FFFFFF;
border-radius: 5px;
h1{
    font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 19.976px;
line-height: 25px;
/* identical to box height */


color: #666666;
}`
