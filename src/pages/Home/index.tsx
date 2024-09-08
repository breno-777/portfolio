import { Image } from "react-bootstrap";
import { Body__Home } from "./index.styled";
import { AboutMeCard } from "../../components/Cards/Home/AboutMe";
import { SmallCurriculumCard } from "../../components/Cards/Home/Curriculum/Small";

import homeBackground from "../../assets/images/home_background.svg";
import homeThumbnail from "../../assets/images/home_thumbnail.webp";
import { GradientBorder } from "../../components/Cards/GradientBorder";

export function Home() {
    return (
        <Body__Home id="home">
            <picture>
                <source type="image/webp" />
                <Image
                    src={homeBackground}
                    alt={homeBackground}
                    className="background_image"
                    draggable={false}
                    width={"1422px"}
                    height={"800px"}
                    decoding="async"
                />
            </picture>

            <div className="glow-container">
                <div className="glow-sphere" />
                <div className="glow-sphere" />
            </div>

            <div className="contents">
                <AboutMeCard />
                <SmallCurriculumCard />
            </div>

            <GradientBorder deg={180} firstColor="rgba(169,163,194,0.1)">
                <div className="home-thumbnail-container">
                    <picture>
                        <source type="image/webp" />
                        <Image
                            src={homeThumbnail}
                            alt={homeThumbnail}
                            className="home_thumbnail"
                            draggable={false}
                            width={"1032px"}
                            height={"580px"}
                            decoding="async"
                        />
                    </picture>
                </div>
            </GradientBorder>

        </Body__Home>
    );
}