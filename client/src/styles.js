const PADDING = "20px";
const inputWidths = "80%";
const FONT = "Merriweather";

export default function styles() {
    return {
        app: {
            fontFamily: FONT,
            padding: PADDING,
            textAlign: "center",
        },
        footer: {
            backgroundColor: "darkgrey",
            color: "white",
        },
        nav: {
            display: "flex",
            backgroundColor: "lightgreen",
            margin: "auto",
            padding: PADDING,
        },
        loginDiv: {
            backgroundColor: "lightgrey",
            textAlign: "center",
            padding: PADDING,
            margin: "auto",
            fontFamily: FONT,
        },
        loginInputs: {
            padding: PADDING,
            textAlign: "center",
            margin: "auto",
            width: inputWidths,
        },
        registerDiv: {
            backgroundColor: "lightgreen",
            textAlign: "center",
            fontFamily: FONT,
            padding: PADDING,
        },
        registerInputs: {
            margin: "auto",
            padding: PADDING,
            width: inputWidths,
        },
    };
}