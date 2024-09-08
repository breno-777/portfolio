
import { Col, Image, Row } from "react-bootstrap";
import { Body__Email } from "./index.styled";
import { GradientBorder } from "../Cards/GradientBorder";
import belt from "../../assets/images/vectors/belt.svg"

export const Email = () => {
    return (
        <Body__Email>
            <GradientBorder deg={145}>
                <div className="belt-container">
                    <Image
                        src={belt}
                        alt={belt}
                        loading="lazy"
                        draggable={false}
                        decoding="async"
                        className="belt"
                    />
                </div>
                <form>
                    <Row>
                        <Col xl={12} className="input-container">
                            <label>Choose a topic</label>
                            <input type="text" />
                        </Col>

                        <Col xl={6} className="input-container">
                            <label>First name</label>
                            <input type="text" />
                        </Col>

                        <Col xl={6} className="input-container">
                            <label>Last name</label>
                            <input type="text" />
                        </Col>

                        <Col xl={6} className="input-container">
                            <label>Company name</label>
                            <input type="text" />
                        </Col>

                        <Col xl={6} className="input-container">
                            <label>Email adress</label>
                            <input type="email" />
                        </Col>

                        <Col xl={12} className="input-container">
                            <label>Message</label>
                            <textarea name="message" />
                        </Col>

                        <p>Send Message</p>
                    </Row>

                </form>
            </GradientBorder>
        </Body__Email>
    );
}