const express = require('express');

const db = require('./db');

const router = express.Router();

router.get('/video-list', async (req, res) => {
    try {
        const data = await db.getAll();

        return res.status(200).json(data);
    } catch (e) {
        console.log('Error', e);
        return res.status(500).send(e.message);
    }
});

router.post('/remove-video', async (req, res) => {
    try {
        const data = await db.destroy(req.body.videoId);

        return res.status(200).json(data);
    } catch (e) {
        console.log('Error', e);
        return res.status(500).send(e.message);
    }
});

router.post('/add-video', async (req, res) => {
    try {
        const data = await db.create(req.body.videoId, req.body.title, req.body.thumbnail);

        return res.status(200).json(data);
    } catch (e) {
        console.log('Error', e);
        return res.status(500).send(e.message);
    }
});

module.exports = router;
