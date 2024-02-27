const express = require("express");
const router = express.Router();

// Import the State model (assuming you have defined it)
const State = require("../models/state");
// Route to get data for all states

router.use(express.json({ limit: "10MB" }));

router.get("/states", async (req, res) => {
  try {
    const states = await State.find();
    res.json(states);
  } catch (error) {
    console.error("Error fetching states data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.delete("/states", async (req, res) => {
  try {
    const states = await State.deleteMany();
    res.json(states);
  } catch (error) {
    console.error("Error fetching states data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Route to add a new state
router.post("/states", async (req, res) => {
  try {
    console.log("I am hit");

    const { stateID, stateName, stateDesc, ImagesData } = req.body;

    const newState = await State.create({
      stateID,
      stateName,
      stateDesc,
      ImagesData,
    });

    res.json({ success: true, state: newState });
  } catch (error) {
    console.error("Error adding a new state:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Route to get specific state data by name (in lowercase)
router.get("/states/:stateName", async (req, res) => {
  const { stateName } = req.params;
  console.log(stateName);

  try {
    const state = await State.findOne({ stateID: stateName });
    if (!state) {
      return res.status(404).json({ error: "State not found" });
    }
    res.json(state);
  } catch (error) {
    console.error("Error fetching state data by name:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


router.delete('/states/:stateName', async (req, res) => {
  const { stateName } = req.params;
  console.log(stateName);

  try {
  
    const deletedItem = await State.findOneAndDelete({ stateID: stateName });

    if (!deletedItem) {
      return res.status(404).json({ message: 'Item not found' });
    }

    return res.json({ message: 'Item deleted successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
});

// Route to update detail and detailImages for a specific state
router.patch("/states/:stateID", async (req, res) => {
  const { stateID } = req.params;

  try {
    const { detail, detailImages } = req.body;

    const updatedState = await State.findOneAndUpdate(
      { stateID },
      { $set: { detail, detailImages } },
      { new: true }
    );

    if (!updatedState) {
      return res.status(404).json({ error: "State not found" });
    }

    res.json({ success: true, state: updatedState });
  } catch (error) {
    console.error("Error updating state details:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});



module.exports = router;
