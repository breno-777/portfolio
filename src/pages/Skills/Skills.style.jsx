import styled from "styled-components";
import { devices } from "../../js/Breakpoints";
import * as a from "../../components/Animations/Animations";

export const Body__Skills = styled.div`
  animation: ${a.slideUpAnimation} 1s ease-in-out;

  display: flex;
  justify-content: center;

  margin: 6rem 4rem;
  font-size: 1.5rem;

  .container {
    margin: 0;
    padding: 0;
  }
  .background {
    margin: 0;
    padding: 0;
    border-radius: 18px;

    background: #ffffff;
    background: linear-gradient(
      to top left,
      #ffffff6c 0%,
      #f3f9ffab 50%,
      #ffffff6c 100%
    );
    box-shadow: 0 2px 32px 0 rgba(31, 38, 135, 0.3);

    overflow: hidden;
  }
  .col-10 {
    padding: 2rem;
  }
  .col-2 {
    padding: 0 3rem;
    /* display: flex;
        flex-direction: column; */
    background: linear-gradient(
      to top left,
      #f3f9ffab 0%,
      #f3f9ffab 50%,
      #ffffff6c 100%
    );
    border-radius: 0 18px 18px 0;
    box-shadow: 0 2px 12px 0 rgba(31, 38, 135, 0.3);
  }
  h2 {
    margin: 1rem 0 0;
  }
  hr {
    margin: 0 0 1rem;
  }
  strong {
    font-weight: normal;
  }

  @media ${devices.xl} {
    /* .row{
            margin: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            .card{
                display: flex;
                flex-direction: column;
                align-items: center;
            }
            .col-6{
            width: 100%;
            }
        } */
  }
  @media ${devices.lg} {
    .row {
      .col-2 {
        display: none;
      }
      .col-10 {
        width: 100%;
      }
    }
  }
  @media ${devices.sm} {
    margin: 0;
    padding: 0;

    font-size: 1.15rem;
    .row {
      h2 {
        font-size: 1.75rem;
      }
    }
  }
`;
