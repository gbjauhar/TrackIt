import Header from "../Header";
import Footer from "../Footer";
import { Main, Top, Habit, Text } from "./styled"
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { LoginContext } from "../auth";

export default function Today() {
    const [habit, setHabit] = useState([{name: "", currentSequence: "", highestSequence: ""}])
    const {user} = useContext(LoginContext)
    const config =  { headers: { "Authorization": `Bearer ${user.token}` } }
    useEffect(() =>
        axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", config)
        .then(res => setHabit(res.data)))
    return (
        <>
            <Header />
            <Main>
                <Top>
                    <h1>Segunda, 17/05</h1>
                    <h2>Nenhum hábito concluído ainda</h2>
                </Top>
                {habit.map((h) => <Habit>
                    <Text>
                        <h1>{h.name}</h1>
                        <p>Sequência atual: {h.currentSequence}</p>
                        <p>Seu recorde: {h.highestSequence}</p>
                    </Text>
                    <input type="checkbox" />
                </Habit> )}
                
            </Main>
            <Footer />
        </>
    )
}