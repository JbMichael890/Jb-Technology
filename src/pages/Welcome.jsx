import styled from "styled-components";
import backgroungImg from "../assets/pexels-photo-572056.webp";
import { useState } from "react";
import { Link } from "react-router-dom";

const Welcome = () => {
  const [myName, setMyName] = useState("");
  const [toggle, setToggle] = useState(false);

  //   const handleOnChange = (e) => {
  //     setMyName(e.target.value);
  //   };

  const handleClick = () => {
    setToggle(!toggle);
  };
  return (
    <Container>
      <Wrapper>
        <h1 style={{
          color: "#77740A",
        }}>
          Welcome to <br /> Jb Technology
        </h1>
        {toggle ? null : (
          <InputDiv>
            <label> Please Enter your name</label>
            <input
              type="text"
              placeholder="Enter your name"
              value={myName}
              // onChange={handleOnChange}
              onChange={(e) => {
                setMyName(e.target.value);
              }}
            />
            <button onClick={handleClick}>Submmit</button>
          </InputDiv>
        )}

        {toggle ? (
          <PreviewDiv>
            <h2>Hi {myName}</h2>
            <button onClick={handleClick}>Go Back</button>
            <Link to="/home">
              <button style={{ backgroundColor: "#34A853",
                borderRadius: "10px",

               }}>
                Continue to Home Page
              </button>
            </Link>
          </PreviewDiv>
        ) : null}
      </Wrapper>
  
    </Container>
  );
};
export default Welcome;
const Container = styled.div`
  /* min-height: 100vh; */

  background-color: aquamarine;
  background-image: url(${backgroungImg});
  background-position: center;
  background-size: cover;


  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  /* color: b; */
min-height: 100vh;
  display: flex;
  flex-direction: column;
  /* background-color: rgba(0,0,0,0.4); */
  justify-content: center;
  align-items: center;
  h1 {
    /* margin: 0px; */
    font-weight: 900;
    text-align: center;
  }
  label {
    font-weight: 700;
  }
`;
const InputDiv = styled.div`
display: flex;
  flex-direction: column;

  label {
    font-size: 14px;
    font-weight: 700;
  }
  input {
    height: 40px;
    width: 350px;
    outline: none;
    border: none;
    font-family: Montserrat;
    padding-left: 10px;
    font-weight: 600;

    @media (max-width: 350px) {
      width: 300px;
    }
  }
  button {
    margin: 20px 0;
    height: 35px;
    border: none;
    outline: none;
    font-family: Montserrat;
    background-color: #4285f4;
    color: #fff;
    font-weight: 800;
    cursor: pointer;
    transition: all 400ms;

    &:hover {
      transform: scale(0.97);
      transition: all 400ms;
    }
  }
    `;

const PreviewDiv = styled.div`

text-align: center;
  h2 {
    color: #fbbc05;
    font-weight: 800;
    font-size: 35px;
    margin: 0px;
  }

  button {
    margin: 10px 20px;
    height: 40px;
    border: none;
    outline: none;
    font-family: Montserrat;
    background-color: #ea4335;
    color: #fff;
    font-weight: 800;
    border-radius: 12px;
    cursor: pointer;
    transition: all 400ms;

    &:hover {
      transform: scale(0.97);
      transition: all 400ms;
    }
  }

`;
