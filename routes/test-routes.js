const router = require("express").Router();
const { test } = require("../controllers/test-controller");

router.get("/test", test);

module.exports = router;
