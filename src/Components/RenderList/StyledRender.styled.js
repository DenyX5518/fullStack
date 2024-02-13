import styled from "styled-components";

const StyledRender = styled.div`
  .wrapper {
    border: 1px solid white;
    border-radius: 10px;
    width: 40%;
    margin: 50px auto auto auto;

    .main {
      display: grid;
      grid-template-rows: 1fr;
      grid-template-columns: 3fr 1fr;

      .info {
        margin: 0 auto;
        h1 {
          font-family: 'Roboto', sans-serif;
          font-weight: 400;
          color: orange;
          text-align: center;
        }

        h2 {
          font-family: 'Roboto', sans-serif;
          font-weight: 200;
          color: white;
          text-align: center;
        }
      }

      .btn {
        display: flex;
        justify-content: center;
        align-items: center;

        button {
          border: 2px solid rgba(255, 165, 0, 0.62);
          background: rgba(147, 147, 147, 0.05);
          border-radius: 3px;
          width: 100px;
          margin: 0 auto;
          text-transform: uppercase;
          //box-shadow: black 5px 5px 10px;
          font-family: 'Roboto', sans-serif;
          font-weight: 300;
          font-size: 16px;
          height: 40px;
          color: white;
          outline: none;
        }

        button:hover {
          border: 2px solid rgba(255, 165, 0, 1);
        }
      }
    }
  }


`
export default StyledRender;