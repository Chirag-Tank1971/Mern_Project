const Task = require("../models/Task"); // Import the Task model
const Agent = require("../models/Agent"); // Import the Agent model (needed for agent existence check)

/**
 * Retrieves all tasks from the database.
 * Populates the 'agent' field to include the agent's name and email.
 */
const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find().populate("agent", "name email"); // Fetch tasks with agent details
    res.json(tasks); // Send the retrieved tasks as a JSON response
  } catch (err) {
    console.error("Fetch Tasks Error:", err);
    res.status(500).json({ message: "Server error" }); // Handle server errors
  }
};

/**
 * Retrieves tasks assigned to a specific agent.
 * Validates whether the agent exists before querying for tasks.
 */
const getTasksByAgent = async (req, res) => {
  try {
    const { agentId } = req.params; // Extract agent ID from request parameters

    // Check if the agent exists in the database
    const agentExists = await Agent.findById(agentId);
    if (!agentExists) {
      return res.status(404).json({ message: "Agent not found" }); // Return error if agent does not exist
    }

    // Fetch tasks assigned to the given agent and populate agent details
    const tasks = await Task.find({ agent: agentId }).populate("agent", "name email");

    // If no tasks found, return a message
    if (!tasks.length) {
      return res.status(404).json({ message: "No tasks found for this agent" });
    }

    res.json(tasks); // Send the retrieved tasks as a JSON response
  } catch (err) {
    console.error("Fetch Tasks Error:", err);
    res.status(500).json({ message: "Server error" }); // Handle server errors
  }
};

module.exports = { getTasks, getTasksByAgent }; // Export the functions for use in routes
