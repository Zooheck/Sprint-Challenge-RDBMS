const db = require('../dbConfig.js')

module.exports = {
    add,
    deleteAction,
    updateAction
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

async function deleteAction(id) {
    return count = await db('actions')
        .where({id: id})
        .del()
}

async function updateAction(action, id) {
    const count = await db('actions')
        .where({id: id})
        .update(action)
    if(count > 0) {
        return updatedAction = await db('actions')
            .where({id: id})
            .first()
    } else {
        return false
    }
}