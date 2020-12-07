import { Helmet } from "react-helmet";
import { useHistory, Link } from "react-router-dom";
import React, { Fragment } from "react";
import "./Sc2.css";

const Navbar = (props, props1) => {
    let history = useHistory();

    const logout = async e => {
        await fetch("/auth/logout");
        window.location = "/";
    };

    return (
        <div id="nav">
            <Helmet>
                <link
                    rel="apple-touch-icon"
                    sizes="57x57"
                    href="../../public/Assets/apple-icon-57x57.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="60x60"
                    href="../../public/Assets/apple-icon-60x60.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="72x72"
                    href="../../public/Assets/apple-icon-72x72.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="76x76"
                    href="../../public/Assets/apple-icon-76x76.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="114x114"
                    href="../../public/Assets/apple-icon-114x114.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="120x120"
                    href="../../public/Assets/apple-icon-120x120.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="144x144"
                    href="../../public/Assets/apple-icon-144x144.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="152x152"
                    href="../../public/Assets/apple-icon-152x152.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="../../public/Assets/apple-icon-180x180.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="192x192"
                    href="../../public/Assets/android-icon-192x192.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="../../public/Assets/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="96x96"
                    href="../../public/Assets/favicon-96x96.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="../../public/Assets/favicon-16x16.png"
                />
                <link rel="manifest" href="../../public/Assets/manifest.json" />
                <meta name="msapplication-TileColor" content="#ffffff" />
                <meta
                    name="msapplication-TileImage"
                    content="../../public/Assets/ms-icon-144x144.png"
                />
                <title>Mano Sriram</title>
                <meta
                    name="description"
                    content="My Blog on Software Engineering and other Tech!"
                />
            </Helmet>
            <Link id="reddit" to="/">
                Home
            </Link>
            <a id="reddit" href="https://www.manosriram.com">
                Mano Sriram
            </a>
            {props.createPost && (
                <Link id="reddit" to="/create-post">
                    Create
                </Link>
            )}
            {props.createPost && (
                <Link id="reddit" to="/drafts">
                    Drafts
                </Link>
            )}
            <Link id="reddit" to="/subscribe">
                Subscribe to Newsletter
            </Link>
            {props.createPost && (
                <Link className="logout" id="reddit" to="#" onClick={logout}>
                    Logout
                </Link>
            )}
        </div>
    );
};

export default Navbar;
