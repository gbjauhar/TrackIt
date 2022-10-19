import styled from "styled-components";

export default function Habits() {
    return (
        <>
            <Header>
                <Content>
                    <Title>TrackIt</Title>
                    <Picture></Picture>
                </Content>
            </Header>
            <Main>
                <Top>
                    <p>Meus hábitos</p>
                    <button>+</button>
                </Top>
                <Habit></Habit>
                <Text>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</Text>
            </Main>
        </>
    )
}

const Header = styled.header`
width: 100%;
height: 70px;
background: #126BA5;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
`

const Content = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin-left: 18px;
`

const Title = styled.div`
width: 97px;
height: 49px;
font-family: 'Playball';
font-style: normal;
font-weight: 400;
font-size: 38.982px;
line-height: 49px;
/* identical to box height */


color: #FFFFFF;
`

const Picture = styled.img`
width: 51px;
height: 51px;
border-radius: 98.5px;
`

const Main = styled.main`
display: flex;
flex-direction: column;
align-items: center;
`

const Top = styled.div`
display: flex;
margin-top: 22px;
justify-content: space-between;
align-items: center;
p{ 
    width: 148px;
height: 29px;
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
left: 317px;
top: 92px;

background: #52B6FF;
border-radius: 4.63636px;
}
`

const Habit = styled.div`
width: 340px;
height: 180px;
left: 17px;
top: 147px;

background: #FFFFFF;
border-radius: 5px;
`

const Text =styled.div`
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
