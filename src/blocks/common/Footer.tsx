import styled from "styled-components";

const Footer = () => {
  return (
    <div>
      <Wrapper>
        Flexbox Mastery is created by set08 for CodeLab Set10
        <p> GitHub • Twitter • LinkedIN</p>
      </Wrapper>
    </div>
  );
};

export default Footer;

const Wrapper = styled.div`
  width: 100%;
  padding: 15px 0 15px 0;
  display: flex;
  height: 100px;
  // background-color: Red;
  margin-top: 18px;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  font-size: 14px;

  p {
    margin: 0;
  }
`;
