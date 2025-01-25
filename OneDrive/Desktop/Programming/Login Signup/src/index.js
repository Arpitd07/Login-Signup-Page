const express = require("express");
const bcrypt = require("bcryptjs"); // For password comparison
const morgan = require("morgan");
const path = require("path");
const hbs = require("hbs");
const LoginCollection = require("./mongodb"); // Mongoose model with hashing
const dbConnection = require("./dbconnection"); // Database connection function

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "../public")));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "../templates"));
app.use(morgan("dev"));

// Routes
app.get("/", (req, res) => {
    res.render("login");
});

app.get("/signup", (req, res) => {
    res.render("signup");
});

app.get("/home", (req, res) => {
    const username = req.query.username || "User";
    console.log("The username passed is: ",username);
    res.render("home", { username });
});

// Handle signup
app.post("/signup", async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).send("Username and password are required.");
    }

    try {
        // Check if username already exists
        const existingUser = await LoginCollection.findOne({ username });
        if (existingUser) {
            return res.status(400).send("Username already taken.");
        }

        // Save the user to the database (hashing happens in mongodb.js)
        await LoginCollection.create({ username, password });

        // Redirect to home page with username
        res.redirect(`/home?username=${encodeURIComponent(username)}`);
    } catch (error) {
        console.error("Error during signup:", error);
        res.status(500).send("Error during signup. Please try again.");
    }
});

// Handle login
app.post("/login", async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).send("Username and password are required.");
    }

    try {
        // Find user by username
        const user = await LoginCollection.findOne({ username });
        if (!user) {
            return res.status(401).send("Invalid username or password.");
        }

        // Compare the provided password with the hashed password
        const isMatch = await bcrypt.compare(password, user.password);
        if (isMatch) {
            // Redirect to home page with username
            res.redirect(`/home?username=${encodeURIComponent(user.username)}`);
        } else {
            res.status(401).send("Invalid username or password.");
        }
    } catch (error) {
        console.error("Error during login:", error);
        res.status(500).send("Error during login. Please try again.");
    }
});

// Start the server
const PORT = 3000;
app.listen(PORT, async () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    await dbConnection(); // Ensure the database connection is established
});
