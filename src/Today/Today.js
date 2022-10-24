import Header from "../Header";
import Footer from "../Footer";
import Habit from "./Habit"
import { Main, Container, Concluded} from "./styled"
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { LoginContext } from "../auth";

export default function Today() {
    const days = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"]
    const [habit, setHabit] = useState([{name: "", currentSequence: "", highestSequence: "", done:""}])
    const { user, setUser } = useContext(LoginContext)
    const config = { headers: { "Authorization": `Bearer ${user.token}` } }
    const dayjs = require('dayjs')
    const day = `${days[dayjs().day()]}, ${dayjs().date()}/${dayjs().month() + 1}`
    useEffect(() =>
        axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", config)
            .then(res => {
                setHabit(res.data)
                habitsMath(res.data)
            }))

    function habitsMath(arr) {
        let filtered = 0
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].done === true) {
                filtered++
            } else {
                filtered = filtered
            }
        }
        const progress = (filtered / arr.length * 100).toFixed()
        const newUser = { ...user, progress: progress }
        setUser(newUser)
    }


    return (
        <>
            <Header />
            <Container>
                <Main>
                    <h1>{day}</h1>
                   {habit.some((e) => e.done === true) ? <Concluded>{user.progress}% dos hábitos concluídos</Concluded> : <h2>Nenhum hábito concluído ainda</h2>}
                    {habit.map((h) => <Habit name={h.name} currentSequence={h.currentSequence} highestSequence={h.highestSequence} id={h.id} done={h.done} config={config} />)}

                </Main>
                <Footer />
            </Container>
        </>
    )
}