import styled from "styled-components";
import Data from "../../blocks/components/data/Data";
import Level6Graphic from "../../blocks/components/graphic/Level6Graphics";
const Level6 = () => {
  return (
    <div>
      <Wrapper>
        {/* container with data */}
        <Data
          titleText="Lead the squirrel to the center of the forest using a combination of justify-content and align-items."
          definitionText=""
          exampleText=""
          routePath="levelg"
          compareData="align-items:center;justify-content:center;"
          ContainerTwo="none"
          lev="6"
        />
        {/* container with game */}
        <Level6Graphic />
      </Wrapper>
    </div>
  );
};

export default Level6;

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
