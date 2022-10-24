import axios from "axios";
import { useState } from "react";
import styled from "styled-components";
import check from "../img/checkmark-outline.svg"


export default function Habit({ id, done, config, name, currentSequence, highestSequence }) {
    const [sequenceColor, setSequenceColor] = useState(false)
    const [recordColor, setRecordColor] = useState(false)

    function onClick() {
        if (done === false) {
            axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`, {}, config)
                .then(res => console.log(res))
                setSequenceColor(true)
                if(highestSequence === currentSequence){
                    setRecordColor(true)
                }else{
                    setRecordColor(false)
                }

        } else {
            axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`, {}, config)
                .then(res => console.log(res))
                setSequenceColor(false)
                setRecordColor(false)
        }
    }


    return (
        <HabitContainer done={done} >
            <Title>
                {name}
                </Title>
                <Text>
                <p>Sequência atual:</p>
                    <Sequence sequenceColor={sequenceColor}>{currentSequence} dias</Sequence>
                    </Text>

                <p>Seu recorde:</p>
                    <Record recordColor={recordColor}>{highestSequence} dias</Record>
                
            
            <CheckHabit done={done} onClick={onClick}>
                <img src={check}/>
            </CheckHabit>
        </HabitContainer>

    )
}


const CheckHabit = styled.div`

    width: 69px;
height: 69px;
background: ${props => props.done ? "#8FC549" : "#EBEBEB"};
border: 1px solid #E7E7E7;
border-radius: 5px;

display: flex;
position: absolute;
right: 20px;
bottom: 12px;
justify-content: center;
align-items: center;
img{
    width: 70px;
    height: 70px;
}
`

const HabitContainer = styled.div`
width: 340px;
height: 94px;
margin-top: 20px;
display:flex;
background: #FFFFFF;
flex-direction: column;
position: relative;
box-sizing: border-box;
padding: 20px 20px;
border-radius: 5px;
p{
font-family: 'Lexend Deca';
font-size: 13px;
color: #666666;
display: flex;
}

`


const Text = styled.div`
display:flex;
`

const Sequence = styled.div`
font-size: 13px;
color: ${props => props.sequenceColor ? "green" : "#666666"};
`

const Record = styled.div`
font-size: 13px;
color: ${props => props.recordColor ? "green" : "#666666"};
`

const Title =styled.div`
font-family: 'Lexend Deca';
font-size: 20px;
color: #666666;`