import styled from "styled-components";


export const Main = styled.main`
display: flex;
flex-direction: column;
align-items: center;
`

export const Top = styled.div`
display: flex;
margin-top: 80px;
justify-content: space-around;
p{ 
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 22.976px;
line-height: 29px;
color: #126BA5;
margin-right: 50px;
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
width: 340px;
height: 180px;
margin-top: 30px;
background: #ffffff;
border-radius: 5px;
display: ${props => props.showNewHabit ? "flex" : "none"};
flex-direction: column;
padding-right: 20px;
padding-left:19px;
padding-top: 20px;
box-sizing: border-box;
`

export const Form = styled.form`
input{
width: 303px;
height: 45px;
border: 1px solid #D5D5D5;
border-radius: 5px;
}
`

export const DaysContainer = styled.div`
display:flex;
margin-top: 5px;
position: relative;
p{
    position: absolute;
    left: 120px;
    font-family: 'Lexende Deca';
    font-size: 15px;
    color: #52b6ff;
    bottom: -45px;
}
`

export const Save = styled.button`
width: 84px;
height: 35px;
background: #52B6FF;
border-radius: 4.63636px;
font-family: 'Lexend Deca';
position: absolute;
top: 50px;
right: 0px;
color: #FFFFFF;
`
export const Habit = styled.div`
width: 340px;
height: 91px;
background: #FFFFFF;
border-radius: 5px;
margin-top: 30px;
position:relative;
display: flex;
flex-direction: column;
box-sizing: border-box;
padding-left: 19px;
padding-right: 19px;
padding-top: 19px;
img{
    position: absolute;
    width: 13px;
    height: 15px;
    right: 10px;

}
`
export const ButtonDelete = styled.button`
position: absolute;
    width: 13px;
    height: 13px;
    right: 10px;
`
export const Text = styled.div`
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 19.976px;
line-height: 25px;
color: #666666;
`

export const Day = styled.div`
width: 30px;
height: 30px;
margin-right: 5px;
background:${props => props.days.includes(props.indx) ? "#CFCFCF" : "white"};
border: 1px solid #D5D5D5;
border-radius: 5px;
display: flex;
justify-content: center;
align-items: center;
h1{
    font-family: 'Lexend Deca';
    font-size: 20px;
    color: #dbdbdb;
}
`

export const Between = styled.div`
margin-bottom: 100px;
`