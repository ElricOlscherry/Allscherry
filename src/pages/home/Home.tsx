import { useEffect, useState } from 'react';
import HomeMobile from './Home.mobile'

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

    const breakpoint = 768;

    return (
        <div className="App">
            {screenWidth < breakpoint ? <HomeMobile /> : <h1>Desktop not ready yet</h1>}
        </div>
    )
}
