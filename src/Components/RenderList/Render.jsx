import React, {useState} from 'react';
import StyledRender from "../RenderList/StyledRender.styled";
import axios from "axios";
function Render({elem, ter}) {

    async function remove(){
        const id = elem._id;
        let delRes = await axios.post('http://localhost:9999', {id, body: "delete"})
        return delRes
    }
    async function gg(){
        await ter(remove);
    }
    return (
        <>
            <StyledRender>
                <div className="wrapper" >
                    <div className="main">
                        <div className="info">
                            <h1>{elem.title}</h1>
                            <h2>{elem.description}</h2>
                            <h2>{elem.deadline}</h2>
                        </div>
                        <div className="btn">
                            <button id={elem._id} onClick={gg}>Delete</button>
                        </div>
                    </div>
                </div>
            </StyledRender>
        </>
    );
}

export default Render;