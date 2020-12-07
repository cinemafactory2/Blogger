import Show from "./Show";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core/styles";
import React, { useState } from "react";
import Navbar from "./Navbar";
import Button from "@material-ui/core/Button";
import "./Sc.css";
const Markdown = require("react-markdown");

const useStyles = makeStyles(theme => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120
    },
    selectEmpty: {
        marginTop: theme.spacing(2)
    }
}));

const Create = props => {
    const classes = useStyles();
    const categories = [
        "Announcements",
        "Data-Structures",
        "Algorithms",
        "Tools and Utilities",
        "System Design",
        "Chill ⏸"
    ];
    const [isUser, checkUser] = useState(false);
    const [titl, setT] = useState("");
    const [msg, setMsg] = useState("");
    const [cat, setCat] = useState("");
    const [scs, Setscs] = useState(false);
    const [now, setNow] = useState("");
    const [desc, setD] = useState("");
    let [cont, setCont] = useState("");

    const fetchUser = async () => {
        const resp = await fetch("/auth/checkStat");
        const data = await resp.json();
        checkUser(data.scs);
    };

    React.useEffect(() => {
        fetchUser();
    }, []);

    const changeDesc = e => {
        setD({ ...desc, desc: e.target.value });
    };

    const changeTitle = e => {
        setT({ ...titl, titl: e.target.value });
    };

    const handleEditorChange = e => {
        setCont({ ...cont, cont: e.target.value });
    };

    const handleChange = event => {
        setCat(event.target.value);
        setNow(event.target.value);
    };

    const fetchNThrow = async (e, throwType) => {
        try {
            e.preventDefault();
            let url,
                method = "POST";
            if (throwType === "POST") url = "/blog/create-post";
            else url = "/blog/draft-post";
            const createdOn = Date.now();
            if (props.def && props.def.upd) {
                method = "PUT";
                url = `/blog/update-post/${props.def._id}`;
            }

            const resp = await fetch(url, {
                method,
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    content: cont,
                    title: titl.titl,
                    category: cat,
                    createdOn: createdOn,
                    description: desc,
                    draft: props.def && props.def.state === "DRAFT"
                })
            });
            const data = await resp.json();
            setMsg(data.msg);
            Setscs(data.scs);
        } catch (er) {
            console.log(er);
        }
    };

    if (!isUser) return <Show />;

    return (
        <>
            <Navbar name="Create Post" createPost={isUser} />
            <br />
            <form id="frm" method="POST">
                {scs && <h3 className="global-flash-success">{msg}</h3>}
                {!scs && <h3 className="global-flash-failure">{msg}</h3>}
                <br />
                <input
                    id="title"
                    type="text"
                    name="title"
                    placeholder="Title"
                    onChange={changeTitle}
                    maxLength="256"
                    defaultValue={props.def ? props.def.title : ""}
                />
                <br />
                <FormControl className={classes.formControl}>
                    <Select
                        defaultValue={"Select Category"}
                        value={now}
                        onChange={handleChange}
                        displayEmpty
                        className={classes.selectEmpty}
                    >
                        <MenuItem value="" selected>
                            {props.def ? props.def.category : "Select One"}
                        </MenuItem>
                        {categories.map((el, ind) => {
                            return <MenuItem value={el}>{el}</MenuItem>;
                        })}
                    </Select>
                    <FormHelperText>Select Category</FormHelperText>
                </FormControl>

                <br />
                <br />

                <textarea
                    id="tarea"
                    rows="70"
                    cols="30"
                    tag="textarea"
                    onChange={handleEditorChange}
                >
                    {props.def ? props.def.content : ""}
                </textarea>

                <br />
                <br />
                <input
                    id="title"
                    type="text"
                    name="description"
                    placeholder="Email Description"
                    onChange={changeDesc}
                    maxLength="256"
                />
                <br />
                <br />

                <Button
                    variant="contained"
                    color="primary"
                    onClick={e => fetchNThrow(e, "POST")}
                >
                    Post
                </Button>
                {"  "}
                <Button
                    variant="contained"
                    color="primary"
                    onClick={e => fetchNThrow(e, "DRAFT")}
                >
                    Save as Draft
                </Button>
            </form>
            <br />
            <br />
            <h3 id="frm">Preview.</h3>
            <div id="previewContent">
                <Markdown source={cont.cont} escapeHtml={false} />
            </div>
            <br />
            <br />
        </>
    );
};

export default Create;
