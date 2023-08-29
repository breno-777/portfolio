import styled from 'styled-components';
import { devices } from '../../js/Breakpoints';
import * as a from '../../components/Animations/Animations';

export const Body__Home = styled.div`
    margin: 12rem 4rem;
    overflow: auto;

    .title{
        animation:  ${a.slideLeftAnimation} 1s ease-in-out;
    }
    h1{
        margin: 0;
        color: #393939;
        font-size: 4rem;
        font-weight: bold;
    }
    h2{
        margin: 0;
        color: #EEEEEE;
        font-size: 2.25rem;
        font-weight: bold;
    }
    .icons{
        display: flex;
    }
    .card{
        animation:  ${a.slideRightAnimation} 1s ease-in-out;
        background-color: transparent;
        border: none;
    }

    @media ${devices.xl} {
        .row{
            margin: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            .card{
                display: flex;
                flex-direction: column;
                align-items: center;
            }
            .col-6{
            width: 100%;
            }
        }
    }
    @media ${devices.lg}{
        margin: 2rem 2rem;
    }
    @media ${devices.sm} {
        height: 80%;
        margin: 0;
        padding: 0;
       .row{
            .card{
                display: none;
            }
            h1{
                font-size: 3rem;
            }
            h2{
                font-size: 2rem;
            }
        }
    }
`;