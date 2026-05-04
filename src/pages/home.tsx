import React from "react";
import { NavLink } from "react-router-dom";
export function Home() {
    return <main>
        <div className="homeStripe">
            <h1 className="title">Glossary Solutions and Practical Learning</h1>
            <NavLink to="/arpanet">Learn about ARPANET</NavLink>
            <NavLink to="/arpanet">Learn about ARPANET</NavLink>
            <NavLink to="/arpanet">Learn about ARPANET</NavLink>
            <NavLink to="/arpanet">Learn about ARPANET</NavLink>
            <NavLink to="/arpanet">Learn about ARPANET</NavLink>
            <NavLink to="/arpanet">Learn about ARPANET</NavLink>
            <NavLink to="/arpanet">Learn about ARPANET</NavLink>
        </div>
    </main>
}