import ReactIcons from "../Icons/ReactIcons";
import { Body__Footer } from "./footer.style";

function Footer() {
    return (
        <Body__Footer>

            <div className="footer-nav">
                <p>Home</p>
                <p>Skills</p>
                <p>Services</p>
                <p>Contact</p>
            </div>
            <div className="icons">
                <a href="https://www.linkedin.com/in/breno777/" target="blank">
                    <ReactIcons iconName={'linkedin-icon'} size={'1.5rem'} margin={'0 1rem 0 0'} />
                </a>
                <ReactIcons iconName={'email-icon'} size={'1.5rem'} margin={'0 1rem 0 0'} />

                <a href="https://discord.com/users/497121360657514507" target="blank">
                    <ReactIcons iconName={'discord-icon'} size={'1.5rem'} margin={'0 1rem 0 0'} />
                </a>

                <a href="https://github.com/breno-777" target="blank">
                    <ReactIcons iconName={'github-icon'} size={'1.5rem'} />
                </a>
            </div>
            <p>Find me on Social Media</p>
            <p>&copy; All rights reserved 2023</p>
        </Body__Footer>
    );
}

export default Footer;