import styled from "styled-components";

export const Body__Skills = styled.div`
    position: relative;
    overflow: hidden;

    display: flex;
    flex-direction: column;
    align-items: center;

    .grid_image{
        object-fit: cover;
        z-index: -1;
        position: absolute;
        content: "";

        height: 100%;
        width: 100%;
        opacity: 0.04;
        
        mask-image: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 50%);
        -webkit-mask-image: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 50%); 
    }

    .header {
        position: relative;
        display: flex;
        flex-direction: column;
        
        justify-content: center;
        text-align: center;

        max-width: 36em;
        font-weight: 600;
    }
    .header-background{
        position: absolute;
        top: 0;
        width: 100%;

        z-index: -1;
    }
    .header-title{
        font-size: 1.625rem;
        margin: 0.875rem 0;
    }
    .header-description{
        color: #A9A3C2;
        opacity: 0.4;
    }

    .skills-list{
        display: grid;
        grid-template-areas: "▢ ▢ ▢";
        grid-auto-rows: auto;

        gap: 3rem;
        margin-top: 1.5rem;
    }

    .path-line-container{
        display: flex;
        justify-content: space-around;
        
        width: 70%;
        min-height: 200px;
    }
    .path-line:nth-child(1){
        flex-grow: 2;
        height: 140px;

        border-left: 2px solid rgba(169, 163, 194, 0.1);
        border-bottom: 2px solid rgba(169, 163, 194, 0.1);

        border-bottom-left-radius: 14px;
    }
    .path-line:nth-child(2){
        flex-grow: 1;
        max-width: 1px;

        border: 1px solid rgba(169, 163, 194, 0.1);
    }
    .path-line:nth-child(3){
        flex-grow: 2;
        height: 140px;

        border-right: 2px solid rgba(169, 163, 194, 0.1);
        border-bottom: 2px solid rgba(169, 163, 194, 0.1);

        border-bottom-right-radius: 14px;
    }
`;