import styled from "styled-components";

import Data from "../../blocks/components/data/Data";
import Level15Graphic from "../../blocks/components/graphic/Level15graphic";

const Level15 = () => {
  return (
    <div>
      <Wrapper>
        {/* container with data */}
        <Data
          titleText=""
          definitionText=""
          exampleText="Use the order property to send the squirrel to the burrows in the order of yellow, blue, red and green."
          compareData="order:-1;"
          routePath="levelo"
          textAreaOne="none"
          ContainerTwo="block"
          classCss=".red"
          textAreaTwo="flex"
          lev="14"
        />
        {/* container with game */}
        <Level15Graphic />
      </Wrapper>
    </div>
  );
};

export default Level15;

const Wrapper = styled.div`
  min-height: 100vh;
  max-height: 100%;
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
