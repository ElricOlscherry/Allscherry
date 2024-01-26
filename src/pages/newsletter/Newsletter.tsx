import { useEffect, useState } from 'react';
import HomeMobile from './mobile/Newsletter.mobile.tsx';


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

    const breakpoint = 950;

    return (
        <div className="App">
            {screenWidth < breakpoint ? <HomeMobile /> : <></>}
        </div>
    )
}
