import { styled } from "styled-components";
// import { devices } from './js/Breakpoints';
import * as a from '../../components/Animations/Animations';

export const Body__Scroll = styled.div`
    animation:  ${a.slideUpAnimation} 0.5s ease-in-out;
    display: flex;
    justify-content: center;
    align-items: center;
    
    padding: 2rem 0;
    gap: 0.25rem;
    
    color: #EEEEEE;
    font-size: 1.05rem;
    
    img{
        max-width: 100%;
        width: 1.5rem;
        height: 1.5rem;
        filter: brightness(14);
    }
`;