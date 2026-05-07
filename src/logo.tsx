import { NavLink } from "react-router-dom"
import { useState, useEffect, useCallback } from "react";
export function Logo() {
    const [sourceIcon, setSourceIcon] = useState<string>("https://raw.githubusercontent.com/DOGNET-SUPERB-TECHNOLOGIES/cdn/main/dognetTechnologies.png");
    const thisSet = useCallback(() => {
        if (window.innerWidth < 600) {
            setSourceIcon("https://raw.githubusercontent.com/DOGNET-SUPERB-TECHNOLOGIES/cdn/main/favicon.png");
            return true;
        }
        setSourceIcon("https://raw.githubusercontent.com/DOGNET-SUPERB-TECHNOLOGIES/cdn/main/dognetTechnologies.png");
        return true;
    }, [])
    useEffect(() => {
        thisSet();
        window.addEventListener('resize', () => {
            return thisSet();
        });
    }, [])
    return <NavLink to="/" className="heading_logo standard noLink">
                <img className="main-logo" 
                src={sourceIcon}/>
            </NavLink>
}