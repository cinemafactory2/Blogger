import Markdown from "./Markdown";
import { Helmet } from "react-helmet";
import Create from "./Create";
import "./Loader.css";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import { useHistory, useLocation } from "react-router-dom";
import React, { useState, useEffect, useCallback } from "react";
import Navbar from "./Navbar";
import "./Sc2.css";
const moment = require("moment");

const Post = props => {
    const [open, setOpen] = React.useState(false);
    const [logStat, setLogStat] = useState(false);

    let location = useLocation();
    let history = useHistory();
    const [postName, setPostName] = useState("");
    const [content, setContent] = useState({});
    const [realContent, setRContent] = useState("");
    const [spin, isSpinning] = useState(false);
    const [postID, setPostID] = useState("");
    const [B, setB] = useState(false);
    const [CN, setCN] = useState("");

    const fetchUser = async () => {
        try {
            const resp = await fetch("/auth/checkStat");
            const data = await resp.json();
            setLogStat(data.scs);
        } catch (er) {
            console.log(er);
        }
    };

    const handleClickOpen = () => setOpen(true);

    const handleClose = () => setOpen(false);

    const openUpdate = cont => {
        setB(true);
        cont.upd = true;
        if (location.state.method === "DRAFT") cont.state = "DRAFT";
        setCN(cont);
    };

    const handlePostDraft = async () => {
        const url = `/blog/move-draft/${postID}`;
        const resp = await fetch(url);
        await resp.json();
    };

    const deletePost = async () => {
        let url = "/blog/delete-post";
        if (location.state.method === "DRAFT") url = "/blog/delete-draft";
        const resp = await fetch(url, {
            method: "DELETE",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ postID: postID })
        });
        const rec = await resp.json();
        if (rec.scs) history.push("/drafts");
    };

    const fetchPost = async () => {
        try {
            let url;
            if (location.state && location.state.method === "DRAFT")
                url = "/blog/get-draft/";
            else url = "/blog/get-post/";
            const resp = await fetch(url, {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    postID: location.pathname.split("/")[2]
                })
            });
            const postContent = await resp.json();

            setRContent(postContent.postContent.content);
            setContent(postContent.postContent);
            isSpinning(false);
        } catch (er) {
            history.push("/");
        }
    };

    const memorizeFetchPost = useCallback(() => {
        fetchPost();
    }, []);

    useEffect(() => {
        try {
            isSpinning(true);
            setPostName(location.pathname.split("/")[3]);
            setPostID(location.pathname.split("/")[2]);
            fetchUser();
            memorizeFetchPost();
        } catch (er) {
            history.push("/");
        }
    }, []);

    if (B) return <Create def={CN} />;

    if (logStat) {
        return (
            <>
                <Helmet>
                    <script
                        data-ad-client="ca-pub-3914701687422003"
                        async
                        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
                    ></script>
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
                    <link
                        rel="manifest"
                        href="../../public/Assets/manifest.json"
                    />
                    <meta name="msapplication-TileColor" content="#ffffff" />
                    <meta
                        name="msapplication-TileImage"
                        content="../../public/Assets/ms-icon-144x144.png"
                    />
                    <meta name="theme-color" content="#ffffff" />
                    <title>{postName} | Mano Sriram</title>
                    <meta name="description" content={postName} />
                </Helmet>
                <Navbar createPost={true} />
                <div id="container">
                    {spin ? (
                        <div className="loader"></div>
                    ) : (
                        <>
                            <h1 id="contentTitle">{content.title}</h1>{" "}
                            <span>
                                <a id="tle" onClick={handleClickOpen}>
                                    delete
                                </a>
                            </span>{" "}
                            <span>
                                <a id="tle" onClick={() => openUpdate(content)}>
                                    update
                                </a>
                            </span>{" "}
                            {location.state.method === "DRAFT" && (
                                <span>
                                    <a id="tle" onClick={handlePostDraft}>
                                        post
                                    </a>
                                </span>
                            )}
                            <br />
                            <span id="created">
                                {moment(content.createdOn).format(
                                    "MMMM D, YYYY, hh:mm a"
                                )}
                            </span>
                            <br />
                            <br />
                            <Dialog
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="alert-dialog-title"
                                aria-describedby="alert-dialog-description"
                            >
                                <DialogTitle id="alert-dialog-title">
                                    {"Are you Sure?"}
                                </DialogTitle>
                                <DialogActions>
                                    <Button
                                        onClick={handleClose}
                                        color="primary"
                                    >
                                        No
                                    </Button>
                                    <Button
                                        onClick={deletePost}
                                        color="primary"
                                    >
                                        Yes
                                    </Button>
                                </DialogActions>
                            </Dialog>
                            <div id="editorContent">
                                <Markdown value={realContent} />
                            </div>
                        </>
                    )}
                </div>
            </>
        );
    } else {
        return (
            <>
                <Helmet>
                    <title>{postName} | Mano Sriram</title>
                    <meta name="description" content={postName} />
                </Helmet>
                <Navbar />
                <div id="container" className="postContainer">
                    {spin ? (
                        <div className="loader"></div>
                    ) : (
                        <>
                            <h1 id="contentTitle">{content.title}</h1>
                            <br />
                            <span id="created">
                                {moment(content.createdOn).format(
                                    "MMMM D, YYYY, hh:mm a"
                                )}
                            </span>
                            <br />
                            <br />
                            <div id="editorContent">
                                <Markdown value={realContent} />
                            </div>
                        </>
                    )}
                </div>
            </>
        );
    }
};

export default Post;
