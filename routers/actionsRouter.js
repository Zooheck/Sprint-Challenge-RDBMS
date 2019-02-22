const express = require('express');
const router = express.Router();

const ActionFuncs = require('../helpers/actionHelpers.js')

router.post('/', async (req, res) => {
    if (!req.body.project_id || !req.body.description || !req.body.notes) {
        return res.status(404).json({ message: 'Your action must include a project_id, a description, and notes'})
    }
    const newAction = await ActionFuncs.add(req.body)

    try {
        res.status(201).json(newAction)
    } catch (error) {
        res.status(500).json({ message: 'Error adding project'})
    }
})
module.exports = router;