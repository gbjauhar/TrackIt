import LoginPage from "./LoginPage/LoginPage";
import GlobalStyle from "./GlobalStyle"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUpPage from "./SignUpPage/SignUpPage";
import History from "./History/History";
import Habits from "./Habits/Habits";
import Today from "./Today/Today";
import { createContext, useState } from "react";
import { LoginContext } from "./auth";

export default function App() {
    const [user, setUser] = useState({
        "id": "",
        "name": "",
        "image": "",
        "email": "",
        "password": "",
        "token": ""
    })
    return (
        <BrowserRouter>
            <GlobalStyle />
            <LoginContext.Provider value={{user, setUser}}>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/cadastro" element={<SignUpPage/>}/>
                <Route path="/historico" element={<History/>}/>
                <Route path="/habitos" element={<Habits/>}/>
                <Route path="/hoje" element={<Today />} />
            </Routes>
            </LoginContext.Provider>
        </BrowserRouter>
    )
}