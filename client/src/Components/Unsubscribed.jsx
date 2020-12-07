import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import "./Sc.css";

const Unsubscribed = () => {
    const { email } = useParams();
    const [msg, setMsg] = React.useState("");

    const unsubscribe = async () => {
        const resp = await fetch(`/newsletter/unsubscribe/${email}`);
        const data = await resp.json();
        setMsg(data.message);
    };

    useEffect(() => {
        unsubscribe();
    }, []);

    return (
        <>
            <Navbar />
            <h1 id="err-msg">{msg}</h1>
        </>
    );
};

export default Unsubscribed;
