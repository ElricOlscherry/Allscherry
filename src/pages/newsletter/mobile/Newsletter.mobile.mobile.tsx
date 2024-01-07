import logo from '/src/assets/img/newsletter-logo.svg';
import './Newsletter.mobile.scss';
import { Link as RouterLink } from 'react-router-dom';
import { useState } from 'react';

export default function NewsletterMobile() {
    // state of email input field change color when valid
    const [emailValid, setEmailValid] = useState(false);
    const [inputStyle, setInputStyle] = useState({ backgroundColor: 'white' });
    const [emailSubmitted, setEmailSubmitted] = useState(false);

    const validateEmail = (email: string) => {
        var re = /\S+@\S+\.\S+/;
        const isValid = re.test(email);
        setInputStyle({ backgroundColor: isValid ? 'lightgreen' : 'pink' });
        return isValid;
    }

    return (
        <div className="NewsletterMobile">
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
                        <RouterLink to="/shop"><p>Shop</p></RouterLink>
                    </li>
                    <li className="selectionBarItemProject">
                        <RouterLink to="/"><p>Projects</p></RouterLink>
                    </li>
                    <li className="selectionBarItemContact">
                        <RouterLink to="/contact"><p>Contact</p></RouterLink>
                    </li>
                </ul>
            </div>
            <div className="mainText">
                <p>Content such as local artists, events and all of the latest AllsCherry updates. We want to keep you up to date with our affairs and show off our affiliate artists! If you're interested in being a part of the newsletter, apply below!</p>
            </div>
            <div className="newsletterFormWrapper">
                <form style={emailSubmitted ? { display: 'none' } : {}} className="newsletterForm" name="newsletter" onSubmit={(e) => e.preventDefault()} method="post">
                    <div className="newsletterFormEmail">
                        <input style={inputStyle} onChange={(e) => setEmailValid(validateEmail(e.target.value))} type="email" name="email" />
                    </div>
                    <input type="hidden" name="form-name" value="newsletter" />
                    <div className="newsletterFormSubmit">
                        <button disabled={!emailValid} onClick={() => setEmailSubmitted(true)} type="submit" name="submit" value="Submit">Submit</button>
                    </div>
                </form>
                <div style={emailSubmitted ? { display: 'flex' } : { display: 'none' }} className="newsletterFormSubmitted">
                    <p>Thank you for subscribing!</p>
                </div>
            </div>
        </div>
    )
}
