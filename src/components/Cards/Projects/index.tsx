import { Image } from "react-bootstrap";
import { Body__ProjectCard } from "./index.styled";

import { MdOutlineHideImage } from "react-icons/md";
import { BiSolidRightTopArrowCircle } from "react-icons/bi";
import { GradientBorder } from "../GradientBorder";

interface ProjectCardProps {
    title?: string;
    projectUrl?: string;
    thumbnail?: any;
    inProgress?: boolean;
    thumbnailWidth?: string;
    thumbnailHeight?: string;
}

export const ProjectCard = ({ title, thumbnail, inProgress, thumbnailWidth, thumbnailHeight }: ProjectCardProps) => {
    return (
        <Body__ProjectCard>
            <GradientBorder firstColor="rgba(169,163,194,0.1)" secondColor="rgba(169,163,194,0.1)">
                <div className="project-card-contents">
                    {thumbnail ? (
                        <picture>
                            <source type="image/webp" />
                            <Image
                                src={thumbnail}
                                alt={thumbnail}
                                className="project-thumbnail"
                                loading="lazy"
                                width={thumbnailWidth}
                                height={thumbnailHeight}
                            />
                        </picture>
                    ) : (
                        <div className="thumbnail-undefined"><MdOutlineHideImage size={"2rem"} color="rgba(169, 163, 194, 0.4)" /></div>
                    )}
                    <div className="title-container">
                        <p className="project-title">{title ? title : "Project Title"}</p>
                        {inProgress ? (
                            <div className="project-progress-container">
                                <p className="project-progress">IN PROGRESS</p>
                            </div>
                        ) : (<BiSolidRightTopArrowCircle size={24} color="rgba(169, 163, 194, 0.4)" />)}
                    </div>
                </div>
            </GradientBorder>
        </Body__ProjectCard>
    );
};