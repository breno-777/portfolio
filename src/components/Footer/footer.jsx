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
                <ReactIcons iconName={'linkedin-icon'} size={'1.5rem'} margin={'0 1rem 0 0'} />
                <ReactIcons iconName={'email-icon'} size={'1.5rem'} margin={'0 1rem 0 0'} />
                <ReactIcons iconName={'discord-icon'} size={'1.5rem'} margin={'0 1rem 0 0'} />
                <ReactIcons iconName={'github-icon'} size={'1.5rem'} />
            </div>
            <p>Find me on Social Media</p>
            <p>&copy; All rights reserved 2023</p>
        </Body__Footer>
    );
}

export default Footer;