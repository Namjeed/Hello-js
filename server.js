const express = require("express")
require("dotenv").config();
const app = express();
const PORT= process.env.PORT

//MIDDLEWARE

app.use(express.json());
app.use((req, res, next) =>{
    console.log('${req.method} ${req.url}');
    next();
});

//Routes

//Get
app.get("/", (req, res) => {
    res.send("My Week 2 API");
});

//Post/user
//accept name and email
app.post("/user", (req, res) => {

    // Extract name and email from request body
    const { name, email } = req.body;

    // Check for missing data
    if (!name || !email) {
        return res.status(400).json({
            error: "Name and email are required"
        });
    }
 // Successful response
    res.status(201).json({
        message: `Hello, ${name}!`,
        name: name,
        email: email
    });
});

// GET /user/:id
// Returns a user's profile
app.get("/user/:id", (req, res) => {

    // Get the ID from the URL
    const { id } = req.params;

    // Return the user's profile
    res.status(200).json({
        message: `User ${id} profile`
    });
});

// GET /user/:id
// Returns a user's profile
app.get("/user/:id", (req, res) => {

    // Get the ID from the URL
    const { id } = req.params;

    // Return the user's profile
    res.status(200).json({
        message: `User ${id} profile`
    });
});

// 404 ERROR HANDLER

app.use((req, res) => {
    res.status(404).json({
        error: "Route not found"
    });
});


// START SERVER
// ================================

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});