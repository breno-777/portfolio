import styled from "styled-components";

export const Body__AboutMeCard = styled.div`
    .aboutme-card-contents{
        display: flex;
        flex-direction: column;
        padding: 2.25em;
        gap: 1rem;

        backdrop-filter: blur(8px);
        background: rgb(49,8,123);
        background: linear-gradient(
            90deg,
            rgba(49,8,123,0.1) 0%,
            rgba(49,8,123,0.1) 0%,
            rgba(49,8,123,0.04) 100%
        );
    }

    p{
        font-weight: 600;
        margin: 0;
    }

    .card-header p:nth-child(2){ color: rgba(169, 163, 194, 0.4); }
    
    .about-me-title{ padding-bottom: 1.5em; }
    .about-me-description{
        opacity: 0.5;
        max-width: 40em;
    }

    /* Mobile */
    @media (max-width: 767px) {
        .about-me-title{ font-size: 1em; }
        .about-me-description{ font-size: 0.75em; } 
    }
    /* Tablets */
    @media (min-width: 768px) {
        .about-me-title{ font-size: 1em; }
        .about-me-description{
            font-size: 0.75em;
            max-width: 26em;
        } 
    }

    /* Desktops */
    @media (min-width: 992px) {
        .about-me-title{ font-size: 1.625em; }
        .about-me-description{
            font-size: 0.875em;
            max-width: 40em;
        } 
    }
`;