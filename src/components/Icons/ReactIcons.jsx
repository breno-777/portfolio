/* eslint-disable react/prop-types */
import { BsLinkedin, BsDiscord, BsGithub } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { SlMenu } from 'react-icons/sl';
import { PiChatDotsLight, PiHouseLight, PiIdentificationCardLight, PiCodeLight } from 'react-icons/pi';
import { Styled__Icons } from './ReactIcons.style';

const iconsList = [
    { name: "linkedin-icon", icon: <BsLinkedin /> },
    { name: "discord-icon", icon: <BsDiscord /> },
    { name: "email-icon", icon: <MdEmail /> },
    { name: "github-icon", icon: <BsGithub /> },

    { name: "menu-icon", icon: <SlMenu /> },
    { name: "home-icon", icon: <PiHouseLight /> },
    { name: "skills-icon", icon: <PiIdentificationCardLight /> },
    { name: "services-icon", icon: <PiCodeLight /> },
    { name: "contact-icon", icon: <PiChatDotsLight /> }
]
function foundIcon(name) {
    const selectedIcon = iconsList.find(iconItem => iconItem.name === name);
    return selectedIcon ? selectedIcon.icon : null;
}

function ReactIcons({ iconName, size, margin }) {
    const Icon = foundIcon(iconName);

    return (
        <Styled__Icons style={{ fontSize: size, margin: margin }}>
            {Icon}
        </Styled__Icons>
    );
}

export default ReactIcons;