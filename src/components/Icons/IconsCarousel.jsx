/* eslint-disable react/prop-types */
// import Angular from '../../assets/img/angular-icon.png';
import Bootstrap from '../../assets/img/bootstrap-icon.png';
// import CSS from '../../assets/img/css-icon.png';
// import HTML from '../../assets/img/html-icon.png';
import IntelliJ from '../../assets/img/intellij-icon.png';
// import Java from '../../assets/img/java-icon.png';
import JavaScript from '../../assets/img/javascript-icon.png';
import NodeJs from '../../assets/img/nodejs-icon.png';
// import Npm from '../../assets/img/npm-icon.png';
// import PostgreSQL from '../../assets/img/postgresql-icon.png';
import React from '../../assets/img/react-icon.png';
// import SpringTool from '../../assets/img/spring-tool-icon.png';
import TypeScript from '../../assets/img/typescript-icon.png';
import { Body__IconsCarousel } from './IconsCarousel.style';

const iconsList = [
    // { name: "angular-icon", icon: <img src={Angular} alt="" /> },
    { name: "Bootstrap", icon: <img src={Bootstrap} alt="" /> },
    // { name: "css-icon", icon: <img src={CSS} alt="" /> },
    // { name: "html-icon", icon: <img src={HTML} alt="" /> },
    { name: "IntelliJ", icon: <img src={IntelliJ} alt="" /> },
    // { name: "java-icon", icon: <img src={Java} alt="" /> },
    { name: "JavaScript", icon: <img src={JavaScript} alt="" /> },
    { name: "NodeJs", icon: <img src={NodeJs} alt="" /> },
    // { name: "npm-icon", icon: <img src={Npm} alt="" /> },
    // { name: "postgresql-icon", icon: <img src={PostgreSQL} alt="" /> },
    { name: "React", icon: <img src={React} alt="" /> },
    // { name: "springtool-icon", icon: <img src={SpringTool} alt="" /> },
    { name: "TypeScript", icon: <img src={TypeScript} alt="" /> }
]

function IconsCarousel() {
    return (
        <Body__IconsCarousel>
            <div className="icon-list">
                {iconsList.map((iconItem, index) => (
                    <div key={index} className='icon-item'>
                        {iconItem.icon}
                        <span>{iconItem.name}</span>
                    </div>
                ))}
            </div>
        </Body__IconsCarousel>
    );
}

export default IconsCarousel;