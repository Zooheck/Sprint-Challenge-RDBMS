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

router.put('/:id', async (req, res) => {
    if (!req.body.notes || !req.body.description) {
        return res.status(404).json({message: 'You must include "notes" and "description"'})
    }
    try {
        const newAction = await ActionFuncs.updateAction(req.body, req.params.id)
        if (newAction === false) {
            res.status(404).json({message: 'Action not found'})
        } else {
            res.status(200).json(newAction)
        }
    } catch (error) {
        res.status(500).json(error)
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const count = await ActionFuncs.deleteAction(req.params.id)

        if(count > 0) {
            res.status(204).end()
        } else {
            res.status(404).json({message: 'Action not found'})
        }
    } catch (error) {
        res.status(500).json(error)
    }
})
module.exports = router;