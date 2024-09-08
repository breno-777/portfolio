import styled from "styled-components";

interface Body__GradientBorderProps {
    size: number;
    borderradius: number;
    deg: number,
    firstcolor: string,
    secondcolor: string,
}

export const Body__GradientBorder = styled.div<Body__GradientBorderProps>`
    position: relative;
    display: flex;
    flex-direction: column;
    border-radius: ${({ borderradius }) => `${borderradius}px`};
    overflow: hidden;

    box-shadow: 0 16px 32px 0 rgba(16, 7, 32, 0.4);
    
    ::before{
        content: "";
        position: absolute;
        inset: 0;
        
        border-radius: ${({ borderradius }) => `${borderradius}px`};
        border: ${({ size }) => `${size}px solid transparent`};
        background: ${({ deg, firstcolor, secondcolor }) =>
        `linear-gradient(${deg}deg, ${firstcolor} 0%, ${secondcolor} 100%) border-box`};

        -webkit-mask:
            linear-gradient(#fff 0 0) padding-box, 
            linear-gradient(#fff 0 0);
        -webkit-mask-composite: xor;
            mask-composite: exclude;
            
        z-index: -1;
    }

    /* ::after{
        content: "";
        position: absolute;
        height: 40%;
        width: 120%;
        
        background-image: conic-gradient(red, blue, red);
        
        top: 50%;
        left: 50%;
        translate: -50% -50%;

        z-index: -1;
        
        animation: glowing 3s infinite linear;
    }

    @keyframes glowing {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

    .children {
        position: relative;
        z-index: 2;
    } */
`;