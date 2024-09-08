import { GradientBorder } from "../../GradientBorder";
import { Body__AboutMeCard } from "./index.styled";

export const AboutMeCard = () => {
    return (
        <Body__AboutMeCard>
            <GradientBorder deg={-90}>
                <div className="aboutme-card-contents">
                    <div className="card-header">
                        <p style={{ fontSize: "14px" }}>Hi, I'm Breno.</p>
                        <p style={{ fontSize: "12px" }}>Front-end developer</p>
                    </div>
                    <div>
                        <p className="about-me-title">Passionate about creating designs.</p>
                        <p className="about-me-description">
                            I am a front-end developer with an academic background at the Firjan SENAI institution and am currently studying at the UNIFATECIE university, where I am specializing. I have versatile software development skills and a growing interest in emerging technologies.
                        </p>
                    </div>
                </div>
            </GradientBorder >
        </Body__AboutMeCard>
    );
}