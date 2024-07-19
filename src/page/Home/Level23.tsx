import styled from "styled-components";
import Graphics23 from "../../blocks/components/graphic/Graphics23";
import Data from "../../blocks/components/data/Data";

const Level23 = () => {
  return (
    <div>
      <Wrapper>
        {/* container with data */}
        <Data
          titleText="The squirrels have had a party, but it is time to go home. Use a flex-direction to get them to their burrows."
          definitionText="
"
          exampleText=""
          compareData="flex-direction:column-reverse;"
          routePath="levels"
          lev="18"
          ContainerTwo="none"
        />
        {/* container with game */}
        <Graphics23 />
      </Wrapper>
    </div>
  );
};

export default Level23;

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
