import { styled } from "styled-components";
import { devices } from "../../js/Breakpoints";

export const Body__Contact = styled.div`
  margin: 6rem 4rem;

  .container-fluid {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;

    @media ${devices.lg} {
      display: flex;
      flex-direction: column;
    }
  }
`;
