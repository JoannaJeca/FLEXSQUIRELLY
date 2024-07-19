import styled from "styled-components";
import Graphics18 from "../../blocks/components/graphic/Graphics18";
import Data from "../../blocks/components/data/Data";

const Level18 = () => {
  return (
    <div>
      <Wrapper>
        {/* container with data */}
        <Data
          titleText="Oh no! The squirrels are all squeezed onto a single row of burrows. Spread them out using the flex-wrap property, which accepts the following values:"
          definitionText="
          nowrap: Every item is fit to a single line.

wrap: Items wrap around to additional lines.
wrap-reverse: Items wrap around to additional lines in reverse.

"
          exampleText="For example, flex-wrap:  will wrap the elements to a new row"
          compareData="flex-wrap:wrap;"
          routePath="levelq"
          lev="16"
          ContainerTwo="none"
        />
        {/* container with game */}
        <Graphics18 />
      </Wrapper>
    </div>
  );
};

export default Level18;

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
