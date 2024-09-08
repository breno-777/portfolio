import { Col, Row } from "react-bootstrap";
import { Email } from "../../components/Email";
import { Body__Contact } from "./index.styled";
import { FaRegPaperPlane } from "react-icons/fa";
import { DiscordButton } from "../../components/Buttons/Social/Discord";

export const Contact = () => {
    return (
        <Body__Contact>
            <div className="glow-container">
                <div className="glow-sphere" />
                <div className="glow-sphere" />
            </div>

            <div className="header" id={"contact"}>
                <div className="header-icon-container">
                    <FaRegPaperPlane className="header-icon" />
                </div>
                <div className="header-contents">
                    <p className="header-title">Contact Me</p>
                    <p className="header-description">Would you like to talk to me? Contact me by email or on discord.</p>
                </div>
            </div>

            <div className="contacts-container">
                <Row>
                    <Col>
                        <DiscordButton />
                        <div className="other-social-container">
                            
                        </div>
                    </Col>
                    <Col>
                        <div className="email-container">
                            <Email />
                        </div>
                    </Col>
                </Row>

            </div>
        </Body__Contact>
    );
}