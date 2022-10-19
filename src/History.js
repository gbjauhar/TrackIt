import styled from "styled-components";

export default function History(){
    return(
        <Main>
            <Title>Histórico</Title>
            <Info>Em breve você poderá ver o histórico dos seus hábitos aqui!</Info>
        </Main>
    )
}

const Main = styled.main`
display: flex;
flex-direction:column;
justify-content: flex-start;
align-items: center;
`

const Title = styled.div`
width: 100px;
height: 29px;
left: 17px;
top: 98px;

font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 22.976px;
line-height: 29px;
/* identical to box height */


color: #126BA5;
`

const Info = styled.div`
width: 338px;
height: 74px;
left: 15px;
top: 144px;

font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 17.976px;
line-height: 22px;

color: #666666;
`