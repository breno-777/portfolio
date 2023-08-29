/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Body__ProfileCard } from "./profileCard.style";
import { VisitButton } from "../Button/button";

function ProfileCard(props) {
    const [user, setUser] = useState({});

    useEffect(() => {
        fetch(props.link)
            .then((res) => res.json())
            .then((json) => setUser(json));
    }, [props.link])

    return (
        <Body__ProfileCard>
            <div className="container">
                <div className="row">
                    <div className="title">{props.title}</div>

                    <div className="profile_avatar col-3">
                        <img src={user.avatar_url} alt="" />
                    </div>

                    <div className="profile_contents col">
                        <h2 className="profile_name">{user.name}</h2>
                        <p className="profile_bio">{user.bio}</p>

                        <div className="visit-button">
                            <a href="https://github.com/breno-777" target="blank">
                                <VisitButton type='visit' title='Visit' />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </Body__ProfileCard>
    );
}

export default ProfileCard;