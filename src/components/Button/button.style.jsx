import { styled } from "styled-components";

export const Styled__Buttons = styled.button`
    padding: 0.65rem 0.5rem;
    margin: 2rem 4rem;
    margin-bottom: 0;

    font-weight: bold;

    border: none;
    border-radius: 8px;
    background-color: #00ff00;

    text-decoration: none;
    letter-spacing: 1px;

    overflow: hidden;

    transition: transform 0.5s, box-shadow 0.5s;
        
    &:hover{
        transform: scale(1.05);
        box-shadow: 0 2px 32px 0 rgba( 31, 38, 135, 0.3 );
    }
    &::before{
        content: '';
        position: absolute;
        top: 0;
        left: 0;

        background-color: #ffffff9c;

        transition: transform 0.5s;
        width: 30px;
        height: 120px;

        transform: rotate(45deg) translateX(-4.5rem) translateY(0);
    }
    &:hover::before{
        transform: rotate(45deg) translateX(13rem) translateY(-15rem);
    }
`;

export const Styled__Submit_Button = styled(Styled__Buttons)`
    padding: 0.3rem 2rem;
    background-color: #00bfff;
`;

export const Styled__Visit_Button = styled(Styled__Buttons)`
    margin: 0;
    padding: 0.3rem 2rem;

    font-size: 1.25rem;
    background-color: #00ff00;
`;
