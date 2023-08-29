import { styled } from "styled-components";
import { devices } from "../../../js/Breakpoints";
import { Styled__Buttons } from "../../Button/button.style";
import { slideDownAnimation, slideUpAnimation } from "../../Animations/Animations";

export const Styled__MobileNavBar = styled.div`
    display: none;

    @media ${devices.lg}{
        display: block;
    }
`;

export const MobileNavBar__Button = styled(Styled__Buttons)`
    display: flex;
    float: right;
    
    margin: 1rem;
    padding: 1rem 1.25rem;
    
    border-radius: 50px;

    background: rgba( 255, 255, 255, 0.5 );
    box-shadow: 0 2px 32px 0 rgba( 31, 38, 135, 0.3 );
`;

export const MobileNavBar__Card = styled.div`
    position: absolute;
    right: 0;
    float: right;
    z-index: 999;

    margin: 0 1.5rem ;
    padding: 1rem 1rem;

    border-radius: 16px;

    background: rgba( 255, 255, 255, 0.5 );
    box-shadow: 0 2px 32px 0 rgba( 31, 38, 135, 0.3 );


    .show-card{
        display: block;
        animation: ${slideDownAnimation} 0.5s;
    }
    .hide-card{
        display: none;
        animation: ${slideUpAnimation} 0.5s;
    }
`;