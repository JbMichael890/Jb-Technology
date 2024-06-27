import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Container>
      <Wrapper>
        <Logo>
          <span
            style={
              {
                color: "#ea4335",
              }
            }
          >
            Jb
          </span>
          <span style={{
           color: "#34A853"
          }}>Tech.</span>
        </Logo>
        <input type="search" placeholder="Enter Your search" />
       <Link to="/newpost">
       <button>New Post</button></Link>
       
      </Wrapper>
    </Container>
  );
};
export default Header;
const Container = styled.div`
  height: 50px;
  border-bottom: 1px solid lightgray;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  width: 95%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  input {
    height: 35px;
    width: 400px;
    outline: none;
    border: none;
    background-color: #f5f8fc;
    font-family: Montserrat;
    padding-left: 10px;
    border-radius: 10px;
    @media (max-width: 410px) {
      width: 100%;
      margin: 0px 10px;
    }
  }
  button {
    margin: 20px 0;
    height: 35px;
    outline: none;
    border: none;
    font-family: Montserrat;
    background-color: #94C9E1;
    font-weight: 600;
    cursor: pointer;
    transition: all 400ms;
    border-radius: 5px;

    @media (max-width: 410px) {
      width: 150px;
      font-size: 10.5px;
    }
    &:hover {
      transform: scale(0.97);
      transition: all 400ms;
    }
  }
`;
const Logo = styled.div`
  font-weight: 900;
`;
// const Link = styled.div``