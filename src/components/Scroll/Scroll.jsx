import downArrow from "../../assets/img/down-arrow-gif.gif";
import { Body__Scroll } from "./Scroll.style";

function Scroll() {
  return (
    <Body__Scroll>
      <img src={downArrow} alt="" />
      Scroll
    </Body__Scroll>
  );
}

export default Scroll;
