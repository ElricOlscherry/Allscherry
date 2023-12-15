import "./Home.scss";

export default function Home() {
  return (
    <div className="home">
        <div className="firstBlock">
            <div className="logoSloganWrapper">
                <div className="logoWrapper">
                    <img className="mainLogo" src="/src/assets/allscherry-landing.png" alt="logo" />
                </div>
                <div className="sloganWrapper">
                    <div className="slogan">
                        <h1>Feel the wonder,</h1>
                        <h1>Crave Adventure</h1>
                        <img className="sloganImage" src="/src/assets/wonder-bar.svg" alt="wonder-bar" />
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
                    <li className="linkItem"><a href="https://linktr.ee/eolcsvary_art/"><img src="/src/assets/linktree-footer.png"></img></a></li>
                    <li className="linkItem"><a href="mailto:eric@eolcsvaryart.com"><img src="/src/assets/mail-footer.png"></img></a></li>
                    <li className="linkItem"><a href="#"><img src="/src/assets/mailchimp-footer.png"></img></a></li>
                </ul>
            </div>
            <div className="seeMoreWrapper">
                <div className="seeMore">
                    <p>Scroll Down!</p>
                </div>
                <div className="seeMoreArrow">
                    <img src="/src/assets/downArrow.svg"></img>
                </div>
            </div>
        </div>
    </div>
  );
}

