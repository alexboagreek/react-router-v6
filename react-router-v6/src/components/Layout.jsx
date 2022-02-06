import { NavLink, Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div>
            <header>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/posts">Blog</NavLink>
                <NavLink to="/about">About</NavLink>
            </header>
            <Outlet />
            <footer>2022</footer>
        </div>

    )
}

export { Layout };