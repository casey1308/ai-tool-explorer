const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();

// Load tools data
router.get('/tools', (req, res) => {
 const tools = require('../tools.json'); // ✅ Correct path
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ message: 'Error reading tools data' });
    }
    res.json(JSON.parse(data));
  });
});

// Favorites route (optional)
router.get('/favorites', (req, res) => {
  const filePath = path.join(__dirname, '../data/favorites.json');
  if (!fs.existsSync(filePath)) return res.json([]);
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) return res.status(500).json({ message: 'Error reading favorites' });
    res.json(JSON.parse(data));
  });
});

router.post('/favorites', (req, res) => {
  const filePath = path.join(__dirname, '../data/favorites.json');
  const newTool = req.body;

  let favorites = [];
  if (fs.existsSync(filePath)) {
    const raw = fs.readFileSync(filePath, 'utf8');
    favorites = JSON.parse(raw);
  }

  if (favorites.some(t => t.id === newTool.id)) {
    return res.status(400).json({ message: 'Already in favorites' });
  }

  favorites.push(newTool);
  fs.writeFileSync(filePath, JSON.stringify(favorites, null, 2));
  res.status(201).json(newTool);
});

router.delete('/favorites/:id', (req, res) => {
  const filePath = path.join(__dirname, '../data/favorites.json');
  const id = parseInt(req.params.id);

  let favorites = [];
  if (fs.existsSync(filePath)) {
    const raw = fs.readFileSync(filePath, 'utf8');
    favorites = JSON.parse(raw);
  }

  const updated = favorites.filter(tool => tool.id !== id);
  fs.writeFileSync(filePath, JSON.stringify(updated, null, 2));
  res.json({ message: 'Removed from favorites' });
});

module.exports = router;
