import styled from "styled-components";

export const Body__Projects = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    .header {
        position: relative;
        display: flex;
        flex-direction: column;
        
        justify-content: center;
        text-align: center;

        max-width: 36em;
        font-weight: 600;
    }

    .header-title{ margin: 0.875rem 0; }
    .header-description{ color: rgba(169, 163, 194, 0.4); }

    .projects-container{
        width: 100%;
    }
    .project{
        display: flex;

    }
    .path-line-container{
        display: flex;
        justify-content: space-around;
        
        width: 100%;
        min-height: 200px;
    }
    .path-line:nth-child(1){
        flex-grow: 2;
        height: 140px;

        border-right: 2px solid rgba(169, 163, 194, 0.1);
        border-bottom: 2px solid rgba(169, 163, 194, 0.1);

        border-bottom-right-radius: 14px;
    }
    .path-line:nth-child(2){
        flex-grow: 2;
        height: 140px;

        border-right: 2px solid rgba(169, 163, 194, 0.1);
        border-bottom: 2px solid rgba(169, 163, 194, 0.1);

        border-bottom-right-radius: 14px;
    }


     /* Mobile */
     @media (max-width: 767px){
        .header-title{ font-size: 1em; }
        .header-description{ font-size: 0.75em; } 

        .projects-container{ 
            display: flex;
            flex-direction: column;
            align-items: center;

            gap: 2.5em;
        }
        .path-line-container{ display: none; }
    }

    /* Tablets */
    @media (min-width: 768px) {
        .header-title{ font-size: 1em; }
        .header-description{ font-size: 0.75em; } 

        .path-line-container{ display: none; }
    }
    @media (max-width: 991px){
        .projects-container{ 
            display: flex;
            flex-direction: column;
            align-items: center;

            gap: 2.5em;
        }
    }

    /* Desktops */
    @media (min-width: 992px) {
        .header-title{
            font-size: 1.625em;
            margin: 0.875rem 0;
        }
        .header-description{ font-size: 0.875em; } 

        .path-line-container{
            display: flex;
            justify-content: space-around;
            
            width: 100%;
            min-height: 200px;
        }
    }

    /* Large Desktops */
    /* @media (min-width: 1200px) {
        border: 2px solid green;
        body {
            font-size: 20px;
        }
    } */
`;