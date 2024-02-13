import styled from "styled-components";

const StyledAdd = styled.div`

  .wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    .main { 
      h1 {
        color: white;
        text-align: center;
        text-transform: uppercase;
        word-spacing: 10px;
        font-size: 25px;
        font-family: 'Rubik', sans-serif;
        font-weight: 300;
      }

      input {
        border-inline: none;
        border-radius: 4px;
        width: 250px;
        height: 30px;
        color: white;
        margin-right: 15px;
        transform: translateX(7px);
        //margin-left: 10px;
        font-family: 'Roboto', sans-serif;
        font-weight: 300;
        border: 2px solid rgba(255, 165, 0, 0.4);
        font-size: 20px;
        padding-left: 10px;
        padding-right: 10px;
        background: rgba(67, 67, 67, 0.34);
      }

      input::placeholder {
        font-family: 'Rubik', sans-serif;
        font-weight: 200;
        font-size: 20px;
      }

      input:focus {
      !important;
        outline: none;
        border: 2px solid rgba(255, 165, 0, 1);
      }
      .btn{
        display: flex;
        justify-content: center;
        margin-top: 10px;
        button {
          width: 100px;
          height: 30px;
          border-radius: 4px;
          background: rgba(67, 67, 67, 0.34);
          color: white;
          //margin: 0;
          padding: 0;
          text-transform: uppercase;
          font-family: 'Rubik', sans-serif;
          border: 1px solid rgba(255, 165, 0, 1);
        }
      }
    }
  }


`
export default StyledAdd;