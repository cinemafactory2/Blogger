import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "./Sc.css";
import CircularProgress from "@material-ui/core/CircularProgress";
import Create from "./Create";
import { useHistory } from "react-router-dom";

const Admin = () => {
    const [data, setData] = useState({});
    const [msg, setMsg] = useState("");
    const [loading, isLoading] = useState(true);
    const history = useHistory();

    const confirmStatus = async () => {
        const resp = await fetch("/auth/checkStat");
        const resp2 = await resp.json();
        if (resp2.scs) history.push("/");
        isLoading(false);
    };

    useEffect(() => {
        confirmStatus();
    }, []);

    const handleSubmit = async e => {
        e.preventDefault();
        const resp = await fetch("/auth/enterAdmin", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ data })
        });
        const resp2 = await resp.json();
        if (resp2.scs === true) history.push("/");
        else setMsg(resp2.msg);
    };

    const handleChange = e => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    return (
        <>
            <Navbar name="Admin" />
            {loading && (
                <div id="spin">
                    <CircularProgress />
                </div>
            )}

            {!loading && (
                <form id="frm1" onChange={handleChange} onSubmit={handleSubmit}>
                    {msg && <h3>{msg}</h3>}
                    <TextField
                        type="email"
                        label="Email Address"
                        variant="outlined"
                        name="email"
                    />
                    &nbsp; &nbsp; &nbsp;
                    <TextField
                        type="password"
                        label="Password"
                        variant="outlined"
                        name="password"
                    />
                    <br />
                    <br />
                    <br />
                    <Button type="submit" variant="contained">
                        Enter
                    </Button>
                </form>
            )}
        </>
    );
};

export default Admin;
