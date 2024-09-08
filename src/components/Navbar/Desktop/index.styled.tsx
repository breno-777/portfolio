import { Container } from "react-bootstrap";
import styled from "styled-components";

export const Body__Desktop__Navbar = styled(Container)`
    position: fixed;

    justify-content: center;

    top: 0;
    left: 0;
    right: 0;

    margin-top: 2rem;
    z-index: 99;

    .row{
        display: flex;
        flex-direction: row;

        justify-content: center;

        .column:nth-child(1){
            flex-grow: 1;
        }
        .column:nth-child(2){
            flex-grow: 2;
        }
        .column:nth-child(3){
            flex-grow: 2.5;
        }
    }
    .column{
        width: auto;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    ul{
        display: flex;
        gap: 3rem;
        
        margin: 0;
        padding: 0;

        list-style: none;
        cursor: pointer;
    }

    li{
        opacity: 0.5;
        transition: opacity 0.3s ease-in-out;
    }
    .selected { opacity: 1; }
    li:hover{
        opacity: 1;
    }
    
    .user-data{
        display: flex;
        align-items: center;
        justify-content: left;
        
        width: 100%;
        gap: 0.75rem;

        font-weight: 600;
        span{color: rgba(169, 163, 194, .4);}
    }
    .user-avatar{
        width: 3rem;
        height: 3rem;
        border-radius: .5rem;
    }

    .language-container{
        display: flex;
        justify-content: right;
        width: 100%;
    }
    .language-button{
        padding: 0.2rem 0.6rem;
        border-radius: 14px;
        border: 1px solid #A9A3C2;

        opacity: 0.5;
        transition: opacity 0.3s ease-in-out;

        cursor: pointer;
    }

    .language-button:hover  {
        opacity: 1;
    }

`;