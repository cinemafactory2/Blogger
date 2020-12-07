import Drafts from "./Components/Drafts";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Admin from "./Components/Admin";
import Create from "./Components/Create";
import Show from "./Components/Show";
import Projects from "./Components/Projects";
import About from "./Components/About";
import Post from "./Components/Post";
import Cold from "./Components/Cold";
import Newsletter from "./Components/Newsletter";
import "./App.css";
import { Helmet } from "react-helmet";
import Unsubscribed from "./Components/Unsubscribed";

const App = () => {
    return (
        <>
            <Helmet>
                <link
                    rel="apple-touch-icon"
                    sizes="57x57"
                    href="../public/Assets/apple-icon-57x57.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="60x60"
                    href="../public/Assets/apple-icon-60x60.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="72x72"
                    href="../public/Assets/apple-icon-72x72.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="76x76"
                    href="../public/Assets/apple-icon-76x76.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="114x114"
                    href="../public/Assets/apple-icon-114x114.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="120x120"
                    href="../public/Assets/apple-icon-120x120.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="144x144"
                    href="../public/Assets/apple-icon-144x144.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="152x152"
                    href="../public/Assets/apple-icon-152x152.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="../public/Assets/apple-icon-180x180.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="192x192"
                    href="../public/Assets/android-icon-192x192.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="../public/Assets/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="96x96"
                    href="../public/Assets/favicon-96x96.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="../public/Assets/favicon-16x16.png"
                />
                <link rel="manifest" href="../public/Assets/manifest.json" />
                <meta name="msapplication-TileColor" content="#ffffff" />
                <meta
                    name="msapplication-TileImage"
                    content="../public/Assets/ms-icon-144x144.png"
                />
                <title>Home | Mano Sriram</title>
                <meta name="description" content="Mano Sriram" />
            </Helmet>
            <Router>
                <Switch>
                    <Route path="/subscribe">
                        <Newsletter />
                    </Route>
                    <Route path="/notAnAdminRoute">
                        <Admin />
                    </Route>
                    <Route path="/create-post">
                        <Create />
                    </Route>
                    <Route path="/projects">
                        <Projects />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/post/:postID/:postName">
                        <Post />
                    </Route>
                    <Route path="/cold-storage">
                        <Cold />
                    </Route>
                    <Route path="/drafts">
                        <Drafts />
                    </Route>
                    <Route path="/newsletter/unsubscribe/:email">
                        <Unsubscribed />
                    </Route>
                    <Route path="/">
                        <Show />
                    </Route>
                </Switch>
            </Router>
        </>
    );
};

export default App;
