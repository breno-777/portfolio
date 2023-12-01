import { styled } from "styled-components";

export const Body__WelcomeCard = styled.div`
  display: inline-block;
  white-space: nowrap;
  padding: 2rem;
  border-radius: 20px;

  background-color: #282c34;
  color: #8c929e;

  .top-bar {
    display: flex;
    margin-left: -1rem;

    div {
      width: 0.75rem;
      height: 0.75rem;

      margin: 0 0.5rem 1rem 0;
      border-radius: 50%;
    }
    .red-circle {
      background-color: #e74c3c;
    }
    .yellow-circle {
      background-color: #f1c40f;
    }
    .green-circle {
      background-color: #07bc0c;
    }
  }

  p {
    margin: 0;
    word-spacing: 5px;
    letter-spacing: 1px;
    font-weight: 600;
    white-space: nowrap;
    overflow: hidden;
  }

  .code-message p:nth-child(1) {
    width: 100%;
    animation: type 3s steps(80, end);
  }
  .code-message p:nth-child(2) {
    width: 100%;
    opacity: 0;
    animation: type2 3s steps(80, end);
    animation-delay: 0.9s;
    animation-fill-mode: forwards;
  }
  .code-message p:nth-child(3) {
    width: 100%;
    opacity: 0;
    animation: type2 3s steps(80, end);
    animation-delay: 2.25s;
    animation-fill-mode: forwards;
  }
  .code-message p:nth-child(4) {
    width: 100%;
    opacity: 0;
    animation: type2 3s steps(80, end);
    animation-delay: 3.5s;
    animation-fill-mode: forwards;
  }
  .code-message p:nth-child(5) {
    width: 100%;
    opacity: 0;
    animation: type2 3s steps(80, end);
    animation-delay: 4.75s;
    animation-fill-mode: forwards;
  }
  .code-message p:nth-child(6) {
    width: 100%;
    opacity: 0;
    animation: type2 1.5s steps(80, end);
    animation-delay: 6.15s;
    animation-fill-mode: forwards;
  }
  .code-message p:nth-child(7) {
    width: 100%;
    opacity: 0;
    animation: type2 1s steps(80, end);
    animation-delay: 6.25s;
    animation-fill-mode: forwards;
  }
  .code-message p:nth-child(8) {
    width: 100%;
    opacity: 0;
    animation: type2 3s steps(80, end);
    animation-delay: 6.5s;
    animation-fill-mode: forwards;
  }
  .code-message p:nth-child(9) {
    width: 100%;
    opacity: 0;
    animation: type2 3s steps(80, end);
    animation-delay: 9s;
    animation-fill-mode: forwards;
  }
  .code-message p:nth-child(10) {
    width: 100%;
    opacity: 0;
    animation: type2 3s steps(80, end);
    animation-delay: 10.5s;
    animation-fill-mode: forwards;
  }

  .code-message p:nth-child(1) span:nth-child(1),
  p:nth-child(2) span:nth-child(1),
  p:nth-child(3) span:nth-child(1),
  p:nth-child(4) span:nth-child(1),
  p:nth-child(5) span:nth-child(1),
  p:nth-child(6) span:nth-child(1),
  p:nth-child(7) span:nth-child(1),
  p:nth-child(8) span:nth-child(1),
  p:nth-child(9) span:nth-child(1),
  p:nth-child(10) span:nth-child(1) {
    color: #595a5b;
    margin-right: 1.5rem;
  }
  p:nth-child(10) span:nth-child(1) {
    margin-right: 0.925rem;
  }
  .code-message p:nth-child(1) span:nth-child(2) {
    color: #b46fca;
  }
  .code-message p:nth-child(2),
  p:nth-child(3),
  p:nth-child(4),
  p:nth-child(5) {
    color: #8db572;
  }
  .code-message p:nth-child(8) span:nth-child(2) {
    color: #b46fca;
  }
  .code-message p:nth-child(8) span:nth-child(4),
  span:nth-child(6) {
    color: #cfb45b;
  }
  .code-message p:nth-child(8) span:nth-child(5),
  span:nth-child(7) {
    color: #5da7e4;
  }
  .code-message p:nth-child(9) span:nth-child(2) {
    color: #b46fca;
  }
  .code-message p:nth-child(10) span:nth-child(2) {
    color: #e0bc79;
  }
  .code-message p:nth-child(10) span:nth-child(3) {
    color: #5da7e4;
  }

  @keyframes type {
    0% {
      width: 0;
    }
    99% {
    }
  }

  @keyframes type2 {
    0% {
      width: 0;
    }
    1% {
      opacity: 1;
    }
    100% {
      opacity: 1;
      border: none;
    }
  }

  @keyframes type3 {
    0% {
      width: 0;
    }
    1% {
      opacity: 1;
    }
    100% {
      opacity: 1;
    }
  }
`;
