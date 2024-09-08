import styled from "styled-components";

export const Body__DiscordButton = styled.div`
    position: relative;
    overflow: hidden;

    padding: 1.5rem;

    background: linear-gradient(
        90deg,
        rgb(49, 8, 123, 0.1),
        rgb(49, 8, 123, 0.1),
        rgb(49, 8, 123, 0)
    );

    p, a{
        margin: 0;
        text-decoration: none;
    }
    a{color: rgb(169, 163, 194, 0.4)}

    .header{
        display: flex;
        justify-content: top;
        align-items: start;
    }
    .button-container{
        display: flex;
        gap: 0.6rem;
    }

    .discord-icon{
        position: absolute;
        right: -4%;
        bottom: -24%;
        transform: rotate(15deg);
        
        color: rgba(169, 163, 194, 0.4);
    }
`;