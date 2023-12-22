import { useEffect, useState } from 'react';
import ShopMobile from './mobile/Shop.mobile'

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
            {screenWidth < breakpoint ? <ShopMobile /> : <h1>Shop desktop is not ready.</h1>}
        </div>
    )
}
