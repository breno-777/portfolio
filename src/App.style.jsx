import styled from "styled-components";
import { devices } from "./js/Breakpoints";

export const Body__App = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  margin: 2rem;

  overflow: hidden;
  overflow-y: auto;

  background: rgba(255, 255, 255, 0.35);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  border-radius: 32px;
  border: 1px solid #eeeeee85;
  border-bottom: #11212b;
  border-right: #11212b;

  @media ${devices.md} {
    margin: 0.5rem;
  }
`;
