/* eslint-disable @typescript-eslint/no-explicit-any */
import { useDispatch } from "react-redux";
import squirell from "../../assets/squirell-removebg-preview.png";
import styled from "styled-components";
import { useState } from "react";
import { setUserName } from "../../util/state/ReduxState";
import { useNavigate } from "react-router-dom";

const WelcomePage = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (event: any) => {
    setName(event.target.value);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    dispatch(setUserName(name));
    navigate("/levela");
  };
  return (
    <Container>
      <Wrapper jc="flex-start">
        <img src={squirell} style={{ marginLeft: "40px" }} />
      </Wrapper>
      <MidPart>
        <Welcome>WELCOME TO FLEXSQUIRELLY</Welcome>
        <Text>
          Help the squirrels go back to their burrows. But first input your name
          to go!!!
        </Text>
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            value={name}
            onChange={handleChange}
            placeholder="Your name please"
          />
          <Button type="submit">GO</Button>
        </Form>
      </MidPart>
      <Wrapper jc="flex-end">
        <img src={squirell} style={{ marginRight: "40px" }} />
      </Wrapper>
    </Container>
  );
};

export default WelcomePage;
const Button = styled.button`
  width: 20px;
  height: 30px;
  // padding-left: 5px;
  // padding: 15px;

  // background-color: green;
  color: green;
  // text-decoration: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  border: 1px solid black;
  margin-top: 24px;
  width: 40%;
  border-radius: 20px;
  height: 40px;
  padding-right: 5px;
  @media (min-width: 360px) {
    width: 55%;
  }
  @media (min-width: 720px) {
    width: 30%;
  }
  @media (min-width: 1024px) {
    width: 28%;
  }
`;

const Input = styled.input`
  border: 0px solid black;
  outline: 0px solid black;
  height: 90%;
  flex: 1;
  // padding-left: 5px;
  border-radius: 20px;
  text-align: center;
  ::placeholder {
    color: black;
  }
  @media (min-width: 360px) {
    width: 55%;
    // background-color: red;
  }
  @media (min-width: 720px) {
    width: 20%;
    // background-color: red;
  }
`;

const Text = styled.div`
  color: brown;
  font-weight: semibold;
  width: 80%;
  // background-color: red;
  text-align: center;
  margin-top: 10px;
  @media (min-width: 1024px) {
    width: 5%;
    // background-color: red;
  }
  @media (min-width: 720px) {
    width: 50%;
    // background-color: red;
  }
`;

const Welcome = styled.div`
  font-size: 48px;
  color: brown;
  font-weight: bold;
  font-family: Poppins;
  text-align: center;
  @media (min-width: 360px) {
    width: 100%;
    font-size: 35px;
  }
`;

const MidPart = styled.div`
  width: 100vw;
  height: 70%;
  background-color: white;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const Wrapper = styled.div<{ jc: string }>`
  width: 100vw;
  height: 15%;
  // background-color: gray;
  display: flex;
  justify-content: ${(props) => props.jc};
`;

const Container = styled.div`
  width: 100vw;
  background-color: white;
  height: 100vh;
`;
