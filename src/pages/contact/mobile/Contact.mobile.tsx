import { Link as RouterLink } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import "./Contact.mobile.scss";
import logo from "/src/assets/img/allscherry-logo-grey.png";
import fiverrLogo from "/src/assets/img/fiverr.png";
import { useState } from 'react';
export default function ContactMobile() {
    const [bio, setBio] = useState("I am primarily an illustrator and graphic designer. I have written, illustrated and produced 5 of my own published graphic novels...") // [bio, setBio
    const [showMore, setShowMore] = useState(false); // [showMore, setShowMore]
    const showMoreText = showMore ? "Show Less" : "Show More";
    return (
        <div className="contactMobile">
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
                        <li className="selectionBarItemShop">
                            <RouterLink
                                to="/shop"
                            ><p>Shop</p>
                            </RouterLink>
                        </li>
                        <li className="selectionBarItemProject">
                            <RouterLink
                                to="/"
                            ><p>Project</p>
                            </RouterLink>
                        </li>
                        <li className="selectionBarItemContact"><p>Contact</p></li>
                    </ul>
                </div>
            </div>
            <div className="fiverrWidgetWrapper">
                <div className="fiverrLogoWrapper">
                    <img src={fiverrLogo} alt="fiverrLogo" />
                </div>
                <div className="fiverrWidget">
                    <div className="profileImgWrapper">
                        <img src='https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_original/v1/attachments/profile/photo/8fbdf929674d5323f50a0b2d79c63a00-1700281767487/263c2298-ff53-41f1-929f-ae848a62db59.JPG' className='profileImg'/>
                    </div>
                    <div className="profileNameWrapper">
                        <p className="profileName">Eric Olcsvary</p>
                    </div>
                    <div className="profileTitleWrapper">
                        <p className="profileTitle">Artist</p>
                    </div>
                    <div className="bioWrapper">
                        <p className="bio">{bio}</p>
                        <button className="showMoreButton" onClick={() => {
                            if (!showMore) {
                                setBio("I am primarily an illustrator and graphic designer. I have written, illustrated and produced 5 of my own published graphic novels, one of which I collaborated on with artists to create an Anthology and host a dinner party. I have coded/designed my own website, and I am currently finishing an album; written and produced by myself, as well as my 6th graphic novel. I also have experience in web design, portrait commissions, acrylic painting and branding/design for businesses. I like to stay busy and creative, so there is no challenge I wouldn't dare try!")
                                setShowMore(true)
                            } else {
                                setBio("I am primarily an illustrator and graphic designer. I have written, illustrated and produced 5 of my own published graphic novels...")
                                setShowMore(false)
                            }
                        }}>{showMoreText}</button>
                    </div>
                    <Carousel className="carousel" showThumbs={false}>
                        <div className="gigWrapper">
                            <img src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs3/353343412/original/773b5413d7efb00147a75e42dcecd441d705e87b/draw-your-dog-or-cat.jpg" alt="Dog1" />
                            <p className="gigTitle">I will make a unique drawing of your pet</p>
                            <button className="gigBtn">Order Now</button>
                        </div>
                        <div className='gigWrapper'>
                            <img src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/350902024/original/34c9a9f9bc1b39d2cb3e1f9a627ee5dcae28664c/design-a-logo-for-you.jpg" alt="logo1" />
                            <p className="gigTitle">I will design a logo for you</p>
                            <button className="gigBtn">Order Now</button>
                        </div>
                        <div className='gigWrapper'>
                            <img src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/352552165/original/cd595348704513a19e450ae2bd9de3737f0b6f9b/format-your-book-or-magazine.jpg" alt="logo2" />
                            <p className="gigTitle">I will format your book or magazine</p>
                            <button className="gigBtn">Order Now</button>
                        </div>
                    </Carousel>
                </div>
            </div>
        </div>
    )
}