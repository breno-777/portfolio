import styled from "styled-components";

export const Body__Email = styled.div`
    .belt-container{
        position: absolute;
        width: 100%;
        height: 4vw;

    }
    .belt{
        position: absolute;
        left: -10px;
        height: 100%;
        width: 110%;

        object-fit: cover;

        -webkit-mask-image: linear-gradient(to bottom, rgba(16, 7, 32, 0.06) 0%, rgba(16, 7, 32, 0) 100%);
        mask-image: linear-gradient(to bottom, rgba(16, 7, 32, 0.06) 0%,  rgba(16, 7, 32, 0) 100%);
    }

    form{
        padding: 2rem;
        
        background: rgb(49,8,123);
        background: linear-gradient(180deg, rgba(49,8,123,0) 0%, rgba(49,8,123,0.1) 100%);
    }
    
    .input-container{
        display: flex;
        flex-direction: column;

        margin-top: 0.75rem;
    }

    label{
        color: rgba(244, 244, 244, 0.8);
    }
    input, textarea{
        padding: 0.25rem;
        background: rgb(169,163,194);
        background: linear-gradient(145deg, rgba(169,163,194,0.4) 0%, rgba(169,163,194,0.2) 50%);

        border-radius: 6px;
        border: 1px solid rgba(169,163,194,0.4);
    }

    button{
        padding: 0.25rem;
        margin-top: 1.125rem;
        border-radius: 6px;
        border: none;

        border-top: 1px solid rgb(169,163,194);
        background: linear-gradient(90deg, rgba(169,163,194,0.4) 0%, rgba(49,8,123,0.2) 100%);
    }
`;