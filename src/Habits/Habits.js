import Header from "../Header";
import Footer from "../Footer";
import ButtonDay from "./ButtonDay";
import { Main, Top, Habit, CreateHabit, Text, Form, DaysContainer, Save, Day, Between } from "./styled"
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { LoginContext } from "../auth";
import { useNavigate } from "react-router-dom";
import trash from "../img/trash-outline.svg"

export default function Habits() {
    const [habit, setHabit] = useState([{ name: "", days: [] }])
    const { user } = useContext(LoginContext)
    const config = { headers: { "Authorization": `Bearer ${user.token}` } }
    const [newHabit, setNewHabit] = useState({ name: "", days: [] })
    const [showNewHabit, setShowNewHabit] = useState(false)
    const [disabled, setDisabled] = useState(false)
    const days = ["D", "S", "T", "Q", "Q", "S", "S"]
    useEffect(() =>
        axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", config)
            .then(res => setHabit(res.data)))
    function post() {
        setDisabled(true)
        setShowNewHabit(!showNewHabit)
        setNewHabit({ name: "", days: [] })
        axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", newHabit, config)
            .then(res => {
                console.log(res.data)
                setDisabled(false)
            })
            .catch(res => {
                console.log(res.response.data)
                setDisabled(false)
            })


    }
    function showNewHabitContainer() {
        setShowNewHabit(!showNewHabit)
    }


    if (habit.length === 0) {
        return (
            <>
                <Header />
                <Main>
                    <Top>
                        <p>Meus hábitos</p>
                        <button onClick={showNewHabitContainer}><h1>+</h1></button>
                    </Top>
                    <CreateHabit showNewHabit={showNewHabit}>
                        <Form>
                            <input
                                type="text"
                                placeholder="nome do hábito"
                                name="name"
                                value={newHabit.name}
                                onChange={(e) => setNewHabit({ ...newHabit, [e.target.name]: e.target.value })}
                                disabled={disabled} />
                        </Form>

                        <DaysContainer>
                            {days.map((d, indx) => <ButtonDay d={d} indx={indx} newHabit={newHabit} disabled={disabled} />)}
                            <p onClick={showNewHabitContainer}>Cancelar</p>
                            <Save onClick={post}>Salvar</Save>
                        </DaysContainer>
                    </CreateHabit>
                    <Text>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</Text>
                </Main>
                <Footer />
            </>
        )
    } else {
        return (
            <>
                <Header />
                <Main>
                    <Top>
                        <p>Meus hábitos</p>
                        <button onClick={showNewHabitContainer}><h1>+</h1></button>
                    </Top>
                    <CreateHabit showNewHabit={showNewHabit}>
                        <Form>
                            <input
                                type="text"
                                placeholder="nome do hábito"
                                name="name"
                                value={newHabit.name}
                                onChange={(e) => setNewHabit({ ...newHabit, [e.target.name]: e.target.value })}
                                disabled={disabled} />
                        </Form>

                        <DaysContainer>
                            {days.map((d, indx) => <ButtonDay d={d} indx={indx} newHabit={newHabit} disabled={disabled} />)}
                            <p onClick={showNewHabitContainer}>Cancelar</p>
                            <Save onClick={post}>Salvar</Save>
                        </DaysContainer>
                    </CreateHabit>
                    <Between>
                    {habit.map((h) => <Habit>
                        <Text>{h.name}
                        </Text>
                        <DaysContainer>
                            {days.map((d, indx) => <Day days={h.days} indx={indx}><h1>{d}</h1></Day>)}
                        </DaysContainer>
                        <img src={trash} onClick={() => {
                            if (window.confirm("Tem certeza que quer deletar?")) {
                                axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${h.id}`, config)
                                    .then(res => console.log(res.data))
                            }
                        }}></img>
                    </Habit>)}
                    </Between>
                </Main>
                <Footer />
            </>
        )
    }

}


