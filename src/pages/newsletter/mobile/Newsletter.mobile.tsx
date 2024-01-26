import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import logo from '/src/assets/img/newsletter-logo.svg';
import axios from 'axios';
import './Newsletter.mobile.scss';

export default function NewsletterMobile() {
    const [emailValid, setEmailValid] = useState(false);
    const [inputStyle, setInputStyle] = useState({ backgroundColor: 'white' });
    const [emailSubmitted, setEmailSubmitted] = useState(false);
    const [email, setEmail] = useState("");

    const validateEmail = (email: string) => {
        const re = /\S+@\S+\.\S+/;
        const isValid = re.test(email);
        setInputStyle({ backgroundColor: isValid ? 'lightgreen' : 'pink' });
        setEmail(email);
        setEmailValid(isValid);
    }

    const handleSubmit = async () => {
        try {
            setEmailSubmitted(true);

            const response = await axios.post(
                "https://faas-tor1-70ca848e.doserverless.co/api/v1/web/fn-999ad412-e91b-4c9e-878c-fbf428401dfb/AllsCherry-MailChimp/pushToMailchimp",
                { email },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Basic MThmODJlNzEtMDc3Ny00ZWRaWFNHV2dzcmR1a0xQN3FQa1BnLTFVTm5nNThQaUhZZ2E5NlFTMzEyRzVGaWJnV1ZsYjRuZnBwLXNnMTZFc1VFOGdOMFJYb3dpWEJNNFJsNEF3'
                    },
                }
            );

            if (response.status !== 200) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = response.data;

            // Handle the response data as needed
            console.log(data);
            console.log(email);
        } catch (error) {
            // Handle errors
            console.error(error);
        }
    };

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
                <form
                    style={emailSubmitted ? { display: 'none' } : {}}
                    onSubmit={(e) => e.preventDefault()} // Prevent default form submission
                    className="newsletterForm"
                    name="newsletter"
                    method="post"
                >
                    <div className="newsletterFormEmail">
                        <input
                            style={inputStyle}
                            onChange={(e) => validateEmail(e.target.value)}
                            type="email"
                            name="email"
                            required // Add required attribute for better form validation
                        />
                    </div>
                    <div className="newsletterFormSubmit">
                        <button disabled={!emailValid} onClick={() => handleSubmit()} type="button" name="submit">
                            Submit
                        </button>
                    </div>
                </form>
                <div style={emailSubmitted ? { display: 'flex' } : { display: 'none' }} className="newsletterFormSubmitted">
                    <p>Thank you for subscribing!</p>
                </div>
            </div>
        </div>
    );
}
