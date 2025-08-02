//4JerJlYKweYRJ8Vj

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dealRoutes = require("./Routes/dealRoutes");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/deals', dealRoutes);

// Default route
app.get("/", (req, res) => {
    res.send("Hotel Deals API is Working");
});

// Connect to MongoDB and start server
mongoose.connect("mongodb+srv://admin:4JerJlYKweYRJ8Vj@cluster0.tgvyjz5.mongodb.net/")
    .then(() => {
        console.log("Connected to MongoDB");
        app.listen(5000, () => console.log("Server running on port 5000"));
    })
    .catch((err) => console.log(err)); 
