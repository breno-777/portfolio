import { Body__DiscordButton } from "./index.styled";
import { FaDiscord } from "react-icons/fa";
import { BiSolidRightTopArrowCircle } from "react-icons/bi";
import { GradientBorder } from "../../../Cards/GradientBorder";

export const DiscordButton = () => {
    return (
        <GradientBorder deg={-90}>
            <Body__DiscordButton>
                <div className="header">
                    <p className="title">Discord Community</p>
                    <div>
                        <div className="button-container">
                            <a href="#" className="button">Join Discord</a>
                            <BiSolidRightTopArrowCircle size={24} color="rgba(169, 163, 194, 0.4)" />
                        </div>
                    </div>

                    <FaDiscord className="discord-icon" size={148} />
                </div>
            </Body__DiscordButton>
        </GradientBorder>

    );
}