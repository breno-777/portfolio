import styled from "styled-components";

export const Body__Warning = styled.div`
    display: none;

    &.visible{
        position: fixed;
        display: flex;
        justify-content: center;
        align-items: center;

        inset:0;
        
        width: 100%;
        height: 100vh;

        backdrop-filter: blur(8px);
        z-index: 999;
    }
    &.hidden{
        display: none;
    }

    .card-container{
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        border-radius: 16px;
        padding: 2rem;

        border: 1px solid rgba(169, 163, 194, 0.4);
        background: linear-gradient(
            135deg,
            rgba(16, 7, 32, 0.8), 
            rgba(16, 7, 32, 0.6), 
            rgb(250, 47, 181, 0.2)
            );
    }
    .updates-container{
        position: absolute;
        right: 0;
        bottom: 0;
        padding-right: 2rem;
    
        cursor: default;

        opacity: 0.1;
    }
    .header, .button-container{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .header-title{
        font-size: 1.625rem;
        font-weight: 600;
        margin-bottom: 1rem;
    }
    .header-descripiton{
        max-width: 80%;
        text-align: center;
        color:rgba(169, 163, 194, 0.8);
    }

    .button-container{
        cursor: pointer;

        border-radius: 18px;
        padding: 0.2rem 1.6rem;
        
        background: rgba(169, 163, 194, 0.2);
    }

    /* ::before{
        content: "";
        position: absolute;
        inset: 0;

        border-radius: 16px;
        border: 1px solid transparent;
        background: linear-gradient(90deg, rgba(169, 163, 194, 0.1),  rgba(169, 163, 194, 0));

        -webkit-mask:
            linear-gradient(#fff 0 0) padding-box, 
            linear-gradient(#fff 0 0);
        -webkit-mask-composite: xor;
            mask-composite: exclude;
    } */
`;