import styled from "styled-components";
import { selector, useRecoilValue } from "recoil";
import { IconState } from "../../../util/state/Recoil";
import treehouse from "../../../assets/tree-removebg-preview.png";
import squirell from "../../../assets/squirell-removebg-preview.png";

const Graphics21 = () => {
  const numberoFBox = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  const JustifyState = selector({
    key: "charCountState", // unique ID (with respect to other atoms/selectors)
    get: ({ get }) => {
      const text = get(IconState);

      return text;
    },
  });

  const count = useRecoilValue(JustifyState);

  return (
    <Container>
      <Wrapper value={count}>
        {numberoFBox.map((e) => (
          <Wrap key={e}>
            <Box></Box>
          </Wrap>
        ))}
      </Wrapper>
      <Column>
        {numberoFBox.map((e) => (
          <Icon key={e}>
            <img src={treehouse} width="100%" />
          </Icon>
        ))}
      </Column>
    </Container>
  );
};

export default Graphics21;
const Icon = styled.div`
  width: 18%;
  height: 17%;
  margin: 5px;
  // background-color: blue;
  // background-image: url(${treehouse});
  backgroud-size: fit;
  background-position: center;
`;
const Wrap = styled.div`
  width: 18%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 18%;
  margin: 3px;
  flex-wrap: wrap;
`;

const Box = styled.div`
  width: 70px;
  height: 70px;
  margin: 2px;
  // background-color: red;
  background-image: url(${squirell});
  background-size: cover;
  margin-left: 50px;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  position: relative;
`;
const Wrapper = styled.div<{ value: string }>`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 1em;
  ${(props) => props.value};
  position: absolute;
  flex-wrap: wrap;
`;
const Column = styled.div`
  display: flex;
  width: 100%;
  align-content: flex-start;
  height: 100%;
  // border-radius: 70px;
  flex-wrap: wrap;
  padding: 1em;
`;
