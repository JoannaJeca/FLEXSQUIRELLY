import styled from "styled-components";
import { selector, useRecoilValue } from "recoil";
import { IconState } from "../../../util/state/Recoil";
import Iconify from "./Iconify";
import treehouse from "../../../assets/tree-removebg-preview.png";

const Graphic = () => {
  const JustifyState = selector({
    key: "charCountState", // unique ID (with respect to other atoms/selectors)
    get: ({ get }) => {
      const text = get(IconState);

      return text;
    },
  });

  const count = useRecoilValue(JustifyState);

  return (
    <div>
      <Wrapper text={count}>
        <Box></Box>
        <Iconify />
      </Wrapper>
    </div>
  );
};

export default Graphic;

const Box = styled.div`
  width: 100px;
  height: 90px;
  display: flex;
  justify-content: end;
  align-items: center;
  background-image: url(${treehouse});
  background-size: cover;
  background-position: left;
  /* background-color: #e08c6a; */
  border-radius: 20px;
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: -1;
`;

const Wrapper = styled.div<{ text: string }>`
  height: 100%;
  padding: 20px;
  display: flex;
  ${(props) => props.text};
  position: relative;
  z-index: 999;
  background-color: #fff;
  @media not all and (min-width: 890px) {
    height: 50vh;
  }
`;
