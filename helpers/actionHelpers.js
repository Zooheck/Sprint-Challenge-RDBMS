const db = require('../dbConfig.js')

module.exports = {
    add
}

// async function getById(id) {
//     const action = await db('actions')
//         .where('project_id', '=', id)
//         .select('description', 'notes', 'completed')
//     const project = 
// }
function getById(id) {
    return db('actions')
        .where({ id })
        .first()
}

function add(action) {
    return db('actions')
        .insert(action)
        .then(ids => {
            return getById(ids[0]);
        })
}