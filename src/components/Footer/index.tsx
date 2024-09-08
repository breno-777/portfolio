import { Image } from "react-bootstrap";
import { Body__Footer } from "./index.styled";

export const Footer = ({ userData }: any) => {
    const year = new Date().getFullYear();
    return (
        <Body__Footer>
            <div className="header">
                <div className="user-data">
                    <div className="avatar-container">
                        <picture>
                            <source type="image/webp" />
                            <Image
                                className="user-avatar"
                                src={userData.avatar_url}
                                alt={userData.avatar_url}
                                width={"2.375rem"}
                                height={"2.375rem"}
                            />
                        </picture>
                    </div>
                    <div className="user-name-container">
                        <div className="user-name">
                            Breno<span> | All rights reserved &copy; {year}</span>
                        </div>
                    </div>
                </div>
                <div className="user-message-container">
                    <p className="user-message">Growing interest in emerging technologies.</p>
                </div>
            </div>

            <div className="divider">
                <hr /> + <hr />
            </div>

            <div className="contents"></div>

            <div className="divider">
                <hr /> + <hr />
            </div>

        </Body__Footer>
    );
}