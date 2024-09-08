import { GradientBorder } from "../../../GradientBorder";
import { Body__SmallCurriculumCard } from "./index.styled";

import { MdOutlineHideImage } from "react-icons/md";

export const SmallCurriculumCard = () => {
    return (
        <Body__SmallCurriculumCard>
            <GradientBorder>
                <div className="curriculum-contents">
                    <div className="curriculum-undefined"><MdOutlineHideImage size={"2rem"} color="rgba(169, 163, 194, 0.4)" /></div>
                </div>
            </GradientBorder>
        </Body__SmallCurriculumCard>
    );
}