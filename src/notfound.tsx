import { NavLink } from "react-router-dom";

export function NotFound() {
    return <main>
        <div>
            <h1 className="notFound">404</h1>
            <p className="ghost">The page you were looking for was not found.</p>
        </div>
        <NavLink to="/" className={"noLink standardButton"}>
            Go Home
        </NavLink>
    </main>
}