import LoginPage from "./LoginPage";
import GlobalStyle from "./GlobalStyle"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUpPage from "./SignUpPage";
import History from "./History";
import Habits from "./Habits";

export default function App() {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/cadastro" element={<SignUpPage/>}/>
                <Route path="/historico" element={<History/>}/>
                <Route path="/habitos" element={<Habits/>}/>
            </Routes>
        </BrowserRouter>
    )
}