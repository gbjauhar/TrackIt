import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import { Link } from "react-router-dom";
import styled from "styled-components";
import 'react-circular-progressbar/dist/styles.css';
import { LoginContext } from "./auth";
import { useContext } from "react";

export default function Footer(){
    const { user } = useContext(LoginContext)
    return(
        <FooterContainer>
                <Link to="/habitos">
                <p>Hábitos</p>
                </Link>
                <ProgressContainer>
                    <Link to="/hoje">
                    <CircularProgressbar 
                    value={user.progress} text="Hoje" 
                    background
                    backgroundPadding={8}
                    styles={buildStyles({
                        backgroundColor:"#52B6FF",
                        textColor:"#fff",
                        pathColor:"#FFF",
                        trailColor:"transparent"
                    })}
                    />
                    </Link>
                </ProgressContainer>
                <Link to="/historico">
                <p>Histórico</p>
                </Link>
            </FooterContainer>
    )
}


const FooterContainer = styled.footer`
width: 100%;
background: #FFFFFF;
display: flex;
position: fixed;
bottom: 0px;
height: 70px;
display: flex;
align-items: center;
justify-content: space-around;
p{
    font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 17.976px;
line-height: 22px;
text-align: center;
color: #52B6FF;
}
`
const ProgressContainer = styled.div`
margin-left: 5%;
margin-right: 5%;
width: 91px;
height: 91px;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
margin-top: -20px;
font-family: 'Lexend Deca'
`
