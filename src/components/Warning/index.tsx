import { useState } from "react";
import { Body__Warning } from "./index.styled";

export const Warning = () => {

    const [visibility, setVisibility] = useState("visible");
    const handleVisibility = () => {
        setVisibility((prev) => (prev === "visible" ? "hidden" : "visible"));
    }

    return (
        <Body__Warning className={visibility}>
            <div className="card-container">
                <p className="updates-container">
                    Last Update: 09.07.2024 : 10:20 UTC-3
                </p>
                <div className="header">
                    <p className="header-title">Warning</p>
                    <p className="header-descripiton">Keep in mind that this site is still under development, so problems can happen frequently</p>
                </div>

                <div className="button-container" onClick={() => { handleVisibility() }}> Ok </div>
            </div>
        </Body__Warning >
    );
}