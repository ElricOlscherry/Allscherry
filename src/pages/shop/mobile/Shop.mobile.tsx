import "./Shop.mobile.scss";
import { Helmet } from "react-helmet";
import { Link  } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import { useEffect, useState } from "react";

import logo from "/src/assets/img/allscherryShopLogo.png";
import backToTop from "/src/assets/img/back-to-top.png";


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
                    {/* <ul className="linkList">
                        <li className="linkItem"><a href="https://linktr.ee/eolcsvary_art/" target="_blank"><img src={linktree}></img></a></li>
                        <li className="linkItem"><a href="mailto:eric@eolcsvaryart.com" target="_blank"><img src={mail}></img></a></li>
                        <li className="linkItem"><a href="#" target="_blank"><img src={mailchimp}></img></a></li>
                    </ul> */}
                </div>
            </div>
        </div>
    );
}