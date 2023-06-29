const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

const port = process.env.port || 5000;
const category = require("./Data/Data.json")

app.get("/news/:id", (req, res) => {
    const id = req.params.id;
    const selectedId = category?.find((n) => n.id == id);
    res.send(selectedId);
})

app.get("/allData", (req, res) => {
    res.send(category);
})

app.listen(port, () => {
    console.log("sarver is running the port", port)
})

export default app;