import { Container } from "react-bootstrap";
import styled from "styled-components";

export const Body__Home = styled(Container)`
    .background_image{
        position: absolute;
        left: 0;
        width:100%;
        height: 100%;
        object-fit: cover;
        z-index: -1;

        opacity: 0.2;
    }

    .glow-sphere{
        position: absolute;
        width: 400px;
        height: 400px;
        border-radius: 50%;
        
        filter: blur(8rem);
        z-index: -1;
    }
    .glow-sphere:nth-child(1){
        right: 30%;
        top: 10%;

        background: rgb(250,47,181);
        background: radial-gradient(circle, rgba(250,47,181,0.3) 0%, rgba(250,47,181,0) 100%);
    }
    .glow-sphere:nth-child(2){
        right: 20%;

        background: rgb(49,8,123);
        background: radial-gradient(circle, rgba(49,8,123,0.6) 0%, rgba(49,8,123,0) 100%);
    }

    .home-thumbnail-container{
        position: relative;
        padding: 0.4rem;

        object-fit: cover;
        border-radius: 18px;
    }
    .home_thumbnail{
        width: 100%;
        height: 100%;
        border-radius: 14px;
    }

    .contents > :nth-child(1){ flex-grow: 1; }
    .contents > :nth-child(2){ flex-grow: 2; }


    /* Mobile */
    @media (max-width: 767px){
        display: flex;
        flex-direction: column;

        margin-top: 7.125em;

        .contents{  
            display: flex;
            flex-direction: column;
            gap: 2.25rem;
            margin-bottom: 2.25em;
        }
    }

    /* Tablets */
    @media (min-width: 768px) {
        margin-top: 14%;

        .contents{  
            display: flex;
            gap: 2.25rem;
            margin-bottom: 2.25em;
        } 
    }

    /* Desktops */
    /* @media (min-width: 992px) {
        body {
            font-size: 18px;
        }
    } */

    /* Large Desktops */
    /* @media (min-width: 1200px) {
        border: 2px solid green;
        body {
            font-size: 20px;
        }
    } */
`;