import "./Home.scss";
import { Helmet } from "react-helmet";
import { Link  } from "react-scroll";
import { useEffect, useState } from "react";

// image imports
import logo from "../../assets/img/allscherry-landing.png";
import linktree from "../../assets/img/linktree-footer.png";
import mail from "../../assets/img/mail-footer.png";
import mailchimp from "../../assets/img/mailchimp-footer.png";
import downArrow from "../../assets/img/downArrow.svg";
import eric from "../../assets/img/eric.png";
import ericBubble from "../../assets/img/eric-bubbles.png";
import bottomBubbles from "../../assets/img/bottom-bubbles.png";
import backToTop from "../../assets/img/back-to-top.png";
import cover from "../../assets/img/Cover.png";
import coverRGB from "../../assets/img/cover-rgb.jpg";
import wendyAndTheSptrite from "../../assets/img/wendy-and-the-sprite-with-logo.png";
import page1Cover from "../../assets/img/page-1-cover-with-logo.png";
import anthology from "../../assets/img/anthology.png";
import uvfs from "../../assets/img/uvfs.png";
import comicsLogo from "../../assets/img/comicsLogo.png";
import comicBlue from "../../assets/img/comicBlue.png";
import comicGrey from "../../assets/img/comicGrey.png";
import comicRed from "../../assets/img/comicRed.png";
import allscherrycomics from "../../assets/img/allscherrycomics.png";
import crowOnAPerch from "../../assets/img/crowOnAPerch.png";
import setDraw from "../../assets/img/setDraw.jpeg";
import crowLogo from "../../assets/img/crowLogo.png";

export default function Home() {
    const [showBackToTop, setShowBackToTop] = useState(false);

    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
    const handleScroll = () => {
      if (window.scrollY > 1500) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    return (
        <div className="home">
            <Helmet>
                <title>AllsCherry - Home</title>
            </Helmet>
            <div className="backToTop">
                {showBackToTop && (
                    <Link
                        to="expandedInfoText1"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        <img src={backToTop}  alt="back to top" className="backToTopImg" />
                    </Link>
                )}
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
                        <li className="selectionBarItemShop"><a href="https://www.etsy.com/ca/shop/OlcsvaryCartoons?ref=seller-platform-mcnav" target="_blank"><p>Shop</p></a></li>
                        <li className="selectionBarItemProject">
                            <Link
                                to="pageScrollLinksWrapper"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}>
                            <p>Projects</p>
                            </Link>
                        </li>
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
                        <li className="pageScrollLinksItemPainting"><p>Painting</p></li>
                        <li className="pageScrollLinksItemDrawing"><p>Drawing</p></li>
                    </ul>
                </div>
                <div className="pageScrollLinks2Wrapper">
                    <ul className="pageScrollLinksList2">
                        <li className="pageScrollLinksItemPodcast"><p>Podcast</p></li>
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
            <div className="comicTextWrapper">
                <div className="comicText">
                    <h2>AllsCherry Comics, Indie Publishing</h2>
                    <br />
                    <p>The center of AllsCherry, and it's original purpose, was that od creating indie comics! Wendy and the Sprite, and Overflow, are my two main series. They are for all ages, with fun pictures and a large plot!</p>
                </div>
                <div className="comicBtnWrapper">
                    <a href="https://www.etsy.com/ca/shop/OlcsvaryCartoons?ref=seller-platform-mcnav&section_id=34381204" target="_blank">
                        <button className="comicBtn">
                            Check them out here!
                        </button>
                    </a>
                </div>
            </div>
            <div className="stripeDivider">
                <div className="dark"></div>
                <div className="background"></div>
                <div className="light"></div>
                <div className="background"></div>
                <div className="lighter"></div>
            </div>
            <div className="anthologyWrapper">
                <div className="anthologyImgWrapper">
                    <img src={anthology} alt="anthology" className="anthologyImg" />
                </div>
                <div className="anthologyText">
                    <h2>The AllsCherry Anthology</h2>
                    <br />
                    <p>Bringing together a collection of 8 unique stories all by a different artist, the AllsCherry Anthology’s goal is to unite creators to make something special, and to show off our talents! The first of many to come, this book is the embodiment of AllsCherry’s goal!</p>
                </div>
                <div className="anthologyBtnWrapper">
                    <button className="anthologyBtn">
                        Check them out here!
                    </button>
                </div>
            </div>
            <div className="stripeDivider">
                <div className="dark"></div>
                <div className="background"></div>
                <div className="light"></div>
                <div className="background"></div>
                <div className="lighter"></div>
            </div>
            <div className="uvfsWrapper">
                <div className="uvfsImgWrapper">
                    <img src={uvfs} alt="uvfs" className="uvfsImg" />
                </div>
                <div className="uvfsText">
                    <h2>UVFS x AllsCherry</h2>
                    <br />
                    <p>UVFS is a podcast I host with my friends, where we talk about movies, games, and other media. We have a lot of fun, and we hope you do too!</p>
                </div>
                <div className="uvfsBtnWrapper">
                    <button className="uvfsBtn">
                        Check it out here!
                    </button>
                </div>
            </div>
            <div className="comicsInfo">
                <div className="stripeDivider2">
                    <div className="dark"></div>
                    <div className="background"></div>
                    <div className="light"></div>
                    <div className="background"></div>
                    <div className="lighter"></div>
                    <div className="background"></div>
                    <div className="lightest"></div>
                </div>
                <div className="comicsLogo">
                    <img src={comicsLogo} alt="logo" className="comicsLogoImg" />
                </div>
                <div className="comicsText">
                    <h3>AllsCherry, a symbol of community and my work as an artist</h3>
                    <br />
                    <p>The logo is a play on my last name, Olcsvary, and an old nickname from high school. Originally a publishing label for my comics, it has now become something more; an opportunity to create not just for myself, but with others!</p>
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
            <div className="crowOnAPerchWrapper">
                <div className="stripeDivider3">
                    <div className="dark"></div>
                    <div className="background"></div>
                    <div className="light"></div>
                    <div className="background"></div>
                    <div className="lighter"></div>
                    <div className="background"></div>
                    <div className="lightest"></div>
                </div>
                <div className="crowOnAPerchImgWrapper">
                    <img src={crowOnAPerch} alt="comic" className="crowOnAPerchImg" />
                </div>
                <div className="crowOnAPerchText">
                    <h3>Crow on a Perch</h3>
                    <br />
                    <p>Season 1 of this podcast just ended! The show is about our lives as growing young adults in a world that almost seems to push art and critical thinking to the sidelines. Sharing our own growth and experiences, the pod is meant to show that nobody is perfect, and that fact is beautiful.</p>
                </div>
                <div className="crowOnAPerchBtnWrapper">
                    <a href="https://open.spotify.com/show/3ibtTwslpMAqkeZCNL4fLN?si=71568c0821ea46e0&nd=1&dlsi=48cdd0321f1840d3" target="_blank">
                        <button className="crowOnAPerchBtn">
                            Now on Spotify!
                        </button>
                    </a>
                </div>
                <div className="setDrawWrapper">
                    <img src={setDraw} alt="comic" className="setDrawImg" />
                </div>
                <div className="crowLogoWrapper">
                    <img src={crowLogo} alt="comic" className="crowLogoImg" />
                </div>
            </div>
        </div>
  );
}