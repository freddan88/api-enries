const path = require('path');
const express = require('express');
const router = express.Router();

const mongoose = require(path.join(__dirname, '../config/mongo'));
const Entry = mongoose.model('Entry');

// Get all entries
router.get('/entries', async (req, res) => {
    try{
        const entries = await Entry.find();
        res.json(entries);
    } catch (error) {
        res.status(404).send('No entries found');
    }
});

// Find Single
router.get('/entries/:id', async (req, res) => {
    try{
        const { id } = req.params;
        const entry = await Entry.findOne({_id: id});
        res.json(entry);
    } catch (error) {
        res.status(404).send('No entries found for that id');
    }
});

// Add an entry
router.post('/entries', async (req, res) => {
    const entry = new Entry(req.body);
    const savedEntry = await entry.save();
    res.send(savedEntry);
});

// Update
router.put('/entries/:id', async (req, res) => {
    try{
        const { id } = req.params;
        const updated = await Entry.findByIdAndUpdate(id, {$inc: {likes: 1}}, { new: true });
        res.json(updated);
    } catch (error) {
        res.status(404).send('No entry found for that id');
    }
});

router.delete('/entries/:id', async (req, res) => {
    try{
        const { id } = req.params;
        const deleted = await Entry.findOneAndDelete({_id: id});
        res.json(deleted);
    } catch (error) {
        res.status(404).send('No entries found for that id');
    }
});

module.exports = router;
