import styled from "styled-components";

export const Body__SkillCard = styled.div`
    .skill-contents{
        position: relative;
        display: flex;
        flex-direction: column;
        padding: 0.75rem;
    }
    
    .skill-thumbnail{
        min-height: 88px;
    }
    .thumbnail-undefined{
        display: flex;
        justify-content:center;
        align-items: center;

        width: 100%;
        min-height: 88px;
    }

    .skill-title{
        margin: 0 0 0.5rem 0;
    }
    .skill-description{
        color: rgba(169, 163, 194, 0.4);
    }
`;