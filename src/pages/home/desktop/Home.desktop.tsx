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
import ericImg from '/src/assets/img/eric-desktop.png';
import cover from "/src/assets/img/Cover.png";
import coverRGB from "/src/assets/img/cover-rgb.jpg";
import wendyAndTheSptrite from "/src/assets/img/wendy-and-the-sprite-with-logo.png";
import page1Cover from "/src/assets/img/page-1-cover-with-logo.png";
import anthology from "/src/assets/img/anthology.png";
import uvfs from "/src/assets/img/uvfs.png";
import comicBlue from "/src/assets/img/comicBlue.png";
import comicGrey from "/src/assets/img/comicGrey.png";
import comicRed from "/src/assets/img/comicRed.png";
import allscherrycomics from "/src/assets/img/allscherrycomics.png";
import allsCherrySign from "/src/assets/img/allscherry-sign-bubbles.png";
import theSpinning from "/src/assets/img/theSpinning.png";
import lookingBack from "/src/assets/img/lookingBack.png";
import crowOnAPerch from "/src/assets/img/crowOnAPerch.png";
import setDraw from "/src/assets/img/setDraw.jpeg";
import crowLogo from "/src/assets/img/crowLogo.png";

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
                <div className="ericWrapper">
                    <img className="ericImg" src={ericImg} />
                    <div className="ericText">
                        <p>Eric Olcsvary</p>
                        <p>That's me!</p>
                    </div>
                </div>
                <div className="mainTextWrapper">
                    <div className="mainText">
                        <h2>Welcome to a world of possibility</h2>
                        <br />
                        <p>My name is Eric Olcsvary, a 22 year old artist with a passion to create things. I make logos, produce music, illustrate comic books, design websites,draw people's pets and occasionally paint.</p>
                        <br />
                        <p>But enough about me, let's talk about you, and why you're here!</p>
                    </div>
                    <div className="mainText2">
                        <p>Scrolling down you will see a list of my favorite projects I've worked on, ones that I'm sure will make you smile.</p>
                        <br />
                        <p> What if I told you, you could be a part of these projects?</p>
                        <br />
                        <p>Have an idea already? Or do you simply seek to be a part of something like this? Contact me below, or simply scroll through what I have to offer, you won't be disappointed. </p>
                    </div>
                </div>
            </div>
            <div className="pageScrollLinksWrapper2">
                <ul className="pageScrollLinksList">
                    <li className="pageScrollLinksItemComics">
                    <Link
                            to="comicWrapper"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        ><p>Comics</p></Link>
                    </li>
                    <li className="pageScrollLinksItemColabs">
                        <Link 
                            to="anthologyImgWrapper"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        ><p>Colabs</p></Link>
                    </li>
                    <li className="pageScrollLinksItemDesign">
                        <Link
                            to="comicsLogo"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        ><p>Design</p></Link>
                    </li>
                    <li className="pageScrollLinksItemPainting">
                        <Link
                            to="paintingWrapper"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        ><p>Painting</p></Link>
                    </li>
                    <li className="pageScrollLinksItemDrawing">
                        <Link
                            to="drawingWrapper"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        ><p>Drawing</p></Link>
                    </li>
                    <li className="pageScrollLinksItemPodcast">
                        <Link
                            to="podcastWrapper"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        ><p>Podcast</p></Link>
                    </li>
                    <li className="pageScrollLinksItemMusic">
                        <Link
                            to="musicWrapper"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        ><p>Music</p></Link>
                    </li>
                </ul>
            </div>
            <div className="comicBookWrapper">
                <div className="comicBookStripeWrapper">
                    <div className="comicBookStripe1"></div>
                    <div className="comicBookStripe2"></div>
                    <div className="comicBookStripe3"></div>
                </div>
                <div className="comicStripWrapper">
                    <img className="comicStrip" src={cover} />
                    <img className="comicStrip" src={coverRGB} />
                    <img className="comicStrip" src={wendyAndTheSptrite} />
                    <img className="comicStrip" src={page1Cover} />
                </div>
                <div className="mainTextWrapper">
                    <div className="leftBubbleWrapper">
                        <img className="leftBubbleImg" src={sideBubble} />
                    </div>
                    <div className="mainText">
                        <h2>AllsCherry Comics, Indie Publishing</h2>
                        <br />
                        <p>The center of AllsCherry, and it's original purpose, was that of creating indie comics! Wendy and the Sprite, and Overflow, are my two main series. They are for all ages, with fun pictures and a large plot!</p>
                    </div>
                    <div className="rightBubbleWrapper">
                            <img className="rightBubbleImg" src={sideBubble} />
                    </div>
                </div>
                <div className="comicButtonWrapper">
                    <a href="#projects" className="comicButton">Check Them Out Here!</a>
                </div>
            </div>
            <div className="anthologyUVFSWrapper">
                <div className="anthologyWrapper">
                    <div className="anthologyStripes">
                        <div className="anthologyStripe1"></div>
                        <div className="anthologyStripe2"></div>
                        <div className="anthologyStripe3"></div>
                        <img src={anthology} />
                    </div>
                    <div className="anthologyTextWrapper">
                        <h2>The AllsCherry Anthology</h2>
                        <p>Bringing together a collection of 8 unique stories all by a different artist, the AllsCherry Anthology's goal is to unite creators to make something special, and to show off our talents! The first of many to come, this book is the embodiment of AllsCherry's goal!</p>
                    </div>
                    <div className="anthologyButtonWrapper">
                        <a href="#projects" className="anthologyButton">Check It Out Here!</a>
                    </div>
                </div>
                <div className="uvfsWrapper">
                    <div className="uvfsStripes">
                        <div className="uvfsStripe1"></div>
                        <div className="uvfsStripe2"></div>
                        <div className="uvfsStripe3"></div>
                        <img src={uvfs} />
                    </div>
                    <div className="uvfsTextWrapper">
                        <h2>UVFS x AllsCherry</h2>
                        <p>In collaboration with The University of Victoria's Fashion Society, AllsCherry coordinated and produced a fashion magazine to promote story through clothing, and how those stories help shape a person. Be yourself, for yourself!</p>
                    </div>
                    <div className="uvfsButtonWrapper">
                        <a href="#projects" className="uvfsButton">Check It Out Here!</a>
                    </div>
                </div>
            </div>
            <div className="designWrapper">
                <div className="designStripes">
                    <div className="designStripe1"></div>
                    <div className="designStripe2"></div>
                    <div className="designStripe3"></div>
                    <div className="designStripe4"></div>
                </div>
                <div className="logoWrapper">
                    <div className="logoImgWrapper">
                        <img className="logoImg" src={allsCherrySign} />
                    </div>
                </div>
                <div className="mainTextBubbleWrapper">
                    <div className="leftBubbleWrapper">
                        <img className="leftBubbleImg" src={sideBubble} />
                    </div>
                    <div className="mainTextWrapper">
                        <div className="mainText">
                            <h2>AllsCherry, a symbol of community and my work as an artist</h2>
                            <br />
                            <p>The logo is a play on my last name, Olcsvary, and an old nickname from high school. Originally a publishing label for my comics, it has now become something more; an opportunity to create not just for myself, but with others!</p>
                        </div>
                    </div>
                    <div className="rightBubbleWrapper">
                        <img className="rightBubbleImg" src={sideBubble} />
                    </div>
                </div>
                <div className="comicImgWrapper">
                    <img src={comicGrey} alt="comic" className="comicImgGrey" />
                    <img src={comicRed} alt="comic" className="comicImgRed" />
                    <img src={comicBlue} alt="comic" className="comicImgBlue" />
                </div>
                <div className="allsCherryComicsLogoWrapper">
                    <img src={allscherrycomics} alt="logo" className="allsCherryComicsLogoImg" />
                </div>
            </div>
            <div className="paintingWrapper">
                <div className="paintingStripes">
                    <div className="paintingStripe1"></div>
                    <div className="paintingStripe2"></div>
                    <div className="paintingStripe3"></div>
                </div>
                <div className="paintingImgWrapper">
                    <img src={theSpinning} alt="painting" className="paintingImg" />
                    <img src={lookingBack} alt="painting" className="paintingImg" />
                </div>
                <div className="mainTextBubbleWrapper">
                    <div className="leftBubbleWrapper">
                        <img className="leftBubbleImg" src={sideBubble} />
                    </div>
                    <div className="mainTextWrapper">
                        <div className="mainText">
                            <h2>Painting Night Terrors</h2>
                            <br />
                            <p>Some of my favorite early paintings are my Night Terror paintings. Suffering from night terrors for many years as a child, these simple paintings to one person, is a personal hell to another. It made my love for painting and expression that much stronger.</p>
                        </div>
                    </div>
                    <div className="rightBubbleWrapper">
                        <img className="rightBubbleImg" src={sideBubble} />
                    </div>
                </div>
            </div>
            <div className="podcastWrapper">
                <div className="podcastStripes">
                    <div className="podcastStripe1"></div>
                    <div className="podcastStripe2"></div>
                    <div className="logoWrapper">
                    <div className="logoImgWrapper">
                        <img className="logoImg" src={crowOnAPerch} />
                    </div>
                    </div>
                    <div className="podcastStripe3"></div>
                    <div className="podcastStripe4">
                    </div>
                </div>

                <div className="mainTextBubbleWrapper">
                    <div className="leftBubbleWrapper">
                        <img className="leftBubbleImg" src={sideBubble} />
                    </div>
                    <div className="mainTextWrapper">
                        <div className="mainText">
                            <h2>Crow on a Perch</h2>
                            <br/>
                            <p>Season 1 of this podcast just ended! The show is about our lives as growing young adults in a world that almost seems to push art and critical thinking to the sidelines. Sharing our own growth and experiences, the pod is meant to show that nobody is perfect, and that fact is beautiful.</p>
                        </div>
                    </div>
                    <div className="rightBubbleWrapper">
                        <img className="rightBubbleImg" src={sideBubble} />
                    </div>
                </div>
                <div className="buttonWrapper">
                    <a href="#projects" className="button">Now on spotify!</a>
                </div>
                <div className="setDrawWrapper">
                    <img src={setDraw} alt="comic" className="setDrawImg" />
                </div>
                <div className="crowLogoWrapper">
                    <img src={crowLogo} alt="comic" className="crowLogoImg" />
                </div>
                <div className="spotifyEmbed">
                    <div className="embed">
                    <iframe src="https://open.spotify.com/embed/episode/0l4vnmjeQovlJD7IWZhIGr?utm_source=generator&theme=0" width="75%" height="500" frameBorder="0"  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                    </div>
                </div>
                <div className="podcastBottomStripes">
                    <div className="podcastBottomStripe1"></div>
                    <div className="podcastBottomStripe2"></div>
                    <div className="podcastBottomStripe3"></div>
                </div>
            </div>
        </div>
    )
}