import { styled } from "styled-components";

export const Body__IconsCarousel = styled.div`
    .icon-item{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        text-align: center;

        margin: 1rem 0;
        padding-top: 0.5rem;

        font-size: 1.25rem;
        color: gray;

        border-radius: 8px;
        transition: transform 0.5s, background-color 0.5s, box-shadow 0.5s;
        &:hover{
            transform: scale(1.05);
            background-color: #eeeeee84;
            box-shadow: 0 2px 32px 0 #83ecfced;
        }
    }
    img{
        max-width: 100%;
        width: 5rem;
    }
`;