import { Container } from "react-bootstrap";
import styled from "styled-components";

export const Body__Mobile__Navbar = styled(Container)`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;

    top: 0;
    left: 0;
    right: 0;

    margin-top: 2rem;
    z-index: 99;

    .open .menu-container {
        display: flex;
        flex-direction: column;
    }
   
    ul{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;
        
        margin: 0;
        padding: 0;

        list-style: none;
        cursor: pointer;
    }

    li{
        opacity: 0.5;
        transition: opacity 0.3s ease-in-out;
    }
    .selected { opacity: 1; }
    li:hover{ opacity: 1; }
    
    .user-data{
        display: flex;
        align-items: center;
        justify-content: left;
        
        width: 100%;
        gap: 0.75rem;

        font-weight: 600;
        span{color: rgba(169, 163, 194, .4);}
    }
    .user-avatar{
        width: 3rem;
        height: 3rem;
        border-radius: .5rem;
    }

    .buttons-container{
        display: flex;
        justify-content: end;
        gap: 1rem;

        width:100%;
    }

    .menu-container {
        display: none;
    }

    .open .menu-container {
        position: absolute;
        display: flex;
        flex-direction: column;
        border: 2px solid rgba(169, 163, 194, 0.2);

        width: 20em;
        right: 0;
        top: 2.8em;

        padding: 1rem;
        border-radius: 1em;

        backdrop-filter: blur(16px);
        background: rgb(49,8,123);
        background: linear-gradient(
            90deg,
            rgba(49,8,123,0.1) 0%,
            rgba(49,8,123,0.1) 0%,
            rgba(49,8,123,0.04) 100%
        );

        transform-origin: top right;
        animation: OpenMenu 0.3s ease-in-out;
    }
    .burguer-container {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 0.6em;
    }
    .burguer-bar {
        border: 1px solid #A9A3C2;
        width: 32px;
        transition: transform 0.3s ease-in-out;
    }
    .burguer-container.open .burguer-bar:nth-child(1) {
        transform: rotate(45deg) translateX(8px) translateY(8px);
    }
    .burguer-container.open .burguer-bar:nth-child(2) {
        transform: scaleX(0);
    }
    .burguer-container.open .burguer-bar:nth-child(3) {
        transform: rotate(-45deg) translateX(8px) translateY(-8px);
    }

    @keyframes OpenMenu {
        0% {
            transform: scale(0.8);
            opacity: 0.1;
        }
        100% {
            transform: scale(1);
            opacity: 1;
        }
    }
    
    .language-button{
        padding: 0.2rem 0.6rem;
        border-radius: 14px;
        border: 1px solid #A9A3C2;

        opacity: 0.5;
        transition: opacity 0.3s ease-in-out;

        cursor: pointer;
    }
    .language-button:hover  { opacity: 1; }


`;