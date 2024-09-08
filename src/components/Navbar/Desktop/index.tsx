import { Col, Image, Row } from "react-bootstrap";
import { Body__Desktop__Navbar } from "./index.styled";
import { useState, useEffect } from "react";
import { Scroll } from "../../../typescript/scroll";
import { Mobile__Navbar } from "../Mobile";
import { useWindowWidth } from "../../../typescript/useWindowWidth";

export const Desktop__Navbar = ({ userData, scrollPosition }: any) => {
    const [selected, setSelected] = useState("home");
    const windowWidth = useWindowWidth();

    const handleSelection = (id: string) => {
        setSelected(id);
        Scroll({ id });
    }

    useEffect(() => {
        const section = Math.floor(scrollPosition / window.innerHeight);
        section === 0 ? setSelected("home") :
            section === 1 ? setSelected("skills") :
                section === 2 ? setSelected("projects") :
                    setSelected("contact");
    }, [scrollPosition]);

    return (
        <>
            {windowWidth < 992 ? (
                <Mobile__Navbar userData={userData} scrollPosition={scrollPosition} selected={selected} setSelected={setSelected} />
            ) : (
                <Body__Desktop__Navbar>
                    <Row>
                        <Col className="column" xl={4}>
                            <div className="user-data">
                                <div className="avatar-container">
                                    <picture>
                                        <source type="image/webp" />
                                        <Image
                                            className="user-avatar"
                                            src={userData.avatar_url}
                                            alt={userData.avatar_url}
                                            width={"3rem"}
                                            height={"3rem"}
                                        />
                                    </picture>
                                </div>
                                <div className="user-name-container">
                                    <div className="user-name">
                                        Breno<span>, Front-end</span>
                                    </div>
                                </div>
                            </div>
                        </Col>

                        <Col className="column" xl={4}>
                            <ul>
                                <li className={`${selected == "home" ? "selected" : ""}`} onClick={() => handleSelection("home")}>Home</li>
                                <li className={`${selected == "skills" ? "selected" : ""}`} onClick={() => handleSelection("skills")}>Skills</li>
                                <li className={`${selected == "projects" ? "selected" : ""}`} onClick={() => handleSelection("projects")}>Projects</li>
                                <li className={`${selected == "contact" ? "selected" : ""}`} onClick={() => handleSelection("contact")}>Contact</li>
                            </ul>
                        </Col>

                        <Col className="column" xl={4}>
                            <div className="language-container">
                                <div className="language-button">
                                    En
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Body__Desktop__Navbar>
            )}
        </>
    );
}
