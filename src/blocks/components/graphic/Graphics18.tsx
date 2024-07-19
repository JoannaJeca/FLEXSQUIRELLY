import styled from "styled-components";
import { selector, useRecoilValue } from "recoil";
import { IconState } from "../../../util/state/Recoil";
import squirell from "../../../assets/squirell-removebg-preview.png";
import treehouse from "../../../assets/tree-removebg-preview.png";

const Graphics18 = () => {
  const numberoFBox = [1, 2, 3, 4, 5, 6, 7];

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
          <Icon key={e}></Icon>
        ))}
      </Column>
    </Container>
  );
};

export default Graphics18;
const Icon = styled.div`
  width: 17%;
  height: 18%;
  margin: 5px;
  background-image: url(${treehouse});
  background-size: cover;
  background-position: left;
`;
const Wrap = styled.div`
  width: 18%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 18%;
  margin: 3px;
`;

const Box = styled.div`
  width: 75px;
  height: 90px;
  margin-top: 30px;
  background-image: url(${squirell});
  background-size: cover;
  background-position: left;
  border-radius: 50px;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  display: flex;
  align-items: center;
  position: relative;

  @media not all and (min-width: 890px) {
    height: 50vh;
  }
`;
const Wrapper = styled.div<{ value: string }>`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 1em;
  ${(props) => props.value};
  position: absolute;
`;
const Column = styled.div`
  display: flex;
  width: 100%;
  flex-flow: wrap;
  height: 100%;
  /* padding: 1em; */
`;
