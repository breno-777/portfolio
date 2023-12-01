import { styled } from "styled-components";
import { devices } from "../../js/Breakpoints";

export const Body__ProfileCard = styled.div`
  margin: 0;
  padding: 0;

  height: 100%;
  width: 30%;

  border-radius: 16px;
  font-size: 1.5rem;

  color: #eeeeee;
  background-color: #222831;
  box-shadow: 0 2px 32px 0 rgba(31, 38, 135, 0.3);

  .title {
    text-align: center;
    color: gray;
    font-size: 1.25rem;
  }
  .profile_avatar img {
    margin-bottom: 1rem;
    width: 100%;
    border-radius: 50%;
  }
  .profile_contents {
    p,
    h2 {
      margin: 0;
    }
    .profile_bio {
      color: gray;
    }
  }
  .visit-button {
    margin: 0;
    padding: 1rem 0;
  }

  @media ${devices.lg} {
    margin-bottom: 2rem;
    width: 70%;
  }
  @media ${devices.md} {
    font-size: 1rem;
    h2 {
      font-size: 1.5rem;
    }
    .profile_avatar {
      width: 50%;
    }
  }
  @media ${devices.sm} {
    width: 100%;
    .profile_avatar {
      width: 100%;
    }
    .profile_contents {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
`;
