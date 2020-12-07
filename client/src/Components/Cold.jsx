import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import "./Sc.css";
import "./Loader.css";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import { useHistory } from "react-router-dom";
import { Helmet } from "react-helmet";
import Error from "./Error.jsx";

const Cold = props => {
    let history = useHistory();
    const [open, setOpen] = React.useState(false);
    const [spin, isSpinning] = useState(false);
    const [logStat, setLogStat] = useState(false);
    const [storages, setStorages] = useState([1]);
    const [postID, setPostID] = useState("");
    const [linkID, setLink] = useState("");
    const [err, setErr] = useState("");

    const handleClickOpen = LK => {
        setLink(LK);
        setOpen(true);
    };

    const handleClose = () => setOpen(false);

    const fetchUser = async () => {
        const resp = await fetch("/auth/checkStat");
        const data = await resp.json();
        setLogStat(data.scs);
    };

    const getStorages = async () => {
        try {
            const resp = await fetch("/cold/get-storages");
            const data = await resp.json();
            setStorages(data);
            isSpinning(false);
        } catch (err) {
            console.log(err);
            setErr("Oops! Some error occured.");
            isSpinning(false);
        }
    };

    const deletePost = async id => {
        const resp = await fetch("/cold/delete-link", {
            method: "DELETE",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ postID: id })
        });
        getStorages();
        handleClose();
    };

    const addLink = async e => {
        e.preventDefault();
        isSpinning(true);

        const resp = await fetch("/cold/add-into-store", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: e.target.title.value,
                url: e.target.url.value
            })
        });
        const rec = await resp.json();
        getStorages();
    };

    useEffect(() => {
        isSpinning(true);
        fetchUser();
        getStorages();
    }, []);

    if (err) return <Error msg={err} isUser={logStat} />;

    if (logStat) {
        return (
            <>
                <Helmet>
                    <link
                        rel="apple-touch-icon"
                        sizes="180x180"
                        href="../../public/Assets/apple-touch-icon.png"
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
                        sizes="16x16"
                        href="../../public/Assets/favicon-16x16.png"
                    />
                    <title>Cold-Storage | Mano Sriram</title>
                    <meta name="description" content="Cold-Storage" />
                </Helmet>
                <Navbar createPost={logStat} />
                {spin ? (
                    <div className="loader"></div>
                ) : (
                    <>
                        <div id="lF">
                            <form id="linkForm" onSubmit={e => addLink(e)}>
                                <input
                                    id="urlTitle"
                                    type="text"
                                    name="title"
                                    placeholder="Link Title"
                                />
                                <br />
                                <br />
                                <input
                                    id="url"
                                    type="text"
                                    name="url"
                                    placeholder="Link URL"
                                />
                                <br />
                                <br />
                                <input
                                    id="urlSub"
                                    type="submit"
                                    value="Add Link"
                                />
                            </form>
                            <hr />
                            <br />
                        </div>

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
                                <Button onClick={handleClose} color="primary">
                                    No
                                </Button>
                                <Button
                                    onClick={() => deletePost(linkID)}
                                    color="primary"
                                >
                                    Yes
                                </Button>
                            </DialogActions>
                        </Dialog>
                        {storages.length === 0 && (
                            <h2 id="usefulLinks">Oops! Nothing here, yet.</h2>
                        )}
                        {storages.map(store => {
                            return (
                                <div id="st">
                                    <div id="two">
                                        <a id="link" href={store.url}>
                                            {store.title}
                                        </a>
                                        <span>
                                            <a
                                                id="tle"
                                                onClick={() =>
                                                    handleClickOpen(store._id)
                                                }
                                            >
                                                {" "}
                                                [delete]
                                            </a>
                                        </span>
                                    </div>
                                </div>
                            );
                        })}
                    </>
                )}
                ;
            </>
        );
    } else {
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
                    <link
                        rel="manifest"
                        href="../../public/Assets/manifest.json"
                    />
                    <meta name="msapplication-TileColor" content="#ffffff" />
                    <meta
                        name="msapplication-TileImage"
                        content="../../public/Assets/ms-icon-144x144.png"
                    />
                    <title>Cold-Storage | Mano Sriram</title>
                    <meta name="description" content="Cold-Storage" />
                </Helmet>
                <Navbar showPosts={true} about={true} Git={true} cold={false} />
                <div id="store">
                    <h2 id="usefulLinks">Useful Links for References.</h2>
                    <br />
                    <br />
                    {storages.length === 0 && (
                        <h2 id="usefulLinks">Oops! Nothing here, yet.</h2>
                    )}
                    {storages.map(store => {
                        return (
                            <div id="st">
                                <div id="two">
                                    <a id="link" href={store.url}>
                                        {store.title}
                                    </a>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </>
        );
    }
};

export default Cold;
