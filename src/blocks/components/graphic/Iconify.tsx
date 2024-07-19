import styled, { keyframes } from "styled-components";
import squirell from "../../../assets/squirell-removebg-preview.png";

type Cols = {
  bgCol?: string;
};

const Iconify: React.FC<Cols> = ({ bgCol }) => {
  return (
    <div>
      {/* <Main bgCol={bgCol}>
        <p>Eniola</p>
      </Main> */}
      <Hold>
        <img
          src={squirell}
          alt=""
          height="80px"
          width="80px"
          style={{ objectFit: "contain" }}
        />
      </Hold>
    </div>
  );
};

export default Iconify;

const pulseAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;

const Hold = styled.div`
  animation-name: ${pulseAnimation};
  animation-duration: 2s;
  animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  animation-iteration-count: infinite;
`;

// const Main = styled.div<{ bgCol?: string }>`
//   width: 60px;
//   height: 60px;
//   background-color: ${({ bgCol }) => bgCol};
//   border-radius: 999px;
//   top: 0;
//   --tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
//   --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color),
//     0 2px 4px -2px var(--tw-shadow-color);
//   box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
//     var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
//   display: flex;
//   justify-content: center;
//   align-items: center;

//   p {
//     animation-name: ${pulseAnimation};
//     animation-duration: 2s;
//     animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
//     animation-iteration-count: infinite;
//   }
// `;
