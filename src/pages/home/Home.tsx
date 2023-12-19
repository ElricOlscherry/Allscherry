import { useEffect, useState } from 'react';
import HomeMobile from './mobile/Home.mobile'
import HomeDesktop from './desktop/Home.desktop'

export default function Home() {
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

    const breakpoint = 1050;

    return (
        <div className="App">
            {screenWidth < breakpoint ? <HomeMobile /> : <HomeDesktop />}
        </div>
    )
}
