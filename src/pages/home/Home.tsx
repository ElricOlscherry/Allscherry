import "./Home.scss";
import { Helmet } from "react-helmet";
import { Link  } from "react-scroll";


// image imports
import logo from "../../assets/allscherry-landing.png";
import linktree from "../../assets/linktree-footer.png";
import mail from "../../assets/mail-footer.png";
import mailchimp from "../../assets/mailchimp-footer.png";
import downArrow from "../../assets/downArrow.svg";
import eric from "../../assets/eric.png";
import ericBubble from "../../assets/eric-bubbles.png";
import bottomBubbles from "../../assets/bottom-bubbles.png";
import backToTop from "../../assets/back-to-top.png";
import cover from "../../assets/Cover.png";
import coverRGB from "../../assets/cover-rgb.jpg";
import wendyAndTheSptrite from "../../assets/wendy-and-the-sprite-with-logo.png";
import page1Cover from "../../assets/page-1-cover-with-logo.png";

export default function Home() {
  return (
    <div className="home">
        <Helmet>
            <title>AllsCherry - Home</title>
        </Helmet>
        <div className="backToTop">
            <Link
                to="firstBlock"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
            ><img src={backToTop} alt="BackToTop" />
            </Link>
        </div>
        <div className="firstBlock">
            <div className="logoSloganWrapper">
                <div className="logoWrapper">
                    <img className="mainLogo" src={logo} alt="logo" />
                </div>
                <div className="sloganWrapper">
                    <div className="slogan">
                        <h1>Feel the wonder,</h1>
                        <h1>Crave Adventure</h1>
                    </div>
                </div>
            </div>
            <div className="selectionBarWrapper">
                <ul className="selectionBarList">
                    <li className="selectionBarItemShop"><p>Shop</p></li>
                    <li className="selectionBarItemProject"><p>Projects</p></li>
                    <li className="selectionBarItemContact"><p>Contact</p></li>
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
            <div className="ericWrapper">
                <div className="eric">
                    <img src={eric} alt="Eric" className="ericImg" />
                </div>
            </div>
            <div className="ericBubbleWrapper">
                <div className="ericBubble">
                    <img src={ericBubble} alt="Eric" className="ericBubbleImg" />
                </div>
            </div>
        </div>
        <div className="expandedInfoWrapper">
            <div className="expandedInfoText1">
                <p>Welcome to a world of possibility</p>
                <p><br/>My name is Eric Olcsvary, a 23 year old artist with a passion to create things,
                        ranging from logos to websites, music and comic books.
                </p>
                <p><br /> But enough about me, let's talk about you, and why you're here!</p>
            </div>
            <div className="expandedInfoText2">
                <p>Scrolling down you will see a list of my favorite projects I've worked on, ones that I'm sure will make you smile.</p>
                <p><br/>If you have any questions, or wish to work with me on a collaborative project, shoot me an email!</p>
            </div>
            <div className="bottomBubbles">
                <img src={bottomBubbles} alt="bottom bubbles" className="bottomBubblesImg" />
            </div>
            <div className="pageScrollLinksWrapper">
                <ul className="pageScrollLinksList">
                    <li className="pageScrollLinksItemComics"><p>Comics</p></li>
                    <li className="pageScrollLinksItemColabs"><p>Colabs</p></li>
                    <li className="pageScrollLinksItemDesign"><p>Design</p></li>
                    <li className="pageScrollLinksItemPainting"><p>Painting</p></li>
                    <li className="pageScrollLinksItemDrawing"><p>Drawing</p></li>
                </ul>
            </div>
            <div className="pageScrollLinks2Wrapper">
                <ul className="pageScrollLinksList2">
                    <li className="pageScrollLinksItemPodcast"><p>Podcst</p></li>
                    <li className="pageScrollLinksItemMusic"><p>Music</p></li>
                </ul>
            </div>
        </div>
        <div className="stripeDivider">
            <div className="dark"></div>
            <div className="background"></div>
            <div className="light"></div>
            <div className="background"></div>
            <div className="lighter"></div>
        </div>
        <div className="comicWrapper">
                <div className="leftCover">
                    <div className="wendyAndTheSprite">
                        <img src={wendyAndTheSptrite} alt="cover" className="wendyAndTheSpriteImg" />
                    </div>
                    <div className="page1Cover">
                        <img src={page1Cover} alt="cover" className="page1CoverImg" />
                    </div>
                </div>
                <div className="rightCover">
                    <div className="cover">
                        <img src={cover} alt="cover" className="coverImg" />
                    </div>
                    <div className="coverRGB">
                        <img src={coverRGB} alt="cover" className="coverRGBImg" />
                    </div>
                </div>
            </div>
    </div>
  );
}

