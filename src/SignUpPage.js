import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"
import axios from "axios"
import { useState } from "react"

export default function SignUpPage() {
    const [inputEmail, setInputEmail] = useState("")
    const [inputName, setInputName] = useState("")
    const [inputURL, setInputURL] = useState("")
    const [inputPassword, setInputPassword] = useState("")
    const navigate = useNavigate()

    function post() {
        const body = {
            email: inputEmail,
            name: inputName,
            image: inputURL,
            password: inputPassword
        }

        axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up", body)
            .then(navigate("/"))
            .catch(res => alert(res.response.data))
    }
    return (
        <Main>
            <Logo>TrackIt</Logo>
            <input
                type="email"
                placeholder="email"
                onChange={(e) => setInputEmail(e.target.value)} />
            <input
                type="password"
                placeholder="senha"
                onChange={(e) => setInputPassword(e.target.value)} />
            <input
                type="name"
                placeholder="nome"
                onChange={(e) => setInputName(e.target.value)} />
            <input
                type="url"
                placeholder="foto"
                onChange={(e) => setInputURL(e.target.value)} />
            <Button onClick={post}>Cadastrar</Button>
            <Link to="/">
                <SignUp>Já tem uma conta? Faça login!</SignUp>
            </Link>
        </Main>)
}





const Main = styled.main`
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
input{ 
    width: 303px;
height: 45px;
left: 36px;
top: 279px;

background: #FFFFFF;
border: 1px solid #D5D5D5;
border-radius: 5px;
input::placeholder{ 
    width: 54px;
height: 25px;
left: 47px;
top: 288px;

font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 19.976px;
line-height: 25px;

color: #DBDBDB;
}
}
`

const Logo = styled.div`
width: 180px;
height: 86.23px;
font-family: 'Playball';
font-style: normal;
font-weight: 400;
font-size: 68.982px;
line-height: 86px;
text-align: center;
color: #126BA5;
`

const Button = styled.button`
width: 303px;
height: 45px;
left: 36px;
top: 381px;

background: #52B6FF;
border-radius: 4.63636px;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 20.976px;
line-height: 26px;
text-align: center;

color: #FFFFFF;
`

const SignUp = styled.div`
width: 232px;
height: 17px;
left: 74px;
top: 451px;

font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 13.976px;
line-height: 17px;
text-align: center;
text-decoration-line: underline;

color: #52B6FF;
`