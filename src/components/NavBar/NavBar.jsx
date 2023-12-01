import { Body__NavBar } from "../NavBar/NavBar.style";

export function NavBar() {
  return (
    <Body__NavBar>
      <div className="container">
        <div className="row">
          {/* <div className="col-3 effect-shine"><Link to='/'>Home</Link></div>
                    <div className="col-3 effect-shine"><Link to='#skills'>Skills</Link></div>
                    <div className="col-3 effect-shine"><Link to='/services'>Services</Link></div>
                    <div className="col-3 effect-shine"><Link to='/contact'>Contact</Link></div> */}
          <div className="col-3 effect-shine">Home</div>
          <div className="col-3 effect-shine">Skills</div>
          <div className="col-3 effect-shine">Services</div>
          <div className="col-3 effect-shine">Contact</div>
        </div>
      </div>
    </Body__NavBar>
  );
}
