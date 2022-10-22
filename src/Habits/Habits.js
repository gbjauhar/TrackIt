import { Link } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import ButtonDay from "./ButtonDay";
import { Main, Top, Habit, CreateHabit, Text, Form, InputText, DaysContainer, Save, Cancel, ButtonContainer } from "./styled"
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { LoginContext } from "../auth";


export default function Habits() {
    const days = ["D", "S", "T", "Q", "Q", "S", "S"]
    const [habit, setHabit] = useState([{ name: "", days: [] }])
    const { user } = useContext(LoginContext)
    const config = { headers: { "Authorization": `Bearer ${user.token}` } }
    const [newHabit, setNewHabit] = useState({ name: "", days: [] })
      /* useEffect(() =>
         axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", config)
         .then(res => setHabit(res.data))) */
         function post(){
         axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", newHabit, config)
        .then(res => console.log(res.data)) 
        } 
    return (
        <>
            <Header />
            <Main>
                <Top>
                    <p>Meus hábitos</p>
                    <button><h1>+</h1></button>
                </Top>
                {/* {habit.map((h) =>   <Habit>
                    setHabit      <h1>{h.name}</h1>
                    <InputsDays>
                    {days.map((d) => <InputDay type="text" placeholder={`${d}`} />)}
                    </InputsDays>

                </Habit>)} */}

                <CreateHabit>
                    <Form>
                        <input
                            type="text"
                            placeholder="nome do hábito"
                            name="name"
                            value={newHabit.name}
                            onChange={(e) => setNewHabit({...newHabit, [e.target.name]: e.target.value})} />
                    </Form>

                    <DaysContainer>
                        {days.map((d, index) => <ButtonDay d={d} index={index} newHabit={newHabit}/>)}
                        <p>Cancelar</p>
                        <Save onClick={post}>Salvar</Save>
                    </DaysContainer>
                </CreateHabit>
                <Text>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</Text>
            </Main>
            <Footer />
        </>

    )
}


