import { Image } from "react-bootstrap";
import { Body__Mobile__Navbar } from "./index.styled";
import { useEffect, useState, useRef } from "react";
import { Scroll } from "../../../typescript/scroll";

export const Mobile__Navbar = ({ userData, scrollPosition, selected, setSelected }: any) => {
    const [open, setOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    const handleOpenMenu = () => {
        setOpen((prev) => !prev);
    }

    const handleSelection = (id: string) => {
        setSelected(id);
        Scroll({ id });
    }

    // Change section selection
    useEffect(() => {
        const section = Math.floor(scrollPosition / window.innerHeight);
        section === 0 ? setSelected("home") :
            section === 1 ? setSelected("skills") :
                section === 2 ? setSelected("projects") :
                    setSelected("contact");
    }, [scrollPosition]);

    // Close menu
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) setOpen(false);
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [menuRef]);

    return (
        <Body__Mobile__Navbar>
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
            </div>

            <div className="buttons-container">
                <div className="language-container">
                    <div className="language-button">
                        En
                    </div>
                </div>

                <div className={`burguer-container ${open ? 'open' : " "}`} onClick={() => handleOpenMenu()} ref={menuRef}>
                    <div className="burguer-bar" />
                    <div className="burguer-bar" />
                    <div className="burguer-bar" />

                    <div className="menu-container">
                        <ul>
                            <li className={`${selected == "home" ? "selected" : ""}`} onClick={() => handleSelection("home")}>Home</li>
                            <li className={`${selected == "skills" ? "selected" : ""}`} onClick={() => handleSelection("skills")}>Skills</li>
                            <li className={`${selected == "projects" ? "selected" : ""}`} onClick={() => handleSelection("projects")}>Projects</li>
                            <li className={`${selected == "contact" ? "selected" : ""}`} onClick={() => handleSelection("contact")}>Contact</li>
                        </ul>
                    </div>
                </div>
            </div>
        </Body__Mobile__Navbar>
    );
}
