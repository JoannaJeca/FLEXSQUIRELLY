// import styled from "styled-components";
// import Icon from "./Icon";
// import { selector, useRecoilValue } from "recoil";
// import { IconState } from "../../../util/state/Recoil";
// import treehouse from "../../../assets/tree-removebg-preview.png";
// import Iconify from "./Iconify";

// const Graphic11 = () => {
//   const JustifyState = selector({
//     key: "charCountState", // unique ID (with respect to other atoms/selectors)
//     get: ({ get }) => {
//       const text = get(IconState);

//       return text;
//     },
//   });

//   const count = useRecoilValue(JustifyState);

//   return (
//     <div>
//       <Container>
//         <Wrapper text={count}>
//           <Div>
//             <Box></Box>
//             <Box></Box>
//           </Div>
//           {/* <IconHold> */}
//           <Icon />
//           <Icon />
//           {/* </IconHold> */}
//         </Wrapper>
//       </Container>
//     </div>
//   );
// };

// export default Graphic11;

// // const IconHold = styled.div`
// //   gap: 12px;
// //   display: flex;
// //   flex-direction: column;
// // `;

// const Div = styled.div`
//   position: absolute;
//   flex-direction: column;
//   justify-content: flex-end;
//   width: 100%;
//   height: 100%;
//   /* padding: 20px; */
//   z-index: -9;
//   display: flex;
//   gap: 12px;
// `;

// const Box = styled.div`
//   width: 80px;
//   height: 80px;
//   position: relative;
//   background-image: url(${treehouse});
//   background-size: cover;
//   background-position: left;
//   // gap: 12px;
//   z-index: -1;
// `;

// const Wrapper = styled.div<{ text: string }>`
//   height: 95%;
//   width: 95%;
//   display: flex;
//   gap: 30px;
//   ${(props) => props.text};
//   position: relative;
//   z-index: 999;
// `;

// const Container = styled.div`
//   width: 100%;
//   height: 100vh;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background-color: #fff;
//   @media not all and (min-width: 890px) {
//     height: 50vh;
//   }
// `;
