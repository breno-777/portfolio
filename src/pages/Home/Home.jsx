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
              <a href="https://www.linkedin.com/in/breno777/" target="blank">
                <ReactIcons
                  iconName={"linkedin-icon"}
                  size={"2rem"}
                  margin={"0 1rem 0 0"}
                />
              </a>
              <ReactIcons
                iconName={"email-icon"}
                size={"2rem"}
                margin={"0 1rem 0 0"}
              />

              <a
                href="https://discord.com/users/497121360657514507"
                target="blank"
              >
                <ReactIcons
                  iconName={"discord-icon"}
                  size={"2rem"}
                  margin={"0 1rem 0 0"}
                />
              </a>

              <a href="https://github.com/breno-777" target="blank">
                <ReactIcons iconName={"github-icon"} size={"2rem"} />
              </a>
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
