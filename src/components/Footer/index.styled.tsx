import styled from "styled-components";

export const Body__Footer = styled.div`
    .header{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .user-data{
        display: flex;
        align-items: center;
        justify-content: left;
        
        gap: 0.75rem;

        font-weight: 600;
        span{
            font-weight: normal;
            color: rgba(169, 163, 194, .4);
        }
    }
    .user-avatar{
        width: 2.375rem;
        height: 2.375rem;
        border-radius: .5rem;
    }
    .user-message{
        margin: 0;
        color: rgba(169, 163, 194, .4);
    }

    .divider{
        display: flex;
        align-items: center;

        gap: 2.75rem;
    }
    hr{
        width: 100%;
        color: #A9A3C2;
    }
`;