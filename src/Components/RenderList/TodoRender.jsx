import React, {useEffect, useState} from 'react';
import axios from "axios";
import Render from "./Render";
import {sendData} from "../serv";

import StyledAdd from "../Add/StyledAdd.styled";
const TodoRender = () => {
    const [res, setRes] = useState([]);
    const [newRes, setNewRes] = useState([]);
    let [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [deadline, setDeadline] = useState("");
    const [press, setPress] = useState(false)
    const [eff, setEff]= useState(false)
    const server = async () =>{
        let response = await axios.get("http://localhost:9999/")
        setRes(
            response.data
        );

    }
    async function getServ(){
        await server()
    }
    const o = async (x) => {
        const ff = await x()
        await setRes(ff.data)
        setEff(eff=>!eff)
    }

    async function go(){
        await sendData(title, description, deadline)
        setTitle("")
        setDeadline("")
        setDescription("")
    }
    async function pr(){
        let value = await document.getElementsByTagName("input").valueOf()
        for (let i = 0; i < value.length; i+=1){
            value[i].value = ""
        }
        await go();
        setPress(press => !press)
    }
    useEffect( function (){
        console.log("Отработало create")
        getServ().then(function (){
            console.log("Отработал render")
        })
    }, [press, eff])
    return (
        <>
            <div>
                <div className="wrapper">
                    <div className="main">
                        <StyledAdd>
                            <div className="wrapper">
                                <div className="main">
                                    <h1>Create a new goal</h1>
                                    <input type="text" placeholder="TITLE" onChange={e => setTitle(e.target.value)}/>
                                    <input type="text" placeholder="DESCRIPTION" onChange={e => setDescription(e.target.value)}/>
                                    <input type="text" placeholder="DEADLINE" onChange={e => setDeadline(e.target.value)}/>
                                    <div className="btn">
                                        <button onClick={
                                            pr
                                        }>Create</button>
                                    </div>
                                </div>
                            </div>
                        </StyledAdd>
                        {
                            res.map(function (elem) {
                                if (elem._id === "1") {
                                    return null
                                }  else{
                                    return (
                                        <Render key = {elem._id} elem={elem} ter = {o}/>
                                    )
                                }
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default TodoRender;
