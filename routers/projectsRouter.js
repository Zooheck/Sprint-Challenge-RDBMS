const express = require('express');
const router = express.Router();

const ProjectFuncs = require('../helpers/projectHelpers.js')

router.get('/', async (req, res) => {
    const projects = await ProjectFuncs.get();
    try {
        res.status(200).json(projects)
    } catch (error) {
        res.status(500).json({message: 'Error retrieving projects'})
    }
})
module.exports = router;