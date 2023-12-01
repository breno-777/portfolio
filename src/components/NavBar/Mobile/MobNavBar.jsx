import { useState } from "react";
import {
  MobileNavBar__Button,
  MobileNavBar__Card,
  Styled__MobileNavBar,
} from "../../NavBar/Mobile/MobNavBar.style";
import ReactIcons from "../../Icons/ReactIcons";

export function MobileNavBar() {
  const [visible, setVisible] = useState(false);
  const showNav = () => {
    {
      visible ? setVisible(false) : setVisible(true);
    }
  };

  return (
    <Styled__MobileNavBar className="container-fluid">
      <div className="row">
        <div className="col-12">
          <MobileNavBar__Button onClick={showNav}>
            <ReactIcons iconName={"menu-icon"} size={"1rem"} />
          </MobileNavBar__Button>
        </div>

        <div className="col-12">
          <MobileNavBar__Card
            style={{
              display: visible ? "block" : "none",
            }}
          >
            <ReactIcons
              className="icons"
              iconName={"home-icon"}
              size={"2rem"}
              margin={"0 0 1rem"}
            />

            <ReactIcons
              className="icons"
              iconName={"skills-icon"}
              size={"2rem"}
              margin={"0 0 1rem"}
            />

            <ReactIcons
              className="icons"
              iconName={"services-icon"}
              size={"2rem"}
              margin={"0 0 1rem"}
            />
            <ReactIcons
              className="icons"
              iconName={"contact-icon"}
              size={"2rem"}
            />
          </MobileNavBar__Card>
        </div>
      </div>
    </Styled__MobileNavBar>
  );
}
