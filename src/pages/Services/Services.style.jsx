import { styled } from "styled-components";
import { devices } from "../../js/Breakpoints";
import * as a from "../../components/Animations/Animations";

export const Body__Services = styled.div`
  display: flex;
  justify-content: center;

  margin: 6rem 4rem;

  font-size: 1.5rem;

  .cards {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .service-card:nth-child(1) {
    animation: ${a.slideUpAnimation} 1s ease-in-out;
  }
  .service-card:nth-child(2) {
    animation: ${a.slideUpAnimation} 1.5s ease-in-out;
  }

  .service-card:nth-child(3) {
    animation: ${a.slideUpAnimation} 2s ease-in-out;
  }

  .service-card {
    padding: 1rem;
    margin: 0;

    border-radius: 18px;
    border-right: 1px solid #9b9b9b6c;
    border-bottom: 1px solid #9b9b9b6c;

    background: #ffffff;
    background: linear-gradient(
      to top left,
      #ffffff6c 0%,
      #f3f9ffab 50%,
      #ffffff6c 100%
    );
    box-shadow: 0 2px 32px 0 rgba(31, 38, 135, 0.3);

    transition: transform 1s, background-color 0.5s, box-shadow 0.5s;

    &:hover {
      transform: scale(1.015);
      background-color: #eeeeee84;
      box-shadow: 0 2px 32px 0 #83ecfced;
    }
  }
  .container {
    padding: 0;
    margin: 0;
  }
  .service-banner {
    display: flex;
    justify-content: center;
    img {
      max-width: 100%;
      width: 20rem;
    }
  }
  p {
    margin: 0;
    padding: 0;
    text-align: center;
  }
  .title {
    text-align: center;
    border-bottom: 1px solid #25252548;
  }
  h1 {
    font-size: 2rem;
    font-weight: bold;
  }

  @media ${devices.lg} {
    .cards {
      padding: 0;
    }
    .col-3 {
      width: 30%;
    }
  }
  @media ${devices.md} {
    margin: 0;
    padding: 0;

    .cards {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .service-card {
      margin: 1rem 0;
      width: 80%;
    }
  }
  @media ${devices.xs} {
    .service-card {
      margin: 1rem 0;
      width: 90%;
    }
  }
`;
