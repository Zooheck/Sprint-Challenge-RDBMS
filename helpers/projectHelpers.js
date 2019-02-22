const db = require('../dbConfig.js')

module.exports = {
    get,
    getById
}

function get() {
    return db('projects')
}

async function getById(id) {
    const project = await db('projects as p')
        .where({ id })
        .first();
    const actions = await db('actions as a')
        .select('a.id', 'a.description', 'a.notes', 'a.completed')
        .where('a.project_id', id)
        .orderBy('a.id')
    return { project, actions }
}