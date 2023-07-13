import React, { useState } from "react";

export default function TextForm(props) {
    let handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    };
    let handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    };

    let handleClear = () => {
        let newText = "";
        setText(newText);
    };
    let handleOnChange = (event) => {
        setText(event.target.value);
    };
    let handleCopy = () => {
        let textCopy = document.getElementById("myBox");
        textCopy.select();
        navigator.clipboard.writeText(textCopy.value);
    };

    // let [style, setStyle] = useState({
    //     backgroundColor: "transparent",
    //     color: "black",
    // });
    // let [btnText, setBtnText] = useState("Dark Mode");
    // let toggleBtn = () => {
    //     console.log(style);
    //     if (style.color === "black") {
    //       setStyle({
    //         backgroundColor: "Black",
    //         color: "White"
    //       });
    //       setBtnText("Light Mode")
    //     } else {
    //       setStyle({
    //         backgroundColor: "transparent",
    //         color: "Black"
    //       });
    //       setBtnText("Dark Mode")

    // }
    // }


    let [text, setText] = useState("");
    return (
        <div>
            <div>
                <div>
                    <h1 style={{color: props.mode === 'dark' ? 'white' : 'black' }}>{props.heading}</h1>
                    <div className="mb-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                        <textarea
                            className="form-control"
                            value={text}
                            onChange={handleOnChange}
                            id="myBox"
                            rows="8"
                            style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}
                        ></textarea>
                    </div>
                    <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick} disabled={text.length==0}>
                        Convert to Uppercase
                    </button>
                    <button className="btn btn-primary mx-2 my-2" onClick={handleLoClick} disabled={text.length==0}> 
                        Convert to Lowercase
                    </button>
                    <button className="btn btn-primary mx-2 my-2" onClick={handleClear} disabled={text.length==0}>
                        Clear Text
                    </button>
                    <button className="btn btn-primary mx-2 my-2" onClick={handleCopy} disabled={text.length==0}>
                        Copy Text
                    </button>

                </div>
                <div className="my-2" style={{ color: props.mode === 'dark' ? 'white' : '042743' }}>
                    <h3 style={{color: props.mode === 'dark' ? 'white' : 'black' }}>Your Text Summary: </h3>
                    <p style={{color: props.mode === 'dark' ? 'white' : 'black' }}>
                        {text.split(" ").filter((e)=>{ return e.length!==0}).length} words and {text.length}s
                    </p>
                    <p style={{color: props.mode === 'dark' ? 'white' : 'black' }}>{0.008 * (text.split(" ").filter((e)=>{ return e.length!==0}).length)} Minutes read</p>
                </div>
                <h3 style={{color: props.mode === 'dark' ? 'white' : 'black' }}> Preview: </h3>
                <p style={{color: props.mode === 'dark' ? 'white' : 'black' }}>{text.length > 0 ? text : "Nothing to preview...."}</p>
            </div>
        </div>
    );
}
