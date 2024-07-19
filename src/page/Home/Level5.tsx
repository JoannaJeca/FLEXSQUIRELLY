import styled from "styled-components";
import Data from "../../blocks/components/data/Data";
import Level5Graphic from "../../blocks/components/graphic/Level5Graphic";
const Level5 = () => {
  return (
    <div>
      <Wrapper>
        {/* container with data */}
        <Data
          titleText="Now use align-items to help the squirrels get to the bottom of the forest. This CSS property aligns items vertically and accepts the following values:"
          definitionText="flex-start: Items align to the left side of the container.
     
          flex-start: Items align to the top of the container.
          Items align at the center of the container.  space-between:
          center: Items align at the vertical center of the container.  baseline: Items display at the baseline of the container.
          flex-end: Items align to the bottom of the container.
"
          exampleText=""
          routePath="levelf"
          compareData="align-items:flex-end;"
          ContainerTwo="none"
          lev="5"
        />
        {/* container with game */}
        <Level5Graphic />
      </Wrapper>
    </div>
  );
};

export default Level5;

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
