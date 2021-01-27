const { Router } = require('express')
const writeModel = require('../models/write.model');

const route = Router()

route.post('/write', async (req, res) => {
    try {
        const { text, userId } = req.body;
    
        const write = await writeModel.save({
            text,
            userId
        })

        res.json(write);
    }
    catch (err) {
        res.status(500).json(err);
    }
})

route.get('/writes/:userId', async (req, res) => {
    const { from, to } = req.query;
    const { userId } = req.params;

    const writes = await writeModel.getFiltered({ userId, from, to });
    
    res.json(writes);
});

module.exports = route;