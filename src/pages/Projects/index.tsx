import { ProjectCard } from "../../components/Cards/Projects";
import { Body__Projects } from "./index.styled";
import italubThumbnail from "../../assets/images/projects/Italub_e_baterias_thumbnail.webp"
import nineThumbnail from "../../assets/images/projects/nine_thumbnail.webp"

export const Projects = () => {
    return (
        <Body__Projects>
            <div className="header" id={"projects"}>
                <p className="header-title">Projects</p>
                <p className="header-description">
                    I have developed website projects focused on modern design and performance, always prioritizing the user experience.
                </p>
            </div>
            <div className="projects-container">
                <div className="project">
                    <ProjectCard
                        title={"Italub & Baterias"}
                        thumbnail={italubThumbnail}
                        projectUrl="https://italub-e-baterias.com.br/"
                        thumbnailWidth={"1318px"}
                        thumbnailHeight={"937px"}
                    />
                    <div className="path-line-container">
                        <div className="path-line" />
                        <div className="path-line" />
                    </div>
                </div>
                <div className="project">
                    <div className="path-line-container">
                        <div className="path-line" />
                        <div className="path-line" />
                    </div>
                    <ProjectCard
                        title={"Nine: Call to Survivor"}
                        thumbnail={nineThumbnail}
                        projectUrl="https://urso-games.netlify.app"
                        inProgress
                        thumbnailWidth={"1317px"}
                        thumbnailHeight={"937px"}
                    />
                </div>
            </div>
        </Body__Projects >
    );
}