import styled from "styled-components";

export const Body__Contact = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;

    .glow-sphere{
        position: absolute;
        width: 400px;
        height: 400px;
        border-radius: 50%;
        
        filter: blur(8rem);
        z-index: -1;
    }
    .glow-sphere:nth-child(1){
        left: -10%;
        top: -20%;

        background: rgb(250,47,181);
        background: radial-gradient(circle, rgba(250,47,181,0.3) 0%, rgba(250,47,181,0) 100%);
    }

    .glow-sphere:nth-child(2){
        left: -20%;
        top: -10%;

        background: rgb(49,8,123);
        background: radial-gradient(circle, rgba(49,8,123,0.6) 0%, rgba(49,8,123,0) 100%);
    }

    .header {
        display: flex;
        flex-direction: column;
        
        justify-content: center;
        align-items: center;
        text-align: center;

        margin-bottom: 2.5rem;
        max-width: 36em;
        font-weight: 600;
    }

    .header-icon-container{
        display: flex;
        padding: 0.875rem;
        border-radius: 8px;

        background: rgb(169,163,194);
        background: linear-gradient(145deg, rgba(169,163,194,1) 0%, rgba(239,62,183,1) 50%, rgba(255,194,60,1) 100%);
    }
    .header-title{
        font-size: 1.625rem;
        margin: 0.875rem 0;
    }
    .header-description{
        color: #A9A3C2;
        opacity: 0.4;
    }

    .other-social-container{
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;