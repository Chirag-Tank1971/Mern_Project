const bcrypt = require("bcryptjs"); // Import bcrypt for password hashing
const jwt = require("jsonwebtoken"); // Import JSON Web Token (JWT) for authentication
const User = require("../models/User"); // Import the User model

// Function to handle user login
const login = async (req, res) => {
  try {
    const { email, password } = req.body; // Extract email and password from request body

    // Check if the user exists in the database
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" }); // Return error if user is not found
    }

    // Compare the provided password with the stored hashed password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid credentials" }); // Return error if passwords do not match
    }

    // Generate a JWT token for authentication
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

    // Send the token in the response for client-side authentication
    res.json({ token });
  } catch (err) {
    console.error("Login Error:", err);
    res.status(500).json({ message: "Server error" }); // Handle any server-side errors
  }
};

module.exports = { login }; // Export the login function for use in routes
