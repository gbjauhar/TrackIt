import { Link, useNavigate } from "react-router-dom"
import {Main, ButtonText, SignUp } from "../styledLoginSignUp"
import axios from "axios"
import { useContext, useState } from "react"
import logo from "../img/logo.png"
import { LoginContext } from "../auth"
import { ThreeDots } from "react-loader-spinner"

export default function SignUpPage() {
    const {user, setUser } = useContext(LoginContext)
    const [disabled, setDisabled] = useState(false)
    const [notDisabled, setNotDisabled] = useState(true)
    const [form, setForm] = useState({ email: "", name: "", image: "", password: "" })
    const navigate = useNavigate()

    function login(e) {
        e.preventDefault()
        setDisabled(true)
        setNotDisabled(false)
        axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up", form)
            .then(res => {
                console.log(res.data)
                setDisabled(false)
                setNotDisabled(true)
                navigate("/")})
            .catch(res => {
                console.log(res.response.data)
                setDisabled(false)})
    }

    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    return (
        <Main disabled={disabled}>
            <img src={logo}/>
            <form onSubmit={login}>
            <input
                 type="email"
                 name="email"
                 value={form.email}
                 placeholder="email"
                 onChange={handleChange}
                 disabled={disabled}
                 required />
            <input
                type="password"
                name="password"
                value={form.password}
                placeholder="senha"
                onChange={handleChange}
                disabled={disabled}
                required />
            <input
                 type="text"
                 name="name"
                 value={form.name}
                 placeholder="nome"
                 onChange={handleChange}
                 disabled={disabled}
                 required />
            <input
                 type="url"
                 name="image"
                 value={form.image}
                 placeholder="foto"
                 onChange={handleChange}
                 disabled={disabled}
                 required/>
              <button disabled={disabled} type="submit">
                    <ButtonText visible={!disabled}>Entrar</ButtonText>
                    <ThreeDots
                        height="80"
                        width="80"
                        radius="9"
                        color="#4fa94d"
                        ariaLabel="three-dots-loading"
                        wrapperStyle={{}}
                        wrapperClassName=""
                        visible={disabled}
                    />
                    </button>
            </form>
            <Link to="/">
                <SignUp>Já tem uma conta? Faça login!</SignUp>
            </Link>
        </Main>)
}