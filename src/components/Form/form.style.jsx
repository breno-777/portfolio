import { styled } from "styled-components";

export const Body__Form = styled.div`
  .background {
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
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 2rem;
    margin: 0;

    font-size: 1.25rem;

    input:nth-child(1) {
      margin-top: 0;
    }
    input,
    textarea {
      margin-top: 1rem;
      padding: 0.5rem 1rem;
      width: 100%;

      border: 1px solid gray;
      border-radius: 8px;
      transition: border 0.5s;

      resize: none;
      outline: none;

      &:hover,
      &:focus {
        border: 1px solid #83ecfced;
      }
    }
  }
`;
