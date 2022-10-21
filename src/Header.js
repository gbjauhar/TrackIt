import { useContext } from "react";
import styled from "styled-components";
import { LoginContext } from "./auth";

export default function Header() {
    const { user, setUser } = useContext(LoginContext)
    return (
        <HeaderContainer>
            <h1>TrackIt</h1>
            <img src={user.image} />
        </HeaderContainer>
    )
}



const HeaderContainer = styled.header`
width: 100%;
height: 70px;
background: #126BA5;
display: flex;
align-items: center;
justify-content: space-around;
position: absolute;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
h1{
    font-family: 'Playball';
    font-size: 38.982px;
    color: #ffffff;
}

img{
    width: 51px;
height: 51px;
border-radius: 98.5px;
}
`