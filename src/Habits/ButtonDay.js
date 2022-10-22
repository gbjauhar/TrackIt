import { useState } from "react";
import styled from "styled-components";

export default function ButtonDay({index, d, newHabit}){
const [clicked, setClicked] = useState(false)

    function clickedButton(){
        if(!clicked){
            setClicked(!clicked)
            newHabit.days.push(index)
        }
    }

    return(
        <StyledButton clicked={clicked} onClick={clickedButton}><h1>{d}</h1></StyledButton>
    )
}



export const StyledButton = styled.button`
width: 30px;
height: 30px;
margin-right: 5px;
background: ${props => props.clicked ? "#CFCFCF" : "#FFFFFF"};
border: 1px solid #D5D5D5;
border-radius: 5px;
display: flex;
justify-content: center;
align-items: center;
h1{
font-family: 'Lexend Deca';
font-size: 19.976px;
line-height: 25px;
color: #DBDBDB;
}
`