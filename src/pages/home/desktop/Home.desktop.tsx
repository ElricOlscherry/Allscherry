import { Link } from 'react-scroll';
import './Home.desktop.scss';
import pinkEllipse from '/src/assets/shapes/pinkEllipse.svg';
import greyEllipse from '/src/assets/shapes/greyEllipse.svg';
import blueEllipse from '/src/assets/shapes/blueEllipse.svg';
import allsCherryLogo from '/src/assets/img/allscherry-logo-desktop.png';
import linktreeLogo from '/src/assets/img/linktree-footer.png';
import emailLogo from '/src/assets/img/mail-footer.png';
import mailchimpLogo from '/src/assets/img/mailchimp-footer.png';
import sideBubble from '/src/assets/img/side-bubbles-desktop.png';
import verticleBar from '/src/assets/shapes/verticleBar.svg';
import bottomBubbles from '/src/assets/shapes/bottomBubblesDesktop.svg';
export default function HomeDesktop () {
    return (
        <div className="HomeDesktop">
            <div className="hero">
                <div className="leftBar">
                    <img className="verticleBar" id="leftVerticleBar1" src={verticleBar} />
                </div>
                <div className="leftNavWrapper">
                    <img className="verticleBar" id="leftVerticleBar2" src={verticleBar} />
                    <nav className="leftNav">
                        <div className="leftNavLinks">
                            <div className="leftNavLink" id="leftLink1">
                                <Link                         to="expandedInfoText1"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                >
                                    <div className="leftNavLinkIconWrapper">
                                        <img className="leftNavLinkIcon" src={pinkEllipse} />
                                    </div>
                                    <div className="leftNavLinkText"><p>Projects</p></div>
                                </Link>
                            </div>
                            <div className="leftNavLink" id="leftLink2">
                                <a href="#projects">
                                    <div className="leftNavLinkIconWrapper">
                                        <img className="leftNavLinkIcon" src={blueEllipse} />
                                    </div>
                                    <div className="leftNavLinkText"><p>Shop</p></div>
                                </a>
                            </div>
                            <div className="leftNavLink" id="leftLink3">
                                <a href="#contact">
                                    <div className="leftNavLinkIconWrapper">
                                        <img className="leftNavLinkIcon" src={greyEllipse} />
                                    </div>
                                    <div className="leftNavLinkText"><p>Contact</p></div>
                                </a>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className="centerWrapper">
                    <div className="logoImgWrapper">
                        <img className="logoImg" src={allsCherryLogo} />
                        <div className="logoTextWrapper">
                            <p>Feel the wonder,</p>
                            <p>Crave adventure</p>
                        </div>
                    </div>
                    <div className="mainTextBubbleWrapper">
                        <div className="leftBubbleWrapper">
                            <img className="leftBubbleImg" src={sideBubble} />
                        </div>
                        <div className="mainTextWrapper">
                            <div className="mainText">
                                <p>AllsCherry is a brand, an artist, a community, an idea, an art piece. </p>
                                <br />
                                <p>Starting with a cartoon character,a simple concept of community has created an array of projects and friends.</p>
                                <br />
                                <p>Look through our website, and join in on the fun!</p>
                            </div>
                        </div>
                        <div className="rightBubbleWrapper">
                            <img className="rightBubbleImg" src={sideBubble} />
                        </div>
                    </div>
                </div>
                <div className="rightNavWrapper">
                    <div className="rightNav">
                        <div className="rightNavLinks">
                            <div className="rightNavLink" id="rightLink1">
                                <a href="#projects">
                                    <div className="rightNavLinkText"><p>Linktree</p></div>
                                    <div className="rightNavLinkIconWrapper">
                                        <img className="rightNavLinkIcon" src={linktreeLogo} />
                                    </div>
                                </a>
                            </div>
                            <div className="rightNavLink" id="rightLink2">
                                <a href="#projects">
                                    <div className="rightNavLinkText"><p>Email</p></div>
                                    <div className="rightNavLinkIconWrapper">
                                        <img className="rightNavLinkIcon" src={emailLogo} />
                                    </div>
                                </a>
                            </div>
                            <div className="rightNavLink" id="rightLink3">
                                <a href="#contact">
                                    <div className="rightNavLinkText"><p>Subscribe</p></div>
                                    <div className="rightNavLinkIconWrapper">
                                        <img className="rightNavLinkIcon" src={mailchimpLogo} />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <img className="verticleBar" id="rightVerticleBar2" src={verticleBar} />
                </div>
                <div className="rightBar">
                    <img className="verticleBar" id="rightVerticleBar1" src={verticleBar} />
                </div>
            </div>
            <div className="ericInfoWrapper">
                
            </div>
        </div>
    )
}