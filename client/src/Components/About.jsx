import React from "react";
import "./Sc2.css";
import Navbar from "./Navbar";
import { Helmet } from "react-helmet";

const About = () => {
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
                <title>About | Mano Sriram</title>
                <meta name="description" content="About" />
            </Helmet>
            <Navbar createPost={isUser} />
            <div id="container" className="about">
                <p>
                    Hello, My name is Mano Sriram and I'm an CS Undergraduate
                    currently living in Vizag, India. I am passionate about
                    Programming and I love solving problems that makes people's
                    lives better.
                </p>
                <p>
                    I make videos on{" "}
                    <a href="https://www.youtube.com/channel/UCsz4I9wkbdSaFHLyELJcCuQ">
                        Youtube
                    </a>
                    .
                </p>
                <p>
                    I started this blog to help people by sharing my thoughts on
                    Tech (mostly) and Non-Tech topics. Also, to use this
                    platform to share problem-sets that I faced.
                </p>
                <p>
                    This site was built by me for <strong>US</strong>. You can
                    view its source code{" "}
                    <a href="https://github.com/manosriram/Blog">HERE</a>.
                </p>
                <p>
                    I do Freelance, you can contact me via{" "}
                    <a href="mailto:mano.sriram0@gmail.com">Email</a> ,{" "}
                    <a href="https://www.linkedin.com/in/mano-sriram-866569166/">
                        LinkedIN
                    </a>{" "}
                    or{" "}
                    <a href="https://www.quora.com/profile/Mano-Sriram-3">
                        Quora
                    </a>
                    .
                </p>
                <h4>
                    <a
                        href="https://blogbucket.s3.ap-south-1.amazonaws.com/Resume.pdf
"
                    >
                        Resume
                    </a>
                </h4>
            </div>
        </>
    );
};

export default About;
