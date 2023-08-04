const express = require("express");
const config = require("config");
const path = require("path")
const mongoose = require("mongoose");

const app = express();
app.use(express.json({extended: true}));

app.use("/api/auth", require("./routers/auth.routers"));
app.use("/api/link", require("./routers/link.routes"));
app.use("/t", require("./routers/redirect.routers"));

if (process.env.NODE_ENV === "production") {
    app.use("/", express.static(path.join(__dirname, 'client', 'build')))
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

const PORT = config.get("port") || 5000;
const MONGO_URI = config.get("mongoUri");

async function start() {
    try {
        await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        app.listen(PORT, () => console.log(`App has been started... on port ${PORT}`));

    } catch (e) {
        console.log("Server Error", e.message)
        process.exit(1)
    }
}

start();

