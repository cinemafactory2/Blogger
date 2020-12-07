import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import "./Sc.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const Newsletter = () => {
    const [isUser, checkUser] = useState(false);
    const [email, setEmail] = useState("");
    const [err, setErr] = useState("");

    const useStyles = makeStyles(theme => ({
        root: {
            "& > *": {
                margin: theme.spacing(1),
                width: "auto"
            }
        }
    }));
    const classes = useStyles();

    const fetchUser = async () => {
        const resp = await fetch("/auth/checkStat");
        const data = await resp.json();
        checkUser(data.scs);
    };

    const handleChange = e => {
        setEmail(e.target.value);
    };

    const handleSubmit = async e => {
        e.preventDefault();

        const resp = await fetch("/newsletter/subscribe", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email })
        });
        const data = await resp.json();
        setErr(data.message);
    };

    useEffect(() => {
        fetchUser();
    }, []);

    return (
        <>
            <Navbar createPost={isUser} />
            <div id="err-msg">
                <h3>{err}</h3>
            </div>
            <form id="frm1" onSubmit={handleSubmit}>
                <TextField
                    onChange={handleChange}
                    className={classes.root}
                    type="email"
                    label="Email Address"
                    variant="outlined"
                    name="email"
                    id="email-newsletter"
                    size="small"
                />
                <br />
                <br />
                <Button type="submit" variant="contained">
                    Subscribe
                </Button>
            </form>
        </>
    );
};

export default Newsletter;
