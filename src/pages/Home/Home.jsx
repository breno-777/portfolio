import { WelcomeCard } from "../../components/WelcomeCard/welcomeCard";
import ReactIcons from "../../components/Icons/ReactIcons";
import { Body__Home } from "./Home.style";

function Home() {
    return (
        <Body__Home>
            <div className="container-fluid">
                <div className="row">
                    <div className="title col-6">
                        <h1>Breno Amarante</h1>
                        <h2>Full Stack Developer</h2>
                        <div className="icons">
                            <ReactIcons iconName={'linkedin-icon'} size={'2rem'} margin={'0 1rem 0 0'} />
                            <ReactIcons iconName={'email-icon'} size={'2rem'} margin={'0 1rem 0 0'} />
                            <ReactIcons iconName={'discord-icon'} size={'2rem'} margin={'0 1rem 0 0'} />
                            <ReactIcons iconName={'github-icon'} size={'2rem'} />
                        </div>

                    </div>
                    <div className="card col-6">
                        <WelcomeCard />
                    </div>
                </div>
            </div>
        </Body__Home>
    );
}

export default Home;