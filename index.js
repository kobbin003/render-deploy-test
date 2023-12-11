import express from "express";

const app = express();

let PORT = process.env.PORT || 3000;

app.get("/hello", (req, res) => {
	res.json({ msg: "Hello World!!!" });
});

app.listen(PORT, () => console.log(`app is running in port: ${PORT}`));
