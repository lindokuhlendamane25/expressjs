const express = require("express");
const router = express.Router();

const artist = [
  { 
  id: 1,
  musician: "ASA",
  order: 1,
  createdOn: new Date()
 },
  {
    id: 2,
    musician: "Msaki",
    order: 2,
    createdOn: new Date()
  },
  {
    id: 3,
    musician: "Erykah Badu",
    order: 3,
    createdOn: new Date()
  },
  {
    id: 4,
    musician: "Madison Ryann Ward",
    order: 4,
    createdOn: new Date()
  },
  {
    id: 5,
    musician: "Ry x",
    order: 5,
    createdOn: new Date()
  },
  {
    id: 6,
    musician: "X Ambassadors",
    order: 6,
    createdOn: new Date()
  },
  {
    id: 7,
    musician: "Rag 'n' Bone",
    order: 7,
    createdOn: new Date()
  }
];



router.get("/", function(req, res){
  
  return res.sendFile('../routes/public/index.html', {root: __dirname})});
router.get("/artist", function(req, res) {
  res.status(200).json(artist);
  res.sendFile("index.html");
});

router.get("/:id", function(req, res) {
  let found = artist.find(function(item) {
    return item.id === parseInt(req.params.id);
  });

  if (found) {
    res.status(200).json(found);
  } else {
    res.sendStatus(404);
    res.send(artist);
  }
});

router.post("/", function(req, res) {
  let itemIds = artist.map(item => item.id);
  let orderNums = artist.map(item => item.order);

  let newId = itemIds.length > 0 ? Math.max.apply(Math, itemIds) + 1 : 1;
  let newOrderNum =
    orderNums.length > 0 ? Math.max.apply(Math, orderNums) + 1 : 1;

  let newItem = {
    id: newId,
    musician: req.body.musician,
    order: newOrderNum,

    createdOn: new Date()
  };

  artist.push(newItem);
  res.status(201).json(newItem);
  res.send(artist);
});

router.put("/:id", function(req, res) {
  let found = artist.find(function(item) {
    return item.id === parseInt(req.params.id);
  });

  if (found) {
    let updated = {
      id: found.id,
      musician: req.body.musician,
      order: req.body.order
    };

    let targetIndex = artist.indexOf(found);

    artist.splice(targetIndex, 1, updated);

    res.sendStatus(204);
  } else {
    res.sendStatus(404);
    res.send(artist);
  }
});

router.delete("/:id", function(req, res) {
  let found = artist.find(function(item) {
    return item.id === parseInt(req.params.id);
  });

  if (found) {
    let targetIndex = artist.indexOf(found);

    artist.splice(targetIndex, 1);
  }

  res.sendStatus(204);
  res.send(artist);
});

module.exports = router;
