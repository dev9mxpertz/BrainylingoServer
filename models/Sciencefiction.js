const mongoose = require("mongoose");

const storySchema = new mongoose.Schema({
  Storyimage: [],
  Paragraph: [],
});

const wordExploreSchema = new mongoose.Schema({
  Storytitle: String,
  Storyttext: String,
  Storyimage: [],
  Storyitext: String,
});

const brainQuestSchema = new mongoose.Schema({
  Question: String,
  Option: [],
  Answer: String,
});

const SciencefictionSchema = new mongoose.Schema({
  Title: { type: String },
  Image: [],
  Status: String,
  Storyadvenure: {
    Storytitle: String,
    content: [storySchema],
  },
  Wordexplore: [wordExploreSchema],
  Brainquest: [brainQuestSchema],
});

const Sciencefiction = mongoose.model("Sciencefiction", SciencefictionSchema);

module.exports = Sciencefiction;
