import { Body__GradientBorder } from "./index.styled";

interface GradientBorderProperties {
    children: string | JSX.Element | JSX.Element[],
    size?: number,
    borderRadius?: number,
    deg?: number,
    firstColor?: string,
    secondColor?: string
}

export const GradientBorder = (
    {
        children,
        size = 1,
        borderRadius = 18,
        deg = 90,
        firstColor = "rgba(50, 37, 73, 0.1)",
        secondColor = "rgba(50, 37, 73, 0)"
    }: GradientBorderProperties) => {
    return (
        <Body__GradientBorder
            size={size}
            borderradius={borderRadius}
            deg={deg}
            firstcolor={firstColor}
            secondcolor={secondColor}
        >
            <div className="children"> {children} </div>
        </Body__GradientBorder >
    );
}