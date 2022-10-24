import styled from "styled-components";
import Header from "../Header";
import Footer from "../Footer";

export default function History(){
    return(
        <>
        <Header/>
        <Container>
        <Main>
            <Title>Histórico</Title>
            <Info>Em breve você poderá ver o histórico dos seus hábitos aqui!</Info>
        </Main>
        <Footer/>
        </Container>
        </>
    )
}

const Container = styled.div`
justify-content: center;
display: flex;
box-sizing: border-box;
padding-left: 17px;
`

const Main = styled.main`
margin-top:100px;
height: 100%;
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
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 17.976px;
line-height: 22px;

color: #666666;

`