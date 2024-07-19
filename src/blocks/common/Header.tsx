import styled from "styled-components";
import { inputData } from "../../util/types";
import { useSelector } from "react-redux";

const Header: React.FC<inputData> = ({ lev }) => {
  const name = useSelector((state: any) => state?.name);
  return (
    <div>
      <Wrapper>
        {/* logo*/}
        <Logo>Flexbox Mastery</Logo>
        <div>{name && <h3>Hey {name}!</h3>}</div>

        {/* level display */}
        <Levels>Level {lev}</Levels>
      </Wrapper>
    </div>
  );
};

export default Header;

const Levels = styled.div`
  padding: 5px 20px;
  background-color: #ffffff58;
`;
const Logo = styled.h2`
  margin: 0;
`;

const Wrapper = styled.div`
  height: 10vh;
  max-width: 100%;
  min-width: 45vw;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media not all and (min-width: 890px) {
    padding: 10px 0 10px 0;
    flex-direction: column;
    gap: 5px;
  }
`;
