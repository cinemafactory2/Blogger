import React from "react";
import Navbar from "./Navbar";
import "./Sc2.css";
import { Helmet } from "react-helmet";

const Projects = () => {
    const [isUser, checkUser] = React.useState(false);

    const fetchUser = async () => {
        const resp = await fetch("/auth/checkStat");
        const data = await resp.json();
        checkUser(data.scs);
    };

    React.useEffect(() => {
        fetchUser();
    }, []);

    return (
        <>
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
                <title>Projects | Mano Sriram</title>
                <meta name="description" content="Mano Sriram" />
            </Helmet>

            <Navbar createPost={isUser} />
            <div id="container" className="projects">
                <p>
                    These are some of the projects I have worked (working) on.
                    Most of the time, I work on <strong>C++</strong> or MERN (
                    <strong>M</strong>
                    ongoDB, <strong>E</strong>xpressJS, <strong>R</strong>
                    eactJS, <strong>N</strong>odeJS) Stack. More smaller tools
                    or projects can be found on my{" "}
                    <a href="https://www.github.com/manosriram">Github</a>{" "}
                    profile.
                </p>
                <br />
                <h1>Projects</h1>
                <br />
                <br />
                <p>
                    <a href="https://www.github.com/manosriram/Data-Structures">
                        Data Structures
                    </a>
                    {"  "}- Different Types of Data-Structures ranging from low
                    to advanced difficulty. (Still actively contributing)
                </p>
                <p>
                    <a href="https://github.com/manosriram/Algorithms">
                        Algorithms
                    </a>
                    {"  "}- CS Algorithms with different time-complexities
                    including classical and non-classical problems.{" "}
                </p>
                <p>
                    <a href="http://www.filebound.in">FileBound</a> (
                    <a href="https://github.com/manosriram/filebound">Github</a>
                    ){"  "}- Web App through which users can upload files and
                    share them via a time-bounded, encrypted link!
                </p>
                <p>
                    <a href="https://github.com/manosriram/VCS/">
                        Mini Version Control System
                    </a>
                    {"  "}- A Control System written in C to track different
                    versions of files using SHA1 Hash.
                </p>
                <p>
                    <a href="https://github.com/manosriram/Huffman-Compression">
                        Huffman Compression
                    </a>
                    {"  "}- Implementation of Huffman Compression technique in
                    C++.
                </p>
                <p>
                    <a href="https://github.com/manosriram/Radix-Tree">
                        Radix Tree
                    </a>
                    {"  "}- Implementation of Radix Tree in C++.
                </p>
                <p>
                    <a href="https://github.com/manosriram/EasySolve">
                        Easy Solve
                    </a>
                    {"  "}- Web App which lets you ask questions and get answers
                    from people anywhere.
                </p>
                <p>
                    <a href="https://github.com/manosriram/CodeFlip">
                        Code Flip
                    </a>
                    {"  "}- Web App which lets you store pieces of code for
                    lookups later.
                </p>
                <p>
                    <a href="https://github.com/manosriram/AnonymousMessaging">
                        Anonymous Messaging.
                    </a>
                    {"  "}- Message users anonymously.
                </p>
                <p>
                    <a href="https://github.com/manosriram/ytdown">
                        Youtube Downloader
                    </a>
                    {"  "}- Simple tool to download Youtube Videos.
                </p>
                <br />
                <h1>Development Environment</h1>
                <br />
                <br />
                <p>
                    <a href="https://github.com/alacritty/alacritty">
                        Alacritty
                    </a>
                    {"  "}- Terminal Emulator
                </p>
                <p>
                    <a href="https://github.com/tmux/tmux/wiki">TMUX</a>
                    {"  "}- Terminal Multiplexer
                </p>
                <p>
                    <a href="https://www.vim.org/">Vim</a>
                    {"  "}- Text Editor
                </p>
                <p>
                    <a href="https://github.com/manosriram/Dot-Files">
                        Dot Files
                    </a>
                    {"  "}- Dot Files for Alacritty and Vim
                </p>
            </div>
        </>
    );
};

export default Projects;
