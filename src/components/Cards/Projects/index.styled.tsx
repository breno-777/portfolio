import styled from "styled-components";

export const Body__ProjectCard = styled.div`
    .project-card-contents{
        display: flex;
        flex-direction: column;
        padding: 0.75rem;
    }

    .project-thumbnail{
        border-radius: 14px;
        border: 1px solid rgba(169,163,194,0.4);
        
        max-width: 420px;
        width: 100%;
        height: 100%;
    }

    .title-container{
        display: flex;
        align-items: center;
        gap: 0.625rem;
        margin-top: 1.5rem;
    }
    .project-progress-container{
        padding: 0.25rem 0.375rem;
        border-radius: 0.5rem;  
        background-color: rgba(169, 163, 194, 0.4);
    }
    .project-title{ margin: 0; }
    .project-progress{ margin: 0;}


    /* Mobile */
    @media (max-width: 767px){
        .project-title{ font-size: 1em; }
        .project-progress{ font-size: 0.875em; } 
    }

    /* Tablets */
    /* @media (min-width: 768px) {
    } */

    /* Desktops */
    /* @media (min-width: 992px) {
    } */

    /* Large Desktops */
    @media (min-width: 1200px) {
        .project-title{ font-size: 1em; }
        .project-progress{ font-size: 0.875em; }
    }
`;