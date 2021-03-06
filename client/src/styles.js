const PADDING = "20px";
const inputWidths = "80%";
const FONT = "Merriweather";

export default function styles() {
	return {
		app: {
			fontFamily: FONT,
			textAlign: "center",
		},
		room: {
			textAlign: "start",
			padding: "50px",
		},
		roomMsg: {
			backgroundColor: "#000FFC6",
			height: "500px",
			padding: "5px",
			overflowY: "scroll",
			
		},
		roomList: {
			textAlign: "start",
			padding: "50px",
		},
		roomItem: {
			padding: "5px",
		},
		sendMsg: {
			padding: "5px",
		},
		footer: {
			backgroundColor: "black",
			color: "white",
			position: "fixed",
			bottom: "0px",
			textAlign: "center",
			height: "60px",
			padding: "20px",

			width: "100%",
		},
		nav:{
			position: "fixed",
			top: "10px",
			width: "100%",
			padding: PADDING,
		},
		loginDiv: {
			backgroundColor: "lightgreen",
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
		loginLeftButton: {
			textAlign: "start",
			marginRight: "20px",
		},
		loginRightBottom: {
			textAlign: "end",
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
		searcHBar: {
			width: "50%",
			margin: "auto",
		},
		roomListDiv: {
			
		}
	};
}