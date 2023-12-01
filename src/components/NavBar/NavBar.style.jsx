import { styled } from "styled-components";
import { devices } from "../../js/Breakpoints";
import * as a from "../../components/Animations/Animations";

export const Body__NavBar = styled.div`
  animation: ${a.slideDownAnimation} 0.5s ease-in-out;
  left: 0;
  right: 0;

  padding: 1rem;
  margin: 1rem 30%;

  text-align: center;
  border-radius: 32px;

  font-size: 1.25rem;
  font-weight: 550;

  background: #ffffff;
  background: linear-gradient(
    to top left,
    #f3f9ffab 0%,
    #f3f9ffab 50%,
    #ffffff6c 100%
  );

  box-shadow: 0 2px 32px 0 rgba(31, 38, 135, 0.3);
  /* background: rgba( 255, 255, 255, 0.5 ); */
  /* backdrop-filter: blur( 15px );
    -webkit-backdrop-filter: blur( 15px ); */

  /* overflow: hidden; */

  @media ${devices.lg} {
    display: none;
  }

  /* effect-shine */
  div.effect-shine:hover {
    -webkit-mask-image: linear-gradient(
      -75deg,
      rgba(0, 0, 0, 0.6) 30%,
      #000 50%,
      rgba(0, 0, 0, 0.6) 70%
    );
    -webkit-mask-size: 200%;
    animation: shine 2s infinite;
  }
  @keyframes shine {
    from {
      -webkit-mask-position: 150%;
    }
    to {
      -webkit-mask-position: -50%;
    }
  }
`;
