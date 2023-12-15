import "./Home.scss";
import { Helmet } from "react-helmet";

// image imports
import logo from "../../assets/allscherry-landing.png";
import wonderBar from "../../assets/wonder-bar.svg";
import linktree from "../../assets/linktree-footer.png";
import mail from "../../assets/mail-footer.png";
import mailchimp from "../../assets/mailchimp-footer.png";
import downArrow from "../../assets/downArrow.svg";

export default function Home() {
  return (
    <div className="home">
        <Helmet>
            <title>AllsCherry - Home</title>
        </Helmet>
        <div className="firstBlock">
            <div className="logoSloganWrapper">
                <div className="logoWrapper">
                    <img className="mainLogo" src={logo} alt="logo" />
                </div>
                <div className="sloganWrapper">
                    <div className="slogan">
                        <h1>Feel the wonder,</h1>
                        <h1>Crave Adventure</h1>
                        <img className="sloganImage" src={wonderBar} alt="wonder-bar" />
                    </div>
                </div>
            </div>
            <div className="selectionBarWrapper">
                <ul className="selectionBarList">
                    <li className="selectionBarItem"><p>Shop</p></li>
                    <li className="selectionBarItem"><p>Projects</p></li>
                    <li className="selectionBarItem"><p>Contact</p></li>
                </ul>
            </div>
            <div className="mainText">
                <p><br/>AllsCherry is a brand, and artist, a community, an idea, an art piece.</p>
                <p><br/>Starting with a cartoon character, a simple concept of community has created an array of projects and friends.</p>
                <p><br/>Look through our website, and join in on the fun!</p>
            </div>
            <div className="linkWrapper">
                <ul className="linkList">
                    <li className="linkItem"><a href="https://linktr.ee/eolcsvary_art/" target="_blank"><img src={linktree}></img></a></li>
                    <li className="linkItem"><a href="mailto:eric@eolcsvaryart.com" target="_blank"><img src={mail}></img></a></li>
                    <li className="linkItem"><a href="#" target="_blank"><img src={mailchimp}></img></a></li>
                </ul>
            </div>
            <div className="seeMoreWrapper">
                <div className="seeMore">
                    <p>Scroll Down!</p>
                </div>
                <div className="seeMoreArrow">
                    <img src={downArrow}></img>
                </div>
            </div>
        </div>
    </div>
  );
}

