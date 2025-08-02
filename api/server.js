import express from "express";
import { execFile } from "child_process";

const app = express();

app.get("/marina", (req, res) => {
    const laza = req.query.laza;

    if (!laza) {
        return res.status(400).json({ error: "Missing 'laza' parameter" });
    }

    // execFile avec chemin relatif car marina est dans le même dossier que server.js
    execFile("./marina", [laza], (error, stdout, stderr) => {
        if (error) {
            return res.status(500).json({ error: stderr || error.message });
        }
        res.json({ result: stdout.trim() });
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
});
