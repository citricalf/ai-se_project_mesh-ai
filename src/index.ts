import express from "express"

const app = express();

app.get("/health", (req, res): void => {
    res.status(200).json({
        "success": true,
        "data": { "status": "ok" },
        "error": null
    });
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});