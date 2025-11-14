const express = require("express");
const fetch = require("node-fetch");
const app = express();
app.use(express.json());

const PUSH_API_KEY = "I0Xs2xddStf96c_X0cSTBlqZ";
const DEVICE_NOTIFICATION = "YOUR_NOTIFICATION_NAME"; // from Pushcut automation

app.post("/send", async (req, res) => {
    const cmd = req.body.command;

    await fetch(`https://api.pushcut.io/v1/notifications/${DEVICE_NOTIFICATION}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "API-Key": PUSH_API_KEY
        },
        body: JSON.stringify({
            input: cmd
        })
    });

    res.send("iPhone triggered: " + cmd);
});

app.listen(9000, () => console.log("Server running on port 9000"));
