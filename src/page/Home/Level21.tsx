// import styled from "styled-components";
// import Graphics21 from "../../blocks/components/graphic/Graphics21";
// import Data from "../../blocks/components/data/Data";

// const Level21 = () => {
//   return (
//     <div>
//       <Wrapper>
//         {/* container with data */}
//         <Data
//           titleText="The squirrels are spread all over the forest, but the burrows are bunched at the top. You can use align-content to set how multiple lines are spaced apart from each other. This property takes the following values:"
//           definitionText="flex-start: Lines are packed at the top of the container.
// flex-end: Lines are packed at the bottom of the container.
// center: Lines are packed at the vertical center of the container.
// space-between: Lines display with equal spacing between them.
// space-around: Lines display with equal spacing around them.
// stretch: Lines are stretched to fit the container.
// "
//           exampleText="This can be confusing, but align-content determines the spacing between lines, while align-items determines how the items as a whole are aligned within the container. When there is only one line, align-content has no effect."
//           compareData="align-content:flex-start;"
//           routePath="level22"
//           lev="21"
//           ContainerTwo="none"
//         />
//         {/* container with game */}
//         <Graphics21 />
//       </Wrapper>
//     </div>
//   );
// };

// export default Level21;

// const Wrapper = styled.div`
//   height: 100vh;
//   width: 100%;
//   display: grid;
//   grid-template-columns: repeat(2, minmax(0, 1fr));

//   @media not all and (min-width: 890px) {
//     grid-template-columns: repeat(1, minmax(0, 1fr));
//     & > :nth-child(1) {
//       order: 2;
//     }
//     & > :nth-child(2) {
//       order: 1;
//     }
//     height: 100%;
//   }
// `;
