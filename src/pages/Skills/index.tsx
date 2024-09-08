import { Body__Skills } from "./index.styled";
import radialBlur from "../../assets/images/vectors/background_glow.svg";
import { Image } from "react-bootstrap";
import { SkillCard } from "../../components/Cards/Skills";

import gridBackground from "../../assets/images/vectors/grid_background.svg";
export const Skills = () => {
    return (
        <Body__Skills>
            <Image src={gridBackground} alt={gridBackground} className="grid_image" draggable={false} />

            <div className="header" id={"skills"}>
                <Image src={radialBlur} alt={radialBlur} className="header-background" draggable={false} />
                <p className="header-title">My Skills</p>
                <p className="header-description">
                    Experience in creating intuitive and functional interfaces, combining design and front-end development with a focus on the best user experience.
                </p>
            </div>

            <div className="skills-list">
                <SkillCard title="React" description="Building dynamic and responsive user interfaces." />
                <SkillCard title="TypeScript" description="Typed development for enhanced security and scalability." />
                <SkillCard title="Git" description="Efficient version control and collaborative workflows." />
                <SkillCard title="Node.js" description="Backend development with JavaScript for server-side applications." />
                <SkillCard title="Bootstrap" description="Quick styling and responsive layouts with prebuilt components." />
                <SkillCard title=" Agile Methodologies" description="Organizing and delivering projects with an agile approach." />
            </div>
            <div className="path-line-container">
                <div className="path-line"></div>
                <div className="path-line"></div>
                <div className="path-line"></div>
            </div>

        </Body__Skills>
    );
}