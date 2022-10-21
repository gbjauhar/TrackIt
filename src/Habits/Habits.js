import { Link } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import { Main, Top, Habit, CreateHabit, Text, InputText, InputsDays, InputDay, Save, Cancel, ButtonContainer } from "./styled"
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { LoginContext } from "../auth";


export default function Habits() {
    const days = ["S", "T", "Q", "Q", "S", "S", "D"]
    const [form, setForm] = useState({name: "", days: []})
    const [habit, setHabit] = useState([{name: "", days:[]}])
    const {user, setUser} = useContext(LoginContext)
    const config =  { headers: { "Authorization": `Bearer ${user.token}` } }
    useEffect(() =>
        axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", config)
        .then(res => setHabit(res.data)))
        function post(){
        axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", form, config)
        } 
        function handleChange(e){
            setForm({...form, [e.target.name]: e.target.value})
        }
    return (
        <>
                <Header/>
            <Main>
                <Top>
                    <p>Meus hábitos</p>
                    <button><h1>+</h1></button>
                </Top>
                {habit.map((h) =>   <Habit>
                    <h1>{h.name}</h1>
                    <InputsDays>
                    {days.map((d) => <InputDay type="text" placeholder={`${d}`} />)}
                    </InputsDays>

                </Habit>)}
              
               {/*  <CreateHabit>
               <form>
                    <InputText
                        type="text"
                        placeholder="nome do hábito"
                        name="name"
                        value={form.name}
                        onChange={handleChange} />
                    <InputsDays>
                    {days.map((d) => <InputDay type="text" placeholder={`${d}`} />)}
                    </InputsDays>
                    <ButtonContainer>
                        <Cancel>Cancelar</Cancel>
                        <Save>Salvar</Save>
                    </ButtonContainer>
                    </form>
                </CreateHabit> */}
                <Text>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</Text>
            </Main>
            <Footer/>
            </>

    )
}