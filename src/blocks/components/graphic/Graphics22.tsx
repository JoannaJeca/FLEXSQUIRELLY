import styled from "styled-components";
import { selector, useRecoilValue } from "recoil";
import { IconState } from "../../../util/state/Recoil";
import treehouse from "../../../assets/tree-removebg-preview.png";
import squirell from "../../../assets/squirell-removebg-preview.png";

const Graphics22 = () => {
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
            <Box>
              <img src={squirell} width="100%" />
            </Box>
          </Wrap>
        ))}
      </Wrapper>
      <Column>
        {numberoFBox.map((e) => (
          <Icon key={e}></Icon>
        ))}
      </Column>
    </Container>
  );
};

export default Graphics22;
const Icon = styled.div`
  width: 18%;
  height: 17%;
  margin: 5px;
  // background-color: blue;
  background-image: url(${treehouse});
  background-position: center;
  background-size: cover;
`;
const Wrap = styled.div`
  width: 18%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 18%;
  margin: 3px;
  flex-wrap: wrap;
  // background-color: purple;
`;

const Box = styled.div`
  width: 75px;
  height: 75px;
  margin-left: 25px;
  // background-color: red;
  border-radius: 50px;
  background-image: url(${squirell});
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
  align-content: flex-end;
  height: 100%;
  flex-wrap: wrap;
  padding: 1em;
`;
