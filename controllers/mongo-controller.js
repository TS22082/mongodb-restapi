const mongojs = require("mongojs");

const databaseUrl = "notetaker_db";
const collections = ["notes"];

const db = mongojs(databaseUrl, collections);

db.on("error", (err) => console.log({ error_message: err }));

module.exports = {
  // returns an array even if there are no items or just one
  getNotes: (req, res) =>
    db.notes.find({}, (err, data) => (err ? res.send(err) : res.send(data))),

  // getOne returns one object
  getNote: (req, res) => {
    db.notes.findOne({ _id: mongojs.ObjectID(req.params.id) }, (err, data) => {
      err ? res.send(err) : res.send(data);
    });
  },

  // mongodb allows you to save arrays and objects to the collection
  addNote: (req, res) =>
    db.notes.insert(
      {
        text: req.body.text,
        completed: req.body.completed,
        // cant do this in sql
        tags: [],
      },
      (err, data) => (err ? res.send(err) : res.send(data))
    ),

  // anytime we are referencing an id you must include mongojs.ObjectID()
  updateText: (req, res) => {
    db.notes.update(
      { _id: mongojs.ObjectID(req.body.id) },
      { $set: { text: req.body.text } },
      (err, response) => (err ? res.send(err) : res.send(response))
    );
  },

  addTag: (req, res) => {
    db.notes.update(
      { _id: mongojs.ObjectID(req.body.id) },
      // to add a single thing to array
      { $push: { tags: req.body.tag } },
      (err, response) => (err ? res.send(err) : res.send(response))
    );
  },

  addTags: (req, res) => {
    db.notes.update(
      { _id: mongojs.ObjectID(req.body.id) },
      // to add a multiple things to an array
      { $push: { tags: { $each: req.body.tags } } },
      (err, response) => (err ? res.send(err) : res.send(response))
    );
  },

  removeTags: (req, res) => {
    db.notes.update(
      { _id: mongojs.ObjectID(req.body.id) },
      {
        // to pull a single item from an array just use $pull
        // to pull multiple items use $pullAll
        $pullAll: {
          tags: req.body.tags,
        },
      },

      (err, response) => {
        err ? res.send(err) : res.send(response);
      }
    );
  },

  removeTag: (req, res) => {
    db.notes.update(
      { _id: mongojs.ObjectID(req.body.id) },
      {
        // to pull a single item from an array just use $pull
        // to pull multiple items use $pullAll
        $pull: {
          tags: req.body.tag,
        },
      },

      (err, response) => {
        err ? res.send(err) : res.send(response);
      }
    );
  },

  deleteNote: (req, res) => {
    // to remove an item from the collection by its id.
    // any parameter works.
    db.notes.remove({ _id: mongojs.ObjectId(req.params.id) }, (err, data) =>
      err ? res.send(err) : res.send(data)
    );
  },
};
