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
                            <a href="https://www.etsy.com/ca/shop/OlcsvaryCartoons?ref=seller-platform-mcnav" target="_blank"><button className="button">Buy Now</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}