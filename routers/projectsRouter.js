const express = require('express');
const router = express.Router();

const ProjectFuncs = require('../helpers/projectHelpers.js')

router.get('/:id', async (req, res) => {
    const projects = await ProjectFuncs.getById(req.params.id);
    try {
        res.status(200).json(projects)
    } catch (error) {
        res.status(500).json({message: 'Error retrieving project'})
    }
})

router.post('/', async (req, res) => {
    const newProject = await ProjectFuncs.add(req.body)

    try {
        res.status(201).json(newProject)
    } catch (error) {
        res.status(500).json({ message: 'Error adding project'})
    }
})
module.exports = router;