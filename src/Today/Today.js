import Header from "../Header";
import Footer from "../Footer";
import { Main, Top, Habit, Text } from "./styled"
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { LoginContext, PercentageContext } from "../auth";

export default function Today() {
    const {percentage} = useContext(PercentageContext)
    const days = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"]
    const [habit, setHabit] = useState([{ name: "", currentSequence: "", highestSequence: "", done: "" }])
    const { user } = useContext(LoginContext)
    const config = { headers: { "Authorization": `Bearer ${user.token}` } }
    const dayjs = require('dayjs')
    const day = `${days[dayjs().day()]}, ${dayjs().date()}/${dayjs().month() + 1}`
    useEffect(() =>
        axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", config)
            .then(res => setHabit(res.data)))
    function habitsMath() {
        let habitTrue = 0

        for (let i = 0; i < habit.length; i++) {
            if (habit[i].done === true) {
                habitTrue++
            }

        } 
        let percentage = habitTrue / habit.length * 100
        return console.log(percentage)
    }

    /*        const percentage = habitTrue.length / habit.length */

    return (
        <>
            <Header />
            <Main>
                <Top>
                    <h1>{day}</h1>
                    <h2>Nenhum hábito concluído ainda</h2>
                </Top>
                {habit.map((h) => <Habit>
                    <Text>
                        <h1>{h.name}</h1>
                        <p>Sequência atual: {h.currentSequence} dias</p>
                        <p>Seu recorde: {h.highestSequence} dias</p>
                    </Text>
                    <input type="checkbox" onClick={habitsMath} />
                </Habit>)}

            </Main>
            <Footer />
        </>
    )
}