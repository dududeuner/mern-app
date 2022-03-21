// @desc Get goals
// @route GET /api/goals
// @access Private

const getGoals = (req, res) => {
  res.status(200).json({ message: "Get goals" });
};

// @desc Set goals
// @route SET /api/goals
// @access Private

const setGoals = (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }

  res.status(200).json({
    message: "Set Goals",
  });
};

// @desc Uptade goals
// @route PUT /api/goal/:id
// @access Private

const uptadeGoal = (req, res) => {
  res.status(200).json({
    message: "Uptade Goal",
  });
};

// @desc Delete goal
// @route DELETE /api/goals/:id
// @access Private

const deleteGoal = (req, res) => {
  res.status(200).json({
    message: "Delete goal",
  });
};

module.exports = {
  getGoals,
  setGoals,
  uptadeGoal,
  deleteGoal,
};
