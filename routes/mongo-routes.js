const router = require("express").Router();

const {
  getNotes,
  addNote,
  getNote,
  updateText,
  addTag,
  addTags,
  removeTags,
  removeTag,
  deleteNote,
} = require("../controllers/mongo-controller");

// Gets all notes
router.get("/notes", getNotes);

// Gets a single note by id
router.get("/notes/single/:id", getNote);

// posts a note
router.post("/notes", addNote);

// updates the text in a note
router.patch("/notes", updateText);

// adds a single tag
router.put("/notes", addTag);

// adds multiple tags
router.put("/notes/multi", addTags);

// deletes multiple tags
router.delete("/notes/tags/multi", removeTags);

// deletes a single tag
router.delete("/notes/tags/single", removeTag);

// deletes entire task
router.delete("/notes/:id", deleteNote);

module.exports = router;
