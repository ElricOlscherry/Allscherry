import { useEffect, useState } from 'react';
import ContactMobile from './mobile/Contact.mobile'
import ContactDesktop from './desktop/Contact.desktop'

export default function Contact() {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    
    const handleResize = () => {
    setScreenWidth(window.innerWidth);
    };

    useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
        window.removeEventListener("resize", handleResize);
    };
    }, []); 

    const breakpoint = 950;

    return (
        <div className="App">
            {screenWidth < breakpoint ? <ContactMobile /> : <ContactDesktop />}
        </div>
    )
}