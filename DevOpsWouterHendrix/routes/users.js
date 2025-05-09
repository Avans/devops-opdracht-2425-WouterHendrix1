var express = require('express');
var router = express.Router();

const { db } = require("../services/database");

/* GET users listing. */
router.get('/', async function(req, res, next) {
  try {
    let users = await db.collection('users').find().toArray();
    res.json(users);
  } catch (err) {
    next(err);
  }
});

/* POST new user */
router.post('/', async function(req, res) {
  try {
    const result = await db.collection('users').insertOne(req.body);
    res.status(201).json({ id: result.insertedId });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
