import styled from "styled-components";
import Data from "../../blocks/components/data/Data";
import Level4Graphic from "../../blocks/components/graphic/Level4Graphic";

const Level4 = () => {
  return (
    <div>
      <Wrapper>
        {/* container with data */}
        <Data
          titleText=""
          definitionText=""
          exampleText="Now the burrows on the edges have drifted to the forest, increasing the space between them. Use justify-content. This time, the burrows have equal spacing between them."
          compareData="justify-content:space-between;"
          routePath="levele"
          ContainerTwo="none"
          lev="4"
        />
        {/* container with game */}
        <Level4Graphic />
      </Wrapper>
    </div>
  );
};

export default Level4;

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
