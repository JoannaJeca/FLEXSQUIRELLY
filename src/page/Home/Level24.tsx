import styled from "styled-components";
import Graphics24 from "../../blocks/components/graphic/Graphics24";
import Data from "../../blocks/components/data/Data";

const Level24 = () => {
  return (
    <div>
      <Wrapper>
        {/* container with data */}
        <Data
          titleText="THIS IS THE END!! Bring the squirrels home one last time by using the CSS properties you've learned:"
          definitionText="justify-content
align-items
flex-direction
order
align-self
flex-wrap
flex-flow
align-content
"
          exampleText=""
          compareData="flex-flow:column-reverse wrap-reverse;
    justify-content:center;
    align-content:space-between;"
          routePath="levelt"
          lev="19"
          ContainerTwo="none"
        />
        {/* container with game */}
        <Graphics24 />
      </Wrapper>
    </div>
  );
};

export default Level24;

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));

  @media not all and (min-width: 890px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
    & > :nth-child(1) {
      order: 2;
    }
    & > :nth-child(2) {
      order: 1;
    }
    height: 100%;
  }
`;
