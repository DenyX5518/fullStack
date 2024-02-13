import {createContext, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StyledApp from "./StyledApp.styled";
import TodoRender from "./Components/RenderList/TodoRender";
import Render from "./Components/RenderList/Render";

function App() {


  return (
    <>
      {/*<StyledApp>*/}
      {/*  <div className="wrapper">*/}
      {/*      <div className="nav">*/}
      {/*          <a href="">Home</a>*/}
      {/*          <a href="">Settings</a>*/}
      {/*          <a href="">About</a>*/}
      {/*          <a href="">Profile</a>*/}
      {/*      </div>*/}
      {/*  </div>*/}
      {/*</StyledApp>*/}
        <TodoRender/>
    </>
  )
}

export default App;
