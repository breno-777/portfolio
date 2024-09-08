import { Image } from "react-bootstrap";
import { Body__SkillCard } from "./index.styled";
import { MdOutlineHideImage } from "react-icons/md";
import { GradientBorder } from "../GradientBorder";

interface SkillCardProps {
    title?: string;
    description?: string;
    thumbnail?: any;
}

export const SkillCard = ({ title, description, thumbnail }: SkillCardProps) => {
    return (

        <Body__SkillCard>
            <GradientBorder deg={180}>
                <div className="skill-contents">
                    {thumbnail ? (
                        <Image src={thumbnail} alt={thumbnail} className="skill-thumbnail" />
                    ) : (
                        <div className="thumbnail-undefined"><MdOutlineHideImage size={"2rem"} color="rgba(169, 163, 194, 0.4)" /></div>
                    )}
                    <p className="skill-title">{title ? title : "Skill Title"}</p>
                    <p className="skill-description">{description ? description : "Skill Description"}</p>
                </div>
            </GradientBorder>
        </Body__SkillCard>

    );
}