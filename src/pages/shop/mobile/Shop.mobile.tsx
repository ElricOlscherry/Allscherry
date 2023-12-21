import "./Shop.mobile.scss";
import { Helmet } from "react-helmet";
import { Link  } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import { useEffect, useState } from "react";

import logo from "/src/assets/img/allscherryShopLogo.png";
import backToTop from "/src/assets/img/back-to-top.png";
import instagramLogo from "/src/assets/img/instagramLogo.png";
import etsyLogo from "/src/assets/img/etsyLogo.png";
import bmacLogo from "/src/assets/img/bmacLogo.png";
import shopHero from "/src/assets/img/shopHero.jpeg";
import wendyLogo from "/src/assets/img/wendyLogo.png";
import wendyAndTheSptrite from "/src/assets/img/wendy-and-the-sprite-with-logo.png";
import originsLogo from "/src/assets/img/originsLogo.png";
import awakeningCover from "/src/assets/img/page-1-cover-with-logo.png";
import awakeningLogo from "/src/assets/img/awakeningLogo.png";
import woodLogo from "/src/assets/img/woodLogo.png";
import woodCover from "/src/assets/img/Cover.png";
import overflowHero from "/src/assets/img/overflowHero.jpeg";
import overflowLogo from "/src/assets/img/overflowLogo.png";
import overflowCover from "/src/assets/img/overflowCover.jpeg";
import overflowListing from "/src/assets/img/overflowListing.png";
import anthologyHero from "/src/assets/img/anthologyHero.png";
import anthologyLogo from "/src/assets/img/anthologyLogo.png";
import anthologyCover from "/src/assets/img/anthologyCover.png";
export default function ShopMobile() {
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
        <div className="shopMobile">
            <Helmet>
                <title>AllsCherry - Shop</title>
            </Helmet>
            <div className="backToTop">
                {showBackToTop && (
                    <Link
                        to="firstBlock"
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
                        <li className="selectionBarItemShop"><p>Shop</p></li>
                        <li className="selectionBarItemProject">
                            <RouterLink
                                to="/"
                            ><p>Projects</p>
                            </RouterLink>
                        </li>
                        <li className="selectionBarItemContact"><p>Contact</p></li>
                    </ul>
                </div>
                <div className="mainText">
                    <p><br/>Welcome to the AllsCherry Shop!</p>
                    <p><br/>We've got comics, posters, apparel, and we accept donations to help us with upcoming projects!</p>
                    <p><br/>Check out what we have below!</p>
                </div>
                <div className="linkWrapper">
                    <ul className="linkList">
                        <li className="linkItem"><a href="https://www.etsy.com/ca/shop/OlcsvaryCartoons?ref=seller-platform-mcnav" target="_blank"><img src={etsyLogo}></img></a></li>
                        <li className="linkItem"><a href="https://www.buymeacoffee.com/allscherry" target="_blank"><img src={bmacLogo}></img></a></li>
                        <li className="linkItem"><a href="https://www.instagram.com/allscherrycomics/" target="_blank"><img src={instagramLogo}></img></a></li>
                    </ul>
                </div>
            </div>
            <div className="wendyWrapper">
                <div className="backdropImgWrapper">
                    <img className="backdropImg" src={shopHero} alt="backdrop" />
                    <div className="wendyLogoWrapper">
                        <img className="wendyLogo" src={wendyLogo} alt="wendy logo" />
                    </div>
                </div>
                <div className="wendyStripes">
                    <div className="wendyStripe1"></div>
                    <div className="wendyStripe2"></div>
                    <div className="wendyStripe3"></div>
                </div>
                <div className="wendyTextWrapper">
                    <div className="wendyText">
                        <h3>Welcome to my first ever comic book series!</h3>
                        <br/>
                        <p>Wendy and Sprite traverse the Grey Planet in search of their loved ones and an answer to the sudden Shadow Nymph attacks. Confronted by many obstacles along the way, they slowly uncover the secrets of the planet, and the ever growing Fading.</p>
                    </div>
                </div>
                <div className="shopListingWrapper">
                    <div className="thumbnailImgWrapper">
                        <img className="thumbnailImg" src={wendyAndTheSptrite} alt="wendy and the sprite" />
                    </div>
                    <div className="titleAndButtonWrapper">
                        <div className="titleWrapper">
                            <img className="titleLogo" src={originsLogo} alt="wendy logo" />
                        </div>
                        <div className="buttonWrapper">
                            <a href="https://www.etsy.com/ca/listing/1024627608" target="_blank"><button className="button">Buy Now</button></a>
                        </div>
                    </div>
                </div>
                <div className="shopListingWrapper">
                    <div className="thumbnailImgWrapper">
                        <img className="thumbnailImg" src={awakeningCover} alt="wendy and the sprite" />
                    </div>
                    <div className="titleAndButtonWrapper">
                        <div className="titleWrapper">
                            <img className="titleLogo" src={awakeningLogo} alt="wendy logo" />
                        </div>
                        <div className="buttonWrapper">
                            <a href="https://www.etsy.com/ca/listing/1105783040" target="_blank"><button className="button">Buy Now</button></a>
                        </div>
                    </div>
                </div>
                <div className="shopListingWrapper">
                    <div className="thumbnailImgWrapper">
                        <img className="thumbnailImg" src={woodCover} alt="wendy and the sprite" />
                    </div>
                    <div className="titleAndButtonWrapper">
                        <div className="titleWrapper">
                            <img className="titleLogo" src={woodLogo} alt="wendy logo" />
                        </div>
                        <div className="buttonWrapper">
                            <a href="https://www.etsy.com/ca/listing/1224735155" target="_blank"><button className="button">Buy Now</button></a>
                        </div>
                    </div>
                </div>
                <div className="wendyStripes" style={{transform: "rotateX(180deg)", padding: " 0 0 50px 0"}}>
                    <div className="wendyStripe1"></div>
                    <div className="wendyStripe2"></div>
                    <div className="wendyStripe3"></div>
                </div>
            </div>
            <div className="overflowWrapper">
                <div className="backdropImgWrapper">
                    <img className="backdropImg" src={overflowHero} alt="backdrop" />
                    <div className="overflowLogoWrapper">
                        <img className="overflowLogo" src={overflowLogo} alt="wendy logo" />
                    </div>
                </div>
                <div className="overflowStripes">
                    <div className="overflowStripe1"></div>
                    <div className="overflowStripe2"></div>
                    <div className="overflowStripe3"></div>
                </div>
                <div className="overflowTextWrapper">
                    <div className="overflowText">
                        <h3>Welcome to my second comic series!</h3>
                        <br/>
                        <p>Four adventurers search an ancient underwater land, seemingly inhabited by an advanced civilization. Exploring the broken down and rotted wasteland, they come across mutated creatures and robots, quickly forgetting about their Faded home above. </p>
                    </div>
                </div>
                <div className="shopListingWrapper">
                    <div className="thumbnailImgWrapper">
                        <img className="thumbnailImg" src={overflowCover} alt="wendy and the sprite" />
                    </div>
                    <div className="titleAndButtonWrapper">
                        <div className="titleWrapper">
                            <img className="titleLogo" src={overflowListing} alt="wendy logo" />
                        </div>
                        <div className="buttonWrapper">
                            <a href="https://www.etsy.com/ca/listing/1430283179" target="_blank"><button className="button">Buy Now</button></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="anthologyWrapper">
                <div className="backdropImgWrapper">
                    <img className="backdropImg" src={anthologyHero} alt="backdrop" />
                    <div className="anthologyLogoWrapper">
                        <img className="anthologyLogo" src={anthologyLogo} alt="wendy logo" />
                    </div>
                </div>
                <div className="anthologyStripes">
                    <div className="anthologyStripe1"></div>
                    <div className="anthologyStripe2"></div>
                    <div className="anthologyStripe3"></div>
                </div>
                <div className="anthologyTextWrapper">
                    <div className="anthologyText">
                        <h3>Welcome to<br/>The AllsCherry Anthology!</h3>
                        <br/>
                        <p>This book is the first of many collaborative projects seeking to unite artists to create something special and impactful. Filled with 8 different artists, each with their own story to tell, our first Anthology showcases the talents around Southwestern Ontario!</p>
                    </div>
                </div>
                <div className="shopListingWrapper">
                    <div className="thumbnailImgWrapper">
                        <img className="thumbnailImg" src={anthologyCover} alt="wendy and the sprite" />
                    </div>
                    <div className="titleAndButtonWrapper">
                        <div className="titleWrapper">
                            <img className="titleLogo" src={anthologyLogo} alt="wendy logo" />
                        </div>
                        <div className="buttonWrapper">
                            <a href="https://www.etsy.com/ca/listing/1024627608" target="_blank"><button className="button">Buy Now</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
